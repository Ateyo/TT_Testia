import { NgModule } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { DefectManagerService } from '../shared/services/defect-manager.service';
import { SharedModule } from '../shared/shared.module';
import { DefectManagerFormComponent } from './components/form/defect-manager-form.component';
import { DefectManagerPageComponent } from './containers/defect-manager-page.component';
import { DefectManagerComponent } from './defect-manager.component';
import { defectManagerRoutes } from './defect-manager.routes';

@NgModule({
  imports: [
    RouterModule.forChild(defectManagerRoutes),
    SharedModule,
    MatIconModule,
  ],
  providers: [FormGroupDirective, DefectManagerService],
  declarations: [
    DefectManagerComponent,
    DefectManagerPageComponent,
    DefectManagerFormComponent,
  ],
})
export class DefectManagerModule {}
