import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnapsService } from 'src/app/services/face-snaps.service';
import { FaceSnap } from '../../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  buttonText!: string;
  snapped!: boolean;


  constructor(private faceSnapsService: FaceSnapsService, private router: Router) { }

  ngOnInit(): void {

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

  onViewFaceSnap() {
      this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
  
}
