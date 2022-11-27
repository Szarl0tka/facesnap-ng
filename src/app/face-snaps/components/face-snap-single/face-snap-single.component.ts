import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
import { FaceSnap } from 'src/app/core/models/face-snap.model';

@Component({
  selector: 'app-face-snap-single',
  templateUrl: './face-snap-single.component.html',
  styleUrls: ['./face-snap-single.component.scss']
})
export class FaceSnapSingleComponent implements OnInit {

  faceSnap!: FaceSnap;  
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;
  snapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapId);
    this.buttonText = 'Oh Snap!';
    this.snapped = false;
  }

  onSnap(faceSnapId: number) {
    if (this.snapped) {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.snapped = false)
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.snapped = true)
      );
    }
  }

}
