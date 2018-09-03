import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material';
import {AppLoadService} from './core/services/app-load.service';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './core/core.module';

export function get_settings(appLoadService: AppLoadService): () => Promise<any> {
  return () => appLoadService.getSettings();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    CoreModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: get_settings,
      multi: true,
      deps: [AppLoadService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
