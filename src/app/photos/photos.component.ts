import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  template: `
    <div class="container">
      <div class="container-fluid">
        <div class="row pt-5">
          <div
            *ngFor="let image of images"
            class="col-xs-12 col-sm-6 col-md-4 col-lg-4 image"
          >
            <img
              [src]="'../assets/images/' + image"
              [alt]="image"
              class="img-fluid rounded img-thumbnail"
            />
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent {
  images = [
    'placeholder.png',
    'placeholder.png',
    'placeholder.png',
    'placeholder.png',
    'placeholder.png',
    'placeholder.png',
    'placeholder.png',
    'placeholder.png',
    'placeholder.png',
    'placeholder.png',
    'placeholder.png',
    'placeholder.png',
    'placeholder.png',
  ];
}
