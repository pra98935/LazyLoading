import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  @ViewChild('scaleImg') scaleImg;

  constructor() { }

  ngOnInit() {
  }

  plus(zoomLevel){
    this.scaleImg.nativeElement.style.zoom = zoomLevel;
  }
 

}
