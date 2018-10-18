import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {
  
  @Input() description = '';

  @Input() url = '';
}