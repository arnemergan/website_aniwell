import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {
    path: 'nl/home',
    component: HomeComponent,
  },
  {
    path: ':language/home',
    component: HomeComponent,
  },
  /*{
    path: ':language/team',
    component: TeamComponent,
  },*/
  {
    path: ':language/photos',
    component: PhotosComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'nl/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollOffset: [0, 100],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
