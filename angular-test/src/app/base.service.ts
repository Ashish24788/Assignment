import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as FileSaver from 'file-saver';

@Injectable()
export class BaseService {
  public marcoPoloResult: string;
  asciiRsult: any;
  constructor(private http: HttpClient) { }

  getMarcoPolo(num) {
    this.marcoPoloResult = '';
    for (let i = 1; i <= num; i++) {
      if (i % 4 == 0 && i % 7 == 0) {
        this.marcoPoloResult += 'marcopolo' + ', ';
      } else if (i % 4 == 0) {
        this.marcoPoloResult += 'marco' + ', ';
      } else if (i % 7 == 0) {
        this.marcoPoloResult += 'polo' + ', ';
      } else {
        this.marcoPoloResult += i + ', ';
      }
    }
    this.marcoPoloResult = this.marcoPoloResult.slice(0, -1);
    return this.marcoPoloResult;
  }

  readInputStory() {
    this.http.get('assets/input_user_story_1.txt', { responseType: 'text' })
      .subscribe(suc => {
        this.asciiRsult = '';
        const asciiValue = suc.split('\n\n');
        asciiValue.map((data) => {
          let num = this.get7segment(data);
          num += ' \t';
          this.asciiRsult += num;
        });
        const blob = new Blob([this.asciiRsult], { type: 'text/plain' });
        FileSaver(blob, 'output_user_story_2.txt');
      },
        err => {
          console.log(err);
        });
  }

  get7segment(ascii) {
    return ascii.
      split('\n').
      reduce(function (r, a, i) {
        a.match(/.../g) && a.match(/.../g).forEach(function (b, j) {
          r[j] = r[j] || [];
          r[j][i] = b;
        });
        return r;
      }, []).
      map(function (a) {
        return a.join('');
      }).
      map(function (a) {
        let bits: any;
        bits = { 63: 0, 6: 1, 91: 2, 79: 3, 102: 4, 109: 5, 125: 6, 7: 7, 127: 8, 111: 9, 0: ' ' };
        let v: any = '909561432'.split('');
        v = v.reduce(function (r, v, i) {
          return r + ((a[i] !== ' ') << v);
        }, 0);
        return v in bits ? bits[v] : '*'; // * is an illegal character
      }).
      join('');
  }
}
