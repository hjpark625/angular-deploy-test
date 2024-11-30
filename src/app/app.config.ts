import { provideZoneChangeDetection } from '@angular/core'
import { withHashLocation, provideRouter } from '@angular/router'

import { routes } from './app.routes'

import type { ApplicationConfig } from '@angular/core'

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withHashLocation())]
}
