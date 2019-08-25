import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GilliconModule } from 'angular-gillicons';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';

@NgModule({
    declarations: [
        AppComponent,
        TooltipDirective
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        FormsModule,
        GilliconModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
