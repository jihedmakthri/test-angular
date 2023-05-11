import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddVideoComponent } from './add-video/add-video.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home' , component:VideoDetailComponent},
  {path: 'addVideo' , component:AddVideoComponent},
  {path:'**', component:NotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
