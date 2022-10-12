import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

export type DamageTypes = {
  label: string;
  value: string;
  disabled?: boolean;
};

@Component({
  selector: 'pmd-defect-form',
  templateUrl: `defect-manager-form.component.html`,
  styleUrls: [`defect-manager-form.component.scss`],
})
export class DefectManagerFormComponent {
  @Output() newDamageForm = new EventEmitter();

  damageForm!: FormGroup;
  damageTypes: DamageTypes[];

  constructor(
    private _formBuilder: FormBuilder,
    private _formDirective: FormGroupDirective
  ) {
    this.createForm();
    this.damageTypes = [
      {
        label: 'Délaminage',
        value: 'delaminage',
      },
      {
        label: 'Porosité',
        value: 'porosite',
      },
      {
        label: 'Inclusion',
        value: 'inclusion',
      },
    ];
  }
  getErrorMessage() {
    if (
      this.damageForm.controls['defectType'].hasError('required') ||
      this.damageForm.controls['operatorName'].hasError('required')
    ) {
      return 'Une valeur est requise';
    }

    return this.damageForm.controls['operatorName'].hasError('pattern')
      ? 'Ce champ ne doit pas comporter de chiffres'
      : '';
  }

  createForm() {
    this.damageForm = this._formBuilder.group({
      defectType: ['', [Validators.required]],
      operatorName: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z ]*')],
      ],
      operatorComment: [''],
    });
  }

  submitForm() {
    if (!this.damageForm.valid) {
      this.damageForm.markAllAsTouched();
      return;
    }

    this.newDamageForm.emit(this.damageForm.value);
    this.damageForm.reset();
  }
}
