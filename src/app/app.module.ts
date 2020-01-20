import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { ValutaPipe } from './pipes/valuta.pipe';
import { KapitalPipe } from './pipes/kapital.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { LengthConverterPipe } from './pipes/length-converter.pipe';
import { JustTestingPipe } from './pipes/just-testing.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ValutaPipe,
    KapitalPipe,
    FileSizePipe,
    LengthConverterPipe,
    JustTestingPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
