import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { TestComponent } from 'src/app/component/test/test.component';

import { BallsComponent } from 'src/app/component/balls/balls.component';
import { JheyTriangleComponent } from '../component/jhey-triangle/jhey-triangle.component';
import { AboutComponent } from '../component/about/about.component';
import { CountdownTimerComponent } from '../component/countdown-timer/countdown-timer.component';



const appRoutes: Routes = [
  { path: 'balls', component: BallsComponent },
  { path: 'triangle', component: JheyTriangleComponent },
  { path: 'test', component: TestComponent },
  { path: 'about', component: AboutComponent },
  { path: 'countDownTimer', component: CountdownTimerComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
