import { Component, ViewChild } from '@angular/core';
import { AppConfig } from '../config/app.config';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    constructor(public appConfig: AppConfig) {
        console.debug('AppConfig', this.appConfig);
    }
}