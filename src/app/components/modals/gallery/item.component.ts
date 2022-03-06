import {Component, EventEmitter, OnInit, Output, Input, ViewChild, AfterViewInit} from '@angular/core';
import {ModalService} from '../../../services/modal.service';
import {AppService} from '../../../services/app.service';
import {TranslateService} from '@ngx-translate/core';
// import {UserModelService} from '../../../models/user.model.service';
import {SwiperComponent, SwiperConfigInterface, SwiperDirective} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-gallery',
  templateUrl: './item.html',
  styleUrls: ['./item.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  appService: AppService;
  translateService: TranslateService;
  // userModelService: UserModelService;

  @Input() index: any;
  @Input() album: any;

  @Output() resultEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  private modalService: ModalService;
  closing = false;
  complexForm: any;
  sub: any[] = [];
  loading = true;

  swiperGalleryConfig: SwiperConfigInterface = {
    // spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: undefined
    }
  };

  swiperThumbConfig: SwiperConfigInterface = {
    spaceBetween: 20,
    slidesPerView: 6,
    freeMode: true,
    centeredSlides: true,
    watchSlidesProgress: true,
    breakpoints: {
      640: {
        slidesPerView: 6,
      },
      320: {
        slidesPerView: 3,
      },
    }
  };

  swiperThumbReady = true;

  @ViewChild('galleryThumbs', {static: false}) galleryThumbs?: SwiperComponent;
  @ViewChild('galleryImages', {static: false}) galleryImages?: SwiperComponent;

  constructor(
    appService: AppService,
    translateService: TranslateService,
    // userModelService: UserModelService,
    modalService: ModalService,
  ) {
    this.appService = appService;
    this.translateService = translateService;
    // this.userModelService = userModelService;
    this.modalService = modalService;
  }

  ngOnInit(): void {
    this.loading = false;
  }

  close() {
    this.closing = true;
    setTimeout(() => {
      this.modalService.closeModal();
    }, 200);
  }

  ngAfterViewInit() {
    const imagesSwiper = this.galleryImages?.directiveRef?.swiper();
    const thumbsSwiper = this.galleryThumbs?.directiveRef?.swiper();

    imagesSwiper.thumbs.swiper = thumbsSwiper;
    imagesSwiper.thumbs.init();
    imagesSwiper.thumbs.update();
  }

}
