import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbCollapseModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
