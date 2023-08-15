import { Component } from '@angular/core';
import { GetphotosService } from '../getphotos.service';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css'],
})
export class PhotoViewerComponent {
  photoUrl!: string;

  constructor(private photoService: GetphotosService) {
    this.fetchImg();
  }

  onClick() {
    this.fetchImg();
  }

  fetchImg() {
    this.photoService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }
}
