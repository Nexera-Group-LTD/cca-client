import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { environment } from '../environments/environment';
import { CoreModule } from './core';
import { SharedModule } from './shared/shared-module';
import { LayoutsModule } from './layouts/layouts-module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot({
      apiBaseUrl: environment.apiBaseUrl,
      websocketBaseUrl: environment.websocketBaseUrl,
      apiRequestTimeoutMs: 15_000,

      storage: {
        namespace: 'default',
        version: 1,
        defaultArea: 'local',
      },

      auth: {
        refreshPath: '/auth/refresh',
        loginRoute: '/signin',
      },

      connection: {
        pollIntervalMs: 30_000,
        timeoutMs: 5_000,
        degradedLatencyMs: 2_500,
      },

      websocket: {
        connectionTimeoutMs: 10_000,
        reconnectionAttempts: Infinity,
        reconnectionDelayMs: 1_000,
        reconnectionDelayMaxMs: 10_000,
        randomizationFactor: 0.5,
      },

      theme: {
        defaultColor: 'default',
        defaultMode: 'light',
      },
    }),
    SharedModule,
    LayoutsModule,
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
