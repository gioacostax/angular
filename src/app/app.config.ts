import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import {
  type ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideTanStackQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { ConfirmationService, MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';

import { preset } from '@/styles/primeuix';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch(), withInterceptors([])),
    provideTanStackQuery(
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
    ),
    provideRouter(routes),
    providePrimeNG({
      inputStyle: 'filled',
      inputVariant: 'filled',
      ripple: true,
      theme: {
        preset,
      },
    }),
    ConfirmationService,
    MessageService,
  ],
};
