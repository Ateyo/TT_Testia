import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DamageForm } from '@pmd/interfaces';

@Component({
  selector: 'pmd-defect-manager-page',
  template: `<pmd-defect-form
    (newDamageForm)="onSubmit($event)"
  ></pmd-defect-form>`,
})
export class DefectManagerPageComponent {
  constructor(private _snackBar: MatSnackBar) {}

  onSubmit(newDamageForm: DamageForm) {
    console.log(newDamageForm);
    this._snackBar.open('Un nouveau défaut à été ajouté', 'Ok', {
      duration: 5000,
    });
  }
}
