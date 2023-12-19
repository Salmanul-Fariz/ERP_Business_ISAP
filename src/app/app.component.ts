import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 8,
      },
    },
    nav: true,
  };

  slidesStore = [
    {
      id: '1',
      src: 'https://isap.solutions/wp-content/uploads/2023/06/ipeye-150x150.png',
    },
    {
      id: '1',
      src: 'https://isap.solutions/wp-content/uploads/2023/06/ipeye-150x150.png',
    },
    {
      id: '1',
      src: 'https://isap.solutions/wp-content/uploads/2023/06/ipeye-150x150.png',
    },
    {
      id: '1',
      src: 'https://isap.solutions/wp-content/uploads/2023/06/ipeye-150x150.png',
    },
    {
      id: '1',
      src: 'https://isap.solutions/wp-content/uploads/2023/06/ipeye-150x150.png',
    },
    {
      id: '1',
      src: 'https://isap.solutions/wp-content/uploads/2023/06/ipeye-150x150.png',
    },
    {
      id: '1',
      src: 'https://isap.solutions/wp-content/uploads/2023/06/ipeye-150x150.png',
    },
    {
      id: '1',
      src: 'https://isap.solutions/wp-content/uploads/2023/06/ipeye-150x150.png',
    },
    {
      id: '1',
      src: 'https://isap.solutions/wp-content/uploads/2023/06/ipeye-150x150.png',
    },
  ];
}
