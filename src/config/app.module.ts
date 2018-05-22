import { NgModule } from '@angular/core';
import { AppConfig } from '../config/app.config';

@NgModule({
    providers: [
        AppConfig,

        // other injectables
    ]
})
export class AppModule { } 