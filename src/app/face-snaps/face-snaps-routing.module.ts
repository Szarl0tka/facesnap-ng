import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapSingleComponent } from './components/face-snap-single/face-snap-single.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';

const routes: Routes = [
  { path: 'create', component: NewFaceSnapComponent },
  { path: ':id', component: FaceSnapSingleComponent },
  { path: '', component: FaceSnapListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaceSnapsRoutingModule {}