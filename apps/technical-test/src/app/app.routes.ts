import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'defect-manager',
    loadChildren: () =>
      import('./defect-form/defect-manager.module').then(
        (m) => m.DefectManagerModule
      ),
  },
  {
    path: '**',
    redirectTo: 'defect-manager',
  },
];
