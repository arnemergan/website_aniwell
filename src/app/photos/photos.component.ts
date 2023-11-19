import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-photos',
  template: `
    <div class="container">
      <div class="container-fluid">
        <div class="row pt-5 pb-5">
          <div
            *ngFor="let image of imagesProcessed; index as i"
            class="col-xs-12 col-sm-6 col-md-4 col-lg-4 image"
          >
            <img
              [src]="image?.data?.thumb"
              [alt]="image?.data?.alt"
              [lightbox]="i"
              loading="lazy"
              class="img-fluid rounded img-thumbnail"
            />
          </div>
        </div>
        <div class="row pb-5 justify-content-center" *ngIf="showGoogleUrl">
          <div class="col-8">
            <a [href]="photosUrl" target="_blank">{{
              'PHOTOS_LINK' | translate
            }}</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  images = ['1.webp', '2.webp', '3.webp'];

  imagesProcessed: GalleryItem[];
  photosUrl = 'https://photos.app.goo.gl/6Xk22GAuGTavENer7';
  showGoogleUrl = false;

  constructor(public gallery: Gallery, private title: Title) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.title.setTitle("Foto's | dap aniwell");
    this.imagesProcessed = this.images.map(
      (image) =>
        new ImageItem({
          src: '../assets/images/photo-album/' + image,
          thumb: '../assets/images/photo-album/' + image,
          alt: image,
        })
    );
    this.gallery.ref().play();
    this.gallery.ref().load(this.imagesProcessed);
  }
}
