import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  api:string="http://localhost:3000/videos"

  constructor(private http: HttpClient) { }
  
  getVideo() {
    this.http.get<Video[]>(this.api)
  }
  getVideoById(id:number){
    return this.http.get<Video>(this.api+'/'+id)
  }
  postVideo(video:Video){
    return this.http.post(this.api,video)
  }
  deleteVideo(id:number){
    return this.http.delete(this.api+'/'+id)
  }
  updateVideo(id: number, video:Video){
    return this.http.put(this.api+'/'+id,video)
  }
}
