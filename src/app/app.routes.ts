import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'chuck',
  },
  {
    children: [
      {
        loadComponent: () =>
          import('./features/chuck/chuck.component').then((m) => m.ChuckComponent),
        path: 'chuck',
      },
    ],
    loadComponent: () =>
      import('./layout/main-layout/main-layout.component').then((m) => m.MainLayoutComponent),
    path: '',
  },
  {
    path: '**',
    redirectTo: 'chuck',
  },
];
