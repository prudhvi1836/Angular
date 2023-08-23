import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  public title : any = "this is image component";
  public imageUrl : any = "../../assets/database-light.svg"

  public updateImage(){
    this.imageUrl = "../../assets/plus-solid.svg"
  }

  
}
