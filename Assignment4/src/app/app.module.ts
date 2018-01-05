import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Include FormsModule to use Input
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyNewCompComponent } from './my-new-comp/my-new-comp.component';
import { AnotherCompComponent } from './another-comp/another-comp.component';

// FormsModule to be used in imports not in declarations
@NgModule({
  declarations: [
    AppComponent,
    MyNewCompComponent,
    AnotherCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
