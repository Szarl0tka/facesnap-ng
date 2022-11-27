import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { FaceSnapSingleComponent } from './components/face-snap-single/face-snap-single.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapsRoutingModule } from './face-snaps-routing.module';



@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    FaceSnapSingleComponent,
    NewFaceSnapComponent,    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsRoutingModule 
  ],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    FaceSnapSingleComponent,
    NewFaceSnapComponent,  
  ]
})
export class FaceSnapsModule { }
