import { Component, OnInit } from '@angular/core';
import { Photo } from '../../photo/photo';
import { Input } from '@angular/core';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] = [];

  constructor() { }

  ngOnInit() {
  }

}
