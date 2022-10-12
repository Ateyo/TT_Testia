import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DamageForm } from '@pmd/interfaces';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class DefectManagerService {
  constructor(private _http: HttpClient) {}

  sendDamageForm(damageForm: DamageForm, curDate: Date): Observable<any> {
    return this._http.post(`${environment.serviceUrl}/posts`, {
      damageForm,
      curDate,
    });
  }
}
