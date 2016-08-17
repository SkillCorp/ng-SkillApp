// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AppState } from './app.service';
import { AuthGuard } from './auth';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  AuthGuard
];
