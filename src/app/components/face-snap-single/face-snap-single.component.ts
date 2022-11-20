import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnapsService } from 'src/app/services/face-snaps.service';
import { FaceSnap } from '../../models/face-snap.model';

@Component({
  selector: 'app-face-snap-single',
  templateUrl: './face-snap-single.component.html',
  styleUrls: ['./face-snap-single.component.scss']
})
export class FaceSnapSingleComponent implements OnInit {

  faceSnap!: FaceSnap;  
  buttonText!: string;
  snapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
    this.buttonText = 'Oh Snap!';
    this.snapped = false;
  }

  onSnap() {
    if (this.snapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
      this.snapped = false;
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Snapped!';
      this.snapped = true;
    }
  }

}
