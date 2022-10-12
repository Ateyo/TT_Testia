import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DamageForm } from '@pmd/interfaces';
import { catchError, tap } from 'rxjs';

import { DefectManagerService } from '../../shared/services/defect-manager.service';

@Component({
  selector: 'pmd-defect-manager-page',
  template: `<pmd-defect-form
    (newDamageForm)="onSubmit($event)"
  ></pmd-defect-form>`,
})
export class DefectManagerPageComponent {
  constructor(
    private _snackBar: MatSnackBar,
    private _defectManagerService: DefectManagerService
  ) {}

  onSubmit(newDamageForm: DamageForm) {
    this._defectManagerService
      .sendDamageForm(newDamageForm, new Date())
      .pipe(
        catchError((error) => {
          console.error(error);
          this._snackBar.open(
            `Une erreur pendant l'envoi de formulaire à été détectée`,
            'Ok'
          );
          return [];
        })
      )
      .subscribe((x) => {
        this._snackBar.open('Un nouveau défaut à été ajouté', 'Ok', {
          duration: 5000,
        });
      });
  }
}
