import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
// you can bootstrap component just like that, it will automatically create the browser environment
//  and provide your services here 
bootstrapApplication(AppComponent, {
  providers : []
});