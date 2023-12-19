import { AfterViewInit, Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
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

  // Subscribe to NgbCarousel slide event on initialization
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      this.zoomCarouselImage('0');

      const myCarousel = document?.getElementById(
        'carouselExampleCaptions'
      ) as HTMLElement;

      if (myCarousel)
        myCarousel.addEventListener('slide.bs.carousel', (event: any) => {
          this.zoomCarouselImageRemove();

          const targetIndex = event.to;

          setTimeout(() => {
            this.zoomCarouselImage(targetIndex);
          }, 900);
        });
    }
  }

  zoomCarouselImage(id: string) {
    const image = document.getElementById(
      `carousel_image_${id}`
    ) as HTMLImageElement;

    image.style.transform = 'scale(1.06)';
  }

  zoomCarouselImageRemove() {
    for (let i = 0; i < 3; i++) {
      const image = document.getElementById(
        `carousel_image_${i}`
      ) as HTMLImageElement;

      image.style.transform = 'scale(1)';
    }
  }
}
