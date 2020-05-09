import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/images/home-1.png',
    'assets/images/home-2.png',
    'assets/images/home-3.png',
    'assets/images/home-4.png',
    'assets/images/home-5.png',
    'assets/images/home-6.png',
    'assets/images/home-7.png',
    'assets/images/home-8.png',
    'assets/images/home-9.png',
    'assets/images/home-10.png'
  ];

  constructor() { }

  ngOnInit() {
  }

}
