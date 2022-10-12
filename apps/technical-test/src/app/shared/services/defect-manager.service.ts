import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DamageForm } from '@pmd/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class DefectManagerService {
  constructor(private _http: HttpClient) {}

  sendDamageForm(damageForm: DamageForm, curDate: Date): Observable<any> {
    return this._http.post('https://jsonplaceholder.typicode.com/posts', {
      damageForm,
      curDate,
    });
  }
}
