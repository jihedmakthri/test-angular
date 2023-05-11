import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video';
import { Router } from '@angular/router';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  video:Video = new Video()
  constructor(private route:Router,private videoService:VideoService) { }

  ngOnInit(): void {
  }

  addVideo() {
    this.videoService.postVideo(this.video).subscribe({
      next: () => {
        alert('added success')
        this.route.navigateByUrl('/home')
      }
    })
  }
}
