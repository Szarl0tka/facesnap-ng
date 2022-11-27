import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpObservableTrainExempleComponent } from './components/op-observable-train-exemple/op-observable-train-exemple.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LandingPageComponent,
    OpObservableTrainExempleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LandingPageComponent,
    OpObservableTrainExempleComponent
  ]
})
export class LandingPageModule { }
