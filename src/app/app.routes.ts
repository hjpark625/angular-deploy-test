import type { Routes } from '@angular/router'

export const routes: Routes = [
  { path: '', loadComponent: () => import('@/app/home/home.component').then((c) => c.HomeComponent) },
  { path: 'counter', loadComponent: () => import('@/app/counter/counter.component').then((c) => c.CounterComponent) }
]
