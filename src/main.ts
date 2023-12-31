import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  export const environment = {  
    production: false,  
    baseUrl: 'http://localhost:62769/'  
  };