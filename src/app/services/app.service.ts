import { Injectable } from '@angular/core';
import { Meta as MetaService, Title as TitleService } from '@angular/platform-browser';
// import {Meta} from '../entities/meta.entity';
// import { ActiveToast, ToastrService } from 'ngx-toastr';
import { ModalService } from './modal.service';

function _window(): any {
  return window;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {

  appReady = false;
  isLoading = false;

  // metaService: MetaService;
  titleService: TitleService;
  // toastService: ToastrService;
  modalService: ModalService;

  errorCode: number | null = null;

  constructor(
    titleService: TitleService,
    // metaService: MetaService,
    // toastService: ToastrService,
    modalService: ModalService
  ) {

    // this.toastService = toastService;
    this.titleService = titleService;
    // this.metaService = metaService;
    this.modalService = modalService;

  }

  // setMeta(meta: Meta) {
  // this.titleService.setTitle(meta.getTitle);

  // this.metaService.updateTag({name: 'description', content: meta.getDescription});
  // this.metaService.updateTag({name: 'keywords', content: meta.getKeywords});
  // }

  getWindow() {
    return _window();
  }

  // showAlert(title: string | null, body: string | null, error = false): ActiveToast < any > {

  //   const options = {
  //     tapToDismiss: false,
  //     disableTimeOut: false,
  //     closeButton: true,
  //     enableHtml: true,
  //     positionClass: 'toast-bottom-right'
  //   };
  //   if (error) {
  //     return this.toastService.error(body || '', title || '', options);
  //   } else {
  //     return this.toastService.success(body || '', title || '', options);
  //   }
  // }

  showTheme() {}

  showLogin() {}

  showMenu() {}

  showRegister() {}

  showReset() {}

  showPassword() {}

  hideAll() {}

  showLoading() {
    this.isLoading = true;
  }

  hideLoading() {
    this.isLoading = false;
  }

  isMobile() {
    return _window().innerWidth <= 991;
  }

  makeLogin(token: string) {
    document.body.classList.remove('is-overflow');
    localStorage.setItem('token', token);
  }

  makeLogout() {
    localStorage.removeItem('token');
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token !== 'null' && token !== 'undefined' && token ? token : null;
  }

  getPosition(callback: (coords: any) => void) {
    navigator.geolocation.getCurrentPosition(resp => {
        console.log(resp);
        callback({
          lng: resp.coords.longitude,
          lat: resp.coords.latitude
        });
      },
      err => {
        console.log(err);
      });
  }
}
