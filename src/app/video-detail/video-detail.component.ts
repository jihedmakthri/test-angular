import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  listVideo!:Video[]

  constructor() { }

  ngOnInit(): void {
  }

}
