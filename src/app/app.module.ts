import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';

import { RandomService } from './random.service';

import { BrokenStateComponent } from './broken-state/broken-state.component';
import { WorkingStateComponent } from './working-state/working-state.component';

@NgModule({
  declarations: [
    AppComponent,
    BrokenStateComponent,
    WorkingStateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule // <-- Comment out this line and broken-state will work in Augry
  ],
  providers: [
    RandomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
