import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    lazyLoad: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 5,
      },
      940: {
        items: 6,
      },
    },
  };

  slidesStore = [
    {
      id: '1',
      src: 'assets/images/services/job-150x150.png',
    },
    {
      id: '2',
      src: 'assets/images/services/solar-150x150.png',
    },
    {
      id: '3',
      src: 'assets/images/services/nft-150x150.png',
    },
    {
      id: '4',
      src: 'assets/images/services/network-150x150.png',
    },
    {
      id: '5',
      src: 'assets/images/services/metaverse-150x150.png',
    },
    {
      id: '6',
      src: 'assets/images/services/legal-150x150.png',
    },
    {
      id: '7',
      src: 'assets/images/services/ISAP-School-logo-150x150.png',
    },
    {
      id: '8',
      src: 'assets/images/services/isap-phone-black-150x150.png',
    },
    {
      id: '9',
      src: 'assets/images/services/isap-life-black-150x150.png',
    },
    {
      id: '10',
      src: 'assets/images/services/ISAP-HEALTH-B-150x150.png',
    },
    {
      id: '11',
      src: 'assets/images/services/ISAP-Green-150x150.png',
    },
    {
      id: '12',
      src: 'assets/images/services/isap-clinic-150x150.png',
    },
    {
      id: '13',
      src: 'assets/images/services/isap-CC-150x150.png',
    },
    {
      id: '14',
      src: 'assets/images/services/isap-black-150x150.png',
    },
    {
      id: '15',
      src: 'assets/images/services/ipeye-150x150.png',
    },
    {
      id: '16',
      src: 'assets/images/services/courses-150x150.png',
    },
    {
      id: '17',
      src: 'assets/images/services/b-digital-150x150.png',
    },
    {
      id: '18',
      src: 'assets/images/services/b-crypto-150x150.png',
    },
    {
      id: '19',
      src: 'assets/images/services/bakalat-150x150.png',
    },
  ];

  PartnerSlidesStore = [
    {
      id: '1',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/2-2.png',
    },
    {
      id: '2',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/3-2.png',
    },
    {
      id: '3',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/4-1.png',
    },
    {
      id: '4',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/5-1.png',
    },
    {
      id: '5',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/6-1.png',
    },
    {
      id: '6',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/7-1.png',
    },
    {
      id: '7',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/2-2.png',
    },
    {
      id: '8',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/3-2.png',
    },
    {
      id: '9',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/4-1.png',
    },
    {
      id: '10',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/5-1.png',
    },
    {
      id: '11',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/6-1.png',
    },
    {
      id: '12',
      src: 'https://axolonerp.com/wp-content/uploads/2022/07/7-1.png',
    },
  ];

  // Form
  FormData: FormGroup;
  submitted = false;
  isHaveError = false;
  isHaveSucess = false;
  isSubmittProcess = false;

  constructor(
    private builder: FormBuilder,
    private changeRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.patchvalue();
  }

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

  patchvalue() {
    this.FormData = this.builder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  refreshPage() {
    window.scrollTo({ top: 0 });
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

  scrollById(id: string) {
    const element = document.getElementById(id) as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  formSubmit() {
    this.isHaveError = false;
    this.isHaveSucess = false;

    if (this.isSubmittProcess) {
      return;
    }

    if (this.FormData.invalid) {
      this.submitted = true;
      this.FormData.markAllAsTouched();
      return;
    }

    this.isSubmittProcess = true;

    const { name, subject, email, message } = this.FormData.controls;

    const templateParams = {
      name: name.value,
      subject: subject.value,
      email: email.value,
      message: message.value,
    };

    emailjs
      .send(
        'service_xwyv35j',
        'template_b4errqh',
        templateParams,
        '0-h4ZxqO_dppeMWJl'
      )
      .then(
        () => {
          this.isHaveError = false;
          this.isHaveSucess = true;

          this.isSubmittProcess = false;

          this.patchvalue();

          setTimeout(() => {
            this.isHaveSucess = false;

            this.changeRef.detectChanges();
          }, 2500);
        },
        () => {
          this.isHaveError = true;
          this.isHaveSucess = false;

          this.isSubmittProcess = false;
        }
      );
  }
}
