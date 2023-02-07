import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
    declarations: [
        AppComponent,
        ChildComponent,
        FormsComponent,
       
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
        
    ]
})
export class AppModule { }
