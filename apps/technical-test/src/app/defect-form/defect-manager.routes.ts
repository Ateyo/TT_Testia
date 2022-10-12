import { Routes } from '@angular/router';

import { DefectManagerPageComponent } from './containers/defect-manager-page.component';
import { DefectManagerComponent } from './defect-manager.component';

export const defectManagerRoutes: Routes = [
  {
    path: '',
    component: DefectManagerComponent,
    children: [
      {
        path: '',
        component: DefectManagerPageComponent,
      },
    ],
  },
];
