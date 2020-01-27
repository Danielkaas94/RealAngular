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
import { BallsComponent } from './component/balls/balls.component';
import { JheyTriangleComponent } from './component/jhey-triangle/jhey-triangle.component';

import { AboutComponent } from './component/about/about.component';

import { RoutingModule } from './routing/routing.module';

// TODO:
//    • ng generate module app-routing --module app --flat
// https://stackblitz.com/angular/gollxnxqxom
// https://alligator.io/angular/navigation-routerlink-navigate-navigatebyurl/
// const appRoutes: Routes = [
//   { path: 'balls', component: BallsComponent },
//   { path: 'triangle', component: JheyTriangleComponent },
//   { path: 'test', component: TestComponent },
//   { path: 'about', component: AboutComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ValutaPipe,
    KapitalPipe,
    FileSizePipe,
    LengthConverterPipe,
    JustTestingPipe,
    BallsComponent,
    JheyTriangleComponent,
    // NavComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
