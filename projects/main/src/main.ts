import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  window.onerror = function (message, source, lineno, colno, error) {
    if ((message as string).includes('$ is not defined')) {
      return true; 
    }
    return false; 
  };
