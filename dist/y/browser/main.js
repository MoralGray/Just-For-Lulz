(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+MHp":
/*!********************************************!*\
  !*** ./src/app/components/modals/index.ts ***!
  \********************************************/
/*! exports provided: GalleryComponent, MessageModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gallery_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery/item.component */ "rfuf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return _gallery_item_component__WEBPACK_IMPORTED_MODULE_0__["GalleryComponent"]; });

/* harmony import */ var _message_modal_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-modal/item.component */ "WEas");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageModalComponent", function() { return _message_modal_item_component__WEBPACK_IMPORTED_MODULE_1__["MessageModalComponent"]; });





/***/ }),

/***/ "+NYR":
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class NavigationService {
    constructor(router, location) {
        this.previousUrl = '';
        this.currentUrl = '';
        this.router = router;
        this.location = location;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"])).subscribe((event) => {
            this.previousUrl = this.currentUrl;
            this.currentUrl = event.url;
        });
    }
    goTo(url) {
        this.goToUrl(url);
    }
    goToUrl(url, options = {}) {
        if (typeof url === 'string' || url instanceof String) {
            url = [url];
        }
        this.router.navigate(url, options);
    }
    isRoute(route) {
        return this.router.url.includes(route);
    }
    replaceState(state) {
        this.location.replaceState(state);
    }
    back() {
        this.location.back();
    }
}
NavigationService.ɵfac = function NavigationService_Factory(t) { return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NavigationService, factory: NavigationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\OpenServer\OSPanel\domains\JFL\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'https://moralgray.github.io/Just-For-Lulz/',
    publicUrl: '',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EAFY":
/*!********************************************!*\
  !*** ./src/app/pages/error/page.module.ts ***!
  \********************************************/
/*! exports provided: ErrorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageModule", function() { return ErrorPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "uNub");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ErrorPageModule {
}
ErrorPageModule.ɵfac = function ErrorPageModule_Factory(t) { return new (t || ErrorPageModule)(); };
ErrorPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ErrorPageModule });
ErrorPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _page__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"]
                }
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ErrorPageModule, { declarations: [_page__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_page__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"]] }); })();


/***/ }),

/***/ "OaWH":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "VQPA");



function _window() {
    return window;
}
class AppService {
    constructor(titleService, 
    // metaService: MetaService,
    // toastService: ToastrService,
    modalService) {
        this.appReady = false;
        this.isLoading = false;
        this.isMenu = false;
        this.errorCode = null;
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
    showTheme() { }
    showLogin() { }
    showMenu() {
        this.isMenu = !this.isMenu;
    }
    showRegister() { }
    showReset() { }
    showPassword() { }
    hideAll() { }
    showLoading() {
        this.isLoading = true;
    }
    hideLoading() {
        this.isLoading = false;
    }
    isMobile() {
        return _window().innerWidth <= 991;
    }
    makeLogin(token) {
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
    getPosition(callback) {
        navigator.geolocation.getCurrentPosition(resp => {
            console.log(resp);
            callback({
                lng: resp.coords.longitude,
                lat: resp.coords.latitude
            });
        }, err => {
            console.log(err);
        });
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/app.service */ "OaWH");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/navigation.service */ "+NYR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_header_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/item.component */ "uJxg");
/* harmony import */ var _components_footer_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/item.component */ "Z74i");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_error_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/error/page */ "uNub");








function AppComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-error-page");
} }
function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_0_ng_container_3_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_container_0_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.appService.errorCode)("ngIfElse", _r3);
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
// import {UserModelService} from './models/user.model.service';
// import {PagesModelService} from './models/pages.model.service';
class AppComponent {
    constructor(appService, navigationService) {
        // public userModelService: UserModelService;
        // public pagesModelService: PagesModelService;
        this.loading = 0;
        this.appService = appService;
        this.navigationService = navigationService;
        // this.userModelService = userModelService;
        // this.pagesModelService = pagesModelService;
    }
    ngOnInit() {
        this.loadPages();
        // this.getUser();
        this.cursorClick();
    }
    cursorClick() {
        window.addEventListener('click', function (e) {
            const circle = document.createElement('div');
            circle.style.top = (e.pageY - 5) + "px";
            circle.style.left = (e.pageX - 5) + "px";
            circle.className = 'circle';
            setTimeout(function () {
                circle.classList.add("active");
            }, 0);
            circle.addEventListener("transitionend", function () {
                circle.remove();
            });
            document.body.appendChild(circle);
        });
    }
    loadPages() {
        this.loading++;
        // this.pagesModelService.loadPages((status) => {
        //   this.checkLoading();
        // });
        this.checkLoading();
    }
    // getUser() {
    //   if (this.appService.getToken()) {
    //     this.loading++;
    //     this.userModelService.getCurrentUser((status) => {
    //       this.checkLoading();
    //     });
    //   }
    // }
    checkLoading() {
        this.loading--;
        if (this.loading === 0) {
            this.appReady();
        }
    }
    appReady() {
        this.appService.appReady = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "router-container"], [4, "ngIf", "ngIfElse"], ["error", ""], ["id", "cursor"], [1, "main-loading-container"], [1, "loading-spinner"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 8, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 3, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appService.appReady);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.appService.appReady);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_header_item_component__WEBPACK_IMPORTED_MODULE_4__["HeaderItemComponent"], _components_footer_item_component__WEBPACK_IMPORTED_MODULE_5__["FooterItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _pages_error_page__WEBPACK_IMPORTED_MODULE_7__["ErrorPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "VQPA":
/*!*******************************************!*\
  !*** ./src/app/services/modal.service.ts ***!
  \*******************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var src_app_components_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/modals */ "+MHp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ModalService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentRef = null;
        this.modalComponents = src_app_components_modals__WEBPACK_IMPORTED_MODULE_0__;
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /*
    * @param component - компонент модального окна для отрисовки
    * @param inputs - объект данных для передачи в декораторы @Input()
    * @param callback - функция обратного вызова срабатывающая на subscribe @output() компонента.
    * Содержит объект типа: <br>
    * {eventName - имя параметра или 'onDestroy' при уничтожении, <br>
    * data - данные subscribe}
    * @description При удалении компонента в callback приходит последнее событие с объектом {eventName: 'onDestroy'}
    *
    * */
    openModal(component, inputs, callback) {
        // Создание завода компонентов
        this.closeModal();
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        this.componentRef = componentFactory.create(this.injector);
        // Добавление параметров в компонент
        if (inputs) {
            for (const item in inputs) {
                if (inputs.hasOwnProperty(item)) {
                    const inputIndex = componentFactory.inputs.findIndex(elem => elem.propName === item);
                    if (inputIndex > -1) {
                        this.componentRef.instance[item] = inputs[item];
                    }
                }
            }
        }
        if (componentFactory.outputs.length && callback) {
            const subscribes = [];
            for (const item in componentFactory.outputs) {
                if (componentFactory.outputs.hasOwnProperty(item) && !!this.componentRef.instance[componentFactory.outputs[item].propName]) {
                    subscribes.push(this.componentRef.instance[componentFactory.outputs[item].propName].subscribe((data) => {
                        callback({ eventName: componentFactory.outputs[item].propName, data });
                    }));
                }
            }
            this.componentRef.onDestroy(() => {
                callback({ eventName: 'onDestroy' });
                subscribes.forEach(item => {
                    item.unsubscribe();
                });
            });
        }
        // Прикрепление компонента к DOM дереву и ангуляру
        this.appRef.attachView(this.componentRef.hostView);
        document.body.appendChild(this.componentRef.hostView.rootNodes[0]);
        // Отключение прокрутки body
        const paddingSize = window.innerWidth - document.documentElement.clientWidth;
        const htmlBody = document.querySelector('body');
        if (htmlBody) {
            htmlBody.style.marginRight = paddingSize + 'px';
            htmlBody.style.overflow = 'hidden';
        }
    }
    closeModal() {
        if (this.componentRef) {
            // Включение прокрутки body
            const htmlBody = document.querySelector('body');
            if (htmlBody) {
                htmlBody.style.overflow = 'auto';
                htmlBody.style.marginRight = '0';
            }
            // Удаление компонента из DOM
            this.appRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
        }
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WEas":
/*!*******************************************************************!*\
  !*** ./src/app/components/modals/message-modal/item.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessageModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModalComponent", function() { return MessageModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app.service */ "OaWH");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/navigation.service */ "+NYR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0) { return { closing: a0 }; };
function MessageModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageModalComponent_ng_container_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageModalComponent_ng_container_0_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.closing));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.massageModalText, " ");
} }
// import {UserModelService} from '../../../models/user.model.service';
class MessageModalComponent {
    constructor(appService, translateService, navigationService) {
        this.modal = true;
        this.resultEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closing = false;
        // this.modalService = modalService;
        // this.userModelService = userModelService;
        this.appService = appService;
        this.translateService = translateService;
        this.navigationService = navigationService;
    }
    ngOnInit() {
    }
    close() {
        this.closing = true;
        setTimeout(() => {
            // this.modalService.closeModal();
        }, 200);
    }
}
MessageModalComponent.ɵfac = function MessageModalComponent_Factory(t) { return new (t || MessageModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"])); };
MessageModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageModalComponent, selectors: [["app-message-modal"]], inputs: { modal: "modal", massageModalText: "massageModalText" }, outputs: { resultEventEmitter: "resultEventEmitter" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "modal-wrapper", 3, "ngClass"], [1, "modal-backdrop", 3, "click"], [1, "modal-scroll-container", "modal-scroll-container--popup"], [1, "modal-container", "modal-container--popup"], [1, "modal-button_close", 3, "click"], [1, "modal-title"]], template: function MessageModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageModalComponent_ng_container_0_Template, 8, 4, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["@keyframes modal-fade-in {\n  from {\n    transform: translateY(-10px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes modal-fade-out {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(-10px);\n    opacity: 0;\n  }\n}\n@keyframes modal-backdrop_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0.65;\n  }\n}\n@keyframes modal-backdrop_fade-out {\n  from {\n    opacity: 0.65;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  opacity: 0.65;\n  animation: 0.2s modal-backdrop_fade-in ease-out forwards;\n}\n.modal-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100%;\n}\n.modal-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  z-index: 1100;\n  margin: 0 auto;\n  max-width: 640px;\n  border-radius: 5px;\n  padding: 20px;\n  animation: 0.2s modal-fade-in ease-out forwards;\n}\n.modal-scroll-container--popup[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.modal-container--popup[_ngcontent-%COMP%] {\n  width: 47%;\n  min-height: 355px;\n  display: grid;\n  place-content: center;\n}\n.modal-wrapper.closing[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  animation: 0.2s modal-fade-out ease-out forwards;\n}\n.modal-wrapper.closing[_ngcontent-%COMP%]   .modal-backdrop[_ngcontent-%COMP%] {\n  animation: 0.2s modal-backdrop_fade-out ease-out forwards;\n}\nspan.modal-button_close[_ngcontent-%COMP%] {\n  border: 1px solid #221F20;\n  box-sizing: border-box;\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  border-radius: 50%;\n  opacity: 0.5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: 0.2s ease-out;\n}\nspan.modal-button_close[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\nspan.modal-button_close[_ngcontent-%COMP%]::before, span.modal-button_close[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 15px;\n  height: 2px;\n  background: #221F20;\n  position: absolute;\n}\nspan.modal-button_close[_ngcontent-%COMP%]::before {\n  transform: rotate(-45deg);\n}\nspan.modal-button_close[_ngcontent-%COMP%]::after {\n  transform: rotate(45deg);\n}\n.modal-title[_ngcontent-%COMP%] {\n  color: #C09957;\n  font-family: Raleway, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  text-align: center;\n  margin: 25px auto 45px auto;\n}\nform[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: auto;\n}\n.button_add_volume[_ngcontent-%COMP%] {\n  color: #221F20;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 155.2%;\n  background-color: rgba(0, 0, 0, 0);\n  width: 100%;\n  height: 59px;\n  border: 2px solid #221F20;\n  margin-top: 60px;\n  opacity: 0.3;\n}\n.button_add_wine[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  margin-bottom: 35px;\n}\n.color_select_checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.color_select_checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n}\n.color_select_checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.color_select_checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  color: #221F20;\n  display: flex;\n  align-items: center;\n}\n.color_select_checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + span[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n.modal-scroll-container[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  overflow: auto;\n  height: 100vh;\n}\n.main-loading-container[_ngcontent-%COMP%] {\n  margin-top: 50px auto;\n}\n@media (max-width: 678px) {\n  .modal-container[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n\n  .modal-scroll-container--popup[_ngcontent-%COMP%] {\n    display: grid;\n    place-content: center;\n  }\n\n  .modal-container--popup[_ngcontent-%COMP%] {\n    width: 88%;\n    min-height: 29vh;\n    height: 29vh;\n    display: grid;\n    place-content: center;\n  }\n  .modal-container--popup[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 22px;\n  }\n  .modal-container--popup[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 19px;\n    margin: 49px auto 45px auto;\n  }\n\n  span.modal-button_close[_ngcontent-%COMP%] {\n    right: 10px;\n    top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQUNGO0VBQ0E7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtFQUFGO0VBRUE7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRTtJQUNFLFVBQUE7RUFERjtFQUdBO0lBQ0UsYUFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFO0lBQ0UsYUFBQTtFQUZGO0VBSUE7SUFDRSxVQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0RBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFIRjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtBQUhGO0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU9BO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBSkY7QUFRRTtFQUNFLGdEQUFBO0FBTEo7QUFRRTtFQUNFLHlEQUFBO0FBTko7QUFVQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVBGO0FBU0U7RUFDRSxZQUFBO0FBUEo7QUFVRTtFQUVFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBVEo7QUFZRTtFQUNFLHlCQUFBO0FBVko7QUFhRTtFQUNFLHdCQUFBO0FBWEo7QUFlQTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBWkY7QUFlQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQVpGO0FBZUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFaRjtBQWVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQVpGO0FBZUE7RUFDRSxtQkFBQTtBQVpGO0FBY0U7RUFDRSxjQUFBO0FBWko7QUFjSTtFQUNFLGFBQUE7QUFaTjtBQWdCRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWlCRTtFQUNFLGFBQUE7QUFmSjtBQW1CQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFoQkY7QUFtQkE7RUFDRSxxQkFBQTtBQWhCRjtBQW1CQTtFQUNFO0lBQ0UsVUFBQTtFQWhCRjs7RUFtQkE7SUFDRSxhQUFBO0lBQ0EscUJBQUE7RUFoQkY7O0VBbUJBO0lBQ0UsVUFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxxQkFBQTtFQWhCRjtFQWtCRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBaEJKO0VBbUJFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsMkJBQUE7RUFqQko7O0VBb0JBO0lBQ0UsV0FBQTtJQUNBLFNBQUE7RUFqQkY7QUFDRiIsImZpbGUiOiJpdGVtLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIG1vZGFsLWZhZGUtaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vZGFsLWZhZGUtb3V0IHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb2RhbC1iYWNrZHJvcF9mYWRlLWluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDAuNjU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vZGFsLWJhY2tkcm9wX2ZhZGUtb3V0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDAuNjU7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDQwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgb3BhY2l0eTogMC42NTtcclxuICBhbmltYXRpb246IDAuMnMgbW9kYWwtYmFja2Ryb3BfZmFkZS1pbiBlYXNlLW91dCBmb3J3YXJkcztcclxufVxyXG5cclxuLm1vZGFsLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB6LWluZGV4OiAxMTAwO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogNjQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYW5pbWF0aW9uOiAwLjJzIG1vZGFsLWZhZGUtaW4gZWFzZS1vdXQgZm9yd2FyZHM7XHJcblxyXG59XHJcblxyXG4ubW9kYWwtc2Nyb2xsLWNvbnRhaW5lci0tcG9wdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRhaW5lci0tcG9wdXAge1xyXG4gIHdpZHRoOiA0NyU7XHJcbiAgbWluLWhlaWdodDogMzU1cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC13cmFwcGVyLmNsb3Npbmcge1xyXG4gIC5tb2RhbC1jb250YWluZXIge1xyXG4gICAgYW5pbWF0aW9uOiAwLjJzIG1vZGFsLWZhZGUtb3V0IGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWJhY2tkcm9wIHtcclxuICAgIGFuaW1hdGlvbjogMC4ycyBtb2RhbC1iYWNrZHJvcF9mYWRlLW91dCBlYXNlLW91dCBmb3J3YXJkcztcclxuICB9XHJcbn1cclxuXHJcbnNwYW4ubW9kYWwtYnV0dG9uX2Nsb3NlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMjIxRjIwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMjBweDtcclxuICB0b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlLFxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzIyMUYyMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIH1cclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLXRpdGxlIHtcclxuICBjb2xvcjogI0MwOTk1NztcclxuICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDI1cHggYXV0byA0NXB4IGF1dG87XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uX2FkZF92b2x1bWUge1xyXG4gIGNvbG9yOiAjMjIxRjIwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMTU1LjIlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1OXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMjFGMjA7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5idXR0b25fYWRkX3dpbmUge1xyXG4gIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxufVxyXG5cclxuLmNvbG9yX3NlbGVjdF9jaGVja2JveCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGFiZWwgaW5wdXQgKyBzcGFuIHtcclxuICAgIGNvbG9yOiAjMjIxRjIwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBsYWJlbCBpbnB1dDpkaXNhYmxlZCArIHNwYW4ge1xyXG4gICAgb3BhY2l0eTogMC4yNTtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1zY3JvbGwtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5tYWluLWxvYWRpbmctY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NzhweCkge1xyXG4gIC5tb2RhbC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICB9XHJcblxyXG4gIC5tb2RhbC1zY3JvbGwtY29udGFpbmVyLS1wb3B1cCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWNvbnRhaW5lci0tcG9wdXAge1xyXG4gICAgd2lkdGg6IDg4JTtcclxuICAgIG1pbi1oZWlnaHQ6IDI5dmg7XHJcbiAgICBoZWlnaHQ6IDI5dmg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG5cclxuICAgID5zcGFuIHtcclxuICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgIGhlaWdodDogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICA+aDMge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBtYXJnaW46IDQ5cHggYXV0byA0NXB4IGF1dG87XHJcbiAgfVxyXG4gIH1cclxuICBzcGFuLm1vZGFsLWJ1dHRvbl9jbG9zZSB7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Z74i":
/*!*****************************************************!*\
  !*** ./src/app/components/footer/item.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterItemComponent", function() { return FooterItemComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "OaWH");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigation.service */ "+NYR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
// import {UserModelService} from '../../models/user.model.service';





class FooterItemComponent {
    constructor(appService, 
    // userModelService: UserModelService,
    navigationService, route) {
        this.user = {
            email: null,
            password: null,
        };
        this.loginError = null;
        this.regError = null;
        this.resetOkText = null;
        this.resetError = null;
        this.passwordError = null;
        this.reg = {
            email: null,
            name: null,
            surname: null,
            password: null,
            password_confirmation: null,
        };
        this.reset = {
            email: null,
            password: null,
            password_confirmation: null,
            token: null,
        };
        this.appService = appService;
        // this.userModelService = userModelService;
        this.navigationService = navigationService;
        this.route = route;
        this.reset.token = this.route.snapshot.queryParamMap.get('resetToken') || null;
    }
    ngOnInit() {
        if (this.reset.token) {
            this.appService.showPassword();
        }
    }
    ngOnDestroy() {
    }
    validate(controls) {
        for (const key in controls) {
            if (controls.hasOwnProperty(key)) {
                if (controls[key].constructor === _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
                    controls[key].markAsTouched();
                }
                else {
                    this.validate(controls[key].controls);
                }
            }
        }
    }
}
FooterItemComponent.ɵfac = function FooterItemComponent_Factory(t) { return new (t || FooterItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
FooterItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterItemComponent, selectors: [["app-footer"]], decls: 184, vars: 0, consts: [[1, "footer"], [1, "footer__container"], [1, "footer__row"], [1, "footer__titles"], [1, "footer__title"], [1, "footer__item"], [1, "footer__links"], [1, "footer__list"], ["href", "#"], [1, "footer__w-icon", "footer__search"], [1, "footer__margin", "footer__w-icon", "footer__smi"], [1, "footer__margin"], [1, "footer__margin", "footer__w-icon", "footer__special"], [1, "footer__logo"], [1, "footer__license"], [1, "footer__mob"], [1, "footer__mob-section"], [1, "footer__mob-logo"], [1, "footer__mob-title"], [1, "footer__mob-caption"], [1, "footer__mob-copy"], [1, "controls"], [1, "controls__container"]], template: function FooterItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0441\u0430\u0439\u0442\u0430 \u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B \u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u043F\u043E \u0437\u0430\u0449\u0438\u0442\u0435 \u0436\u0438\u0432\u043E\u0442\u043D\u044B\u0445 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u041F\u0440\u0430\u0432\u043E\u0432\u0430\u044F \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0421\u043E\u0431\u044B\u0442\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u0412\u0438\u0434\u0435\u043E \u0438 \u0444\u043E\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u041F\u043E\u0438\u0441\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u0414\u043B\u044F \u0421\u041C\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u0412\u0435\u0440\u0441\u0438\u044F \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439 \u0441 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u0422\u0432\u0438\u0442\u0442\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438 2022 \u0433\u043E\u0434 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442 \u0420\u043E\u0441\u0441\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0440\u0435\u0441\u0443\u0440\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F \u0420\u043E\u0441\u0441\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0441\u0438\u043C\u0432\u043E\u043B\u0438\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442 \u0420\u043E\u0441\u0441\u0438\u0438 \u2014 \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0430\u043C \u0448\u043A\u043E\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\u0414\u043B\u044F \u0421\u041C\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\u0412\u0438\u0440\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0443\u0440 \u043F\u043E \u041A\u0440\u0435\u043C\u043B\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u041F\u0443\u0442\u0438\u043D \u2014 \u043B\u0438\u0447\u043D\u044B\u0439 \u0441\u0430\u0439\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\u0410\u043C\u0443\u0440\u0441\u043A\u0438\u0439 \u0442\u0438\u0433\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "\u0411\u0435\u043B\u0443\u0445\u0430 \u2014 \u0431\u0435\u043B\u044B\u0439 \u043A\u0438\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "\u0411\u0435\u043B\u044B\u0439 \u043C\u0435\u0434\u0432\u0435\u0434\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "\u0418\u0440\u0431\u0438\u0441 \u2014 \u0441\u043D\u0435\u0436\u043D\u044B\u0439 \u0431\u0430\u0440\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "\u0414\u0430\u043B\u044C\u043D\u0435\u0432\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439 \u043B\u0435\u043E\u043F\u0430\u0440\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "\u041E \u043F\u043E\u0440\u0442\u0430\u043B\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "\u041E\u0431 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0441\u0430\u0439\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "\u041E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "\u0412\u0441\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0441\u0430\u0439\u0442\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u043F\u043E \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Creative Commons Attribution 4.0 International");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "\u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442 \u0420\u043E\u0441\u0441\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "\u0412\u0435\u0440\u0441\u0438\u044F \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u0434\u043B\u044F \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "\u0421\u043E\u0431\u044B\u0442\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "\u0412\u0438\u0434\u0435\u043E \u0438 \u0444\u043E\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "\u041F\u043E\u0438\u0441\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "\u0414\u043B\u044F \u0421\u041C\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "\u0412\u0441\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0441\u0430\u0439\u0442\u0430 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u043F\u043E \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Creative Commons Attribution 4.0 International");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "2022 \u0433\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _pages_error_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/error/page.module */ "EAFY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");





// import {ToastrModule} from 'ngx-toastr';





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__["SwiperModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            // ToastrModule.forRoot(),
            ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"].forRoot(),
            _pages_error_page_module__WEBPACK_IMPORTED_MODULE_7__["ErrorPageModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"],
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__["SwiperModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_4__["NgxMaskModule"], _pages_error_page_module__WEBPACK_IMPORTED_MODULE_7__["ErrorPageModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/item.component */ "uJxg");
/* harmony import */ var _footer_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/item.component */ "Z74i");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modals */ "+MHp");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__["SwiperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_header_item_component__WEBPACK_IMPORTED_MODULE_1__["HeaderItemComponent"],
        _footer_item_component__WEBPACK_IMPORTED_MODULE_2__["FooterItemComponent"],
        _modals__WEBPACK_IMPORTED_MODULE_6__["MessageModalComponent"],
        _modals__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
        ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"],
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_8__["SwiperModule"]], exports: [_header_item_component__WEBPACK_IMPORTED_MODULE_1__["HeaderItemComponent"],
        _footer_item_component__WEBPACK_IMPORTED_MODULE_2__["FooterItemComponent"],
        _modals__WEBPACK_IMPORTED_MODULE_6__["MessageModalComponent"],
        _modals__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"]] }); })();


/***/ }),

/***/ "rfuf":
/*!*************************************************************!*\
  !*** ./src/app/components/modals/gallery/item.component.ts ***!
  \*************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app.service */ "OaWH");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/modal.service */ "VQPA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");







const _c0 = ["galleryThumbs"];
const _c1 = ["galleryImages"];
function GalleryComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GalleryComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c2 = function (a0) { return { closing: a0 }; };
class GalleryComponent {
    constructor(appService, translateService, 
    // userModelService: UserModelService,
    modalService) {
        this.resultEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closing = false;
        this.sub = [];
        this.loading = true;
        this.swiperGalleryConfig = {
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
        this.swiperThumbConfig = {
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
        this.swiperThumbReady = true;
        this.appService = appService;
        this.translateService = translateService;
        // this.userModelService = userModelService;
        this.modalService = modalService;
    }
    ngOnInit() {
        this.loading = false;
    }
    close() {
        this.closing = true;
        setTimeout(() => {
            this.modalService.closeModal();
        }, 200);
    }
    ngAfterViewInit() {
        var _a, _b, _c, _d;
        const imagesSwiper = (_b = (_a = this.galleryImages) === null || _a === void 0 ? void 0 : _a.directiveRef) === null || _b === void 0 ? void 0 : _b.swiper();
        const thumbsSwiper = (_d = (_c = this.galleryThumbs) === null || _c === void 0 ? void 0 : _c.directiveRef) === null || _d === void 0 ? void 0 : _d.swiper();
        imagesSwiper.thumbs.swiper = thumbsSwiper;
        imagesSwiper.thumbs.init();
        imagesSwiper.thumbs.update();
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"])); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], viewQuery: function GalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.galleryThumbs = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.galleryImages = _t.first);
    } }, inputs: { index: "index", album: "album" }, outputs: { resultEventEmitter: "resultEventEmitter" }, decls: 17, vars: 9, consts: [[1, "modal-wrapper", "gallery-popup", 3, "ngClass"], [1, "modal-backdrop", 3, "click"], [1, "modal-scroll-container"], [1, "modal-container"], [1, "modal-backdrop", "modal-backdrop--left", 3, "click"], [1, "modal-button_close", 3, "click"], [1, "gallery-popup-main"], [3, "config", "index"], ["galleryImages", ""], ["class", "gallery-popup-main-item", 4, "ngFor", "ngForOf"], [1, "gallery-popup-thumb"], [1, "modal-backdrop", "modal-backdrop--bottom", 3, "click"], ["galleryThumbs", ""], ["class", "gallery-popup-thumb-item", 4, "ngFor", "ngForOf"], [1, "modal-backdrop", "modal-backdrop--right", 3, "click"], [1, "gallery-popup-main-item"], [3, "src"], [1, "gallery-popup-thumb-item"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_div_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_div_click_5_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_span_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "swiper", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GalleryComponent_div_10_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_div_click_12_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "swiper", 7, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GalleryComponent_div_15_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_div_click_16_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.closing));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.swiperGalleryConfig)("index", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.album);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.swiperThumbConfig)("index", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.album);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@keyframes modal-fade-in {\n  from {\n    transform: translateY(-10px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes modal-fade-out {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(-10px);\n    opacity: 0;\n  }\n}\n@keyframes modal-backdrop_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0.65;\n  }\n}\n@keyframes modal-backdrop_fade-out {\n  from {\n    opacity: 0.65;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1040;\n  width: 100vw;\n  height: 100vh;\n  background-color: #000;\n  opacity: 0.65;\n  animation: 0.2s modal-backdrop_fade-in ease-out forwards;\n}\n.modal-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100%;\n}\n.modal-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  z-index: 1100;\n  margin: 0 auto;\n  max-width: 640px;\n  border-radius: 5px;\n  padding: 20px;\n  animation: 0.2s modal-fade-in ease-out forwards;\n}\n.modal-wrapper.closing[_ngcontent-%COMP%]   .modal-container[_ngcontent-%COMP%] {\n  animation: 0.2s modal-fade-out ease-out forwards;\n}\n.modal-wrapper.closing[_ngcontent-%COMP%]   .modal-backdrop[_ngcontent-%COMP%] {\n  animation: 0.2s modal-backdrop_fade-out ease-out forwards;\n}\nspan.modal-button_close[_ngcontent-%COMP%] {\n  border: 1px solid #221F20;\n  box-sizing: border-box;\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  border-radius: 50%;\n  opacity: 0.5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: 0.2s ease-out;\n}\nspan.modal-button_close[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\nspan.modal-button_close[_ngcontent-%COMP%]::before, span.modal-button_close[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 15px;\n  height: 2px;\n  background: #221F20;\n  position: absolute;\n}\nspan.modal-button_close[_ngcontent-%COMP%]::before {\n  transform: rotate(-45deg);\n}\nspan.modal-button_close[_ngcontent-%COMP%]::after {\n  transform: rotate(45deg);\n}\n.modal-title[_ngcontent-%COMP%] {\n  color: #C09957;\n  font-family: Raleway, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  text-align: center;\n  margin: 25px auto 45px auto;\n}\nform[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin: auto;\n}\n.button_add_volume[_ngcontent-%COMP%] {\n  color: #221F20;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 155.2%;\n  background-color: rgba(0, 0, 0, 0);\n  width: 100%;\n  height: 59px;\n  border: 2px solid #221F20;\n  margin-top: 60px;\n  opacity: 0.3;\n}\n.button_add_wine[_ngcontent-%COMP%] {\n  margin-top: 35px;\n  margin-bottom: 35px;\n}\n.color_select_checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n}\n.color_select_checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n}\n.color_select_checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.color_select_checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  color: #221F20;\n  display: flex;\n  align-items: center;\n}\n.color_select_checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled    + span[_ngcontent-%COMP%] {\n  opacity: 0.25;\n}\n.modal-scroll-container[_ngcontent-%COMP%] {\n  padding: 100px 0;\n  overflow: auto;\n  height: 100vh;\n}\n.main-loading-container[_ngcontent-%COMP%] {\n  margin-top: 50px auto;\n}\n@media (max-width: 678px) {\n  .modal-container[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n\n  span.modal-button_close[_ngcontent-%COMP%] {\n    right: 10px;\n    top: 10px;\n  }\n}\nform[_ngcontent-%COMP%] {\n  max-width: 518px;\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n  gap: 6px;\n}\n.input_block[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-bottom: 42px;\n}\n.home_form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background-color: #0000;\n  border-bottom: 1px solid #fff;\n  width: 100%;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 155.2%;\n  color: #F4F0EA;\n  height: 204px;\n  margin-top: -24px;\n  padding-top: 6px;\n  padding-left: 8px;\n  border: 1px solid #F4F0EA;\n  border-radius: 5px;\n}\ninput[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n  height: 52px;\n  width: 100%;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 155.2%;\n}\ninput[_ngcontent-%COMP%]:nth-child(2) {\n  margin-bottom: 20px;\n}\n.button_add_wine[_ngcontent-%COMP%] {\n  width: 214px;\n  height: 59px;\n  margin: auto;\n  margin-top: 51px;\n  display: grid;\n  place-content: center;\n}\n@media (max-width: 575px) {\n  form[_ngcontent-%COMP%] {\n    max-width: 281px;\n    display: flex;\n    flex-direction: column;\n    margin-top: 62px;\n    gap: 0px;\n  }\n\n  .input_block[_ngcontent-%COMP%] {\n    margin-top: 0px;\n    margin-bottom: 36px;\n  }\n\n  .home_form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    height: 119px;\n    margin-top: -41px;\n  }\n\n  .button_add_wine[_ngcontent-%COMP%] {\n    width: 214px !important;\n    height: 59px !important;\n    margin-top: 51px !important;\n    padding: 10px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaXRlbS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFDRjtFQUVBO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUFERjtFQUlBO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7SUFDRSxVQUFBO0VBSEY7RUFNQTtJQUNFLGFBQUE7RUFKRjtBQUNGO0FBT0E7RUFDRTtJQUNFLGFBQUE7RUFMRjtFQVFBO0lBQ0UsVUFBQTtFQU5GO0FBQ0Y7QUFTQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHdEQUFBO0FBUEY7QUFVQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBUEY7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0NBQUE7QUFQRjtBQVlFO0VBQ0UsZ0RBQUE7QUFUSjtBQVlFO0VBQ0UseURBQUE7QUFWSjtBQWNBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBWEY7QUFhRTtFQUNFLFlBQUE7QUFYSjtBQWNFO0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFiSjtBQWdCRTtFQUNFLHlCQUFBO0FBZEo7QUFpQkU7RUFDRSx3QkFBQTtBQWZKO0FBbUJBO0VBQ0UsY0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFoQkY7QUFtQkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFoQkY7QUFtQkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFoQkY7QUFtQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBaEJGO0FBbUJBO0VBQ0UsbUJBQUE7QUFoQkY7QUFrQkU7RUFDRSxjQUFBO0FBaEJKO0FBa0JJO0VBQ0UsYUFBQTtBQWhCTjtBQW9CRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFsQko7QUFxQkU7RUFDRSxhQUFBO0FBbkJKO0FBdUJBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQXBCRjtBQXVCQTtFQUNFLHFCQUFBO0FBcEJGO0FBdUJBO0VBQ0U7SUFDRSxVQUFBO0VBcEJGOztFQXVCQTtJQUNFLFdBQUE7SUFDQSxTQUFBO0VBcEJGO0FBQ0Y7QUF1QkE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtBQXJCRjtBQXdCQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQXJCRjtBQTBCSTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQXZCTjtBQTRCQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXpCRjtBQTJCRTtFQUNFLG1CQUFBO0FBekJKO0FBNkJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUExQkY7QUE2QkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxRQUFBO0VBMUJGOztFQTZCQTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQTFCRjs7RUErQkk7SUFDRSxhQUFBO0lBQ0EsaUJBQUE7RUE1Qk47O0VBaUNBO0lBQ0UsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLDJCQUFBO0lBQ0Esd0JBQUE7RUE5QkY7QUFDRiIsImZpbGUiOiJpdGVtLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIG1vZGFsLWZhZGUtaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb2RhbC1mYWRlLW91dCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vZGFsLWJhY2tkcm9wX2ZhZGUtaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDAuNjU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vZGFsLWJhY2tkcm9wX2ZhZGUtb3V0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDAuNjU7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWJhY2tkcm9wIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTA0MDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIG9wYWNpdHk6IDAuNjU7XHJcbiAgYW5pbWF0aW9uOiAwLjJzIG1vZGFsLWJhY2tkcm9wX2ZhZGUtaW4gZWFzZS1vdXQgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5tb2RhbC13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgei1pbmRleDogMTEwMDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDY0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGFuaW1hdGlvbjogMC4ycyBtb2RhbC1mYWRlLWluIGVhc2Utb3V0IGZvcndhcmRzO1xyXG5cclxufVxyXG5cclxuLm1vZGFsLXdyYXBwZXIuY2xvc2luZyB7XHJcbiAgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBhbmltYXRpb246IDAuMnMgbW9kYWwtZmFkZS1vdXQgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtYmFja2Ryb3Age1xyXG4gICAgYW5pbWF0aW9uOiAwLjJzIG1vZGFsLWJhY2tkcm9wX2ZhZGUtb3V0IGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gIH1cclxufVxyXG5cclxuc3Bhbi5tb2RhbC1idXR0b25fY2xvc2Uge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMjFGMjA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRvcDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmUsXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIxRjIwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIGNvbG9yOiAjQzA5OTU3O1xyXG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5LCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjVweCBhdXRvIDQ1cHggYXV0bztcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5idXR0b25fYWRkX3ZvbHVtZSB7XHJcbiAgY29sb3I6ICMyMjFGMjA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNTUuMiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU5cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzIyMUYyMDtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLmJ1dHRvbl9hZGRfd2luZSB7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG59XHJcblxyXG4uY29sb3Jfc2VsZWN0X2NoZWNrYm94IHtcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsYWJlbCBpbnB1dCtzcGFuIHtcclxuICAgIGNvbG9yOiAjMjIxRjIwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBsYWJlbCBpbnB1dDpkaXNhYmxlZCtzcGFuIHtcclxuICAgIG9wYWNpdHk6IDAuMjU7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtc2Nyb2xsLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTAwcHggMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubWFpbi1sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogNTBweCBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjc4cHgpIHtcclxuICAubW9kYWwtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgfVxyXG5cclxuICBzcGFuLm1vZGFsLWJ1dHRvbl9jbG9zZSB7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIG1heC13aWR0aDogNTE4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi5pbnB1dF9ibG9jayB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQycHg7XHJcbn1cclxuXHJcbi5ob21lX2Zvcm0ge1xyXG4gIGxhYmVsIHtcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNTUuMiU7XHJcbiAgICAgIGNvbG9yOiAjRjRGMEVBO1xyXG4gICAgICBoZWlnaHQ6IDIwNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjRweDtcclxuICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGNEYwRUE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNTUuMiU7XHJcblxyXG4gICY6bnRoLWNoaWxkKDIpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uX2FkZF93aW5lIHtcclxuICB3aWR0aDogMjE0cHg7XHJcbiAgaGVpZ2h0OiA1OXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1MXB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICBmb3JtIHtcclxuICAgIG1heC13aWR0aDogMjgxcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi10b3A6IDYycHg7XHJcbiAgICBnYXA6IDBweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dF9ibG9jayB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG4gIH1cclxuXHJcbiAgLmhvbWVfZm9ybSB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICBoZWlnaHQ6IDExOXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC00MXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uX2FkZF93aW5lIHtcclxuICAgIHdpZHRoOiAyMTRweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "uJxg":
/*!*****************************************************!*\
  !*** ./src/app/components/header/item.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderItemComponent", function() { return HeaderItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "OaWH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/news"]; };
const _c2 = function () { return ["/docs"]; };
const _c3 = function () { return ["/contact"]; };
const _c4 = function (a0) { return { active: a0 }; };
// import {UserModelService} from '../../models/user.model.service';
class HeaderItemComponent {
    constructor(appService) {
        // userModelService: UserModelService;
        this.isLangOpened = false;
        this.appService = appService;
        // this.userModelService = userModelService;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
HeaderItemComponent.ɵfac = function HeaderItemComponent_Factory(t) { return new (t || HeaderItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
HeaderItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderItemComponent, selectors: [["app-header"]], decls: 106, vars: 11, consts: [[1, "header"], [1, "toggle-aside", 3, "click"], [1, "header__container"], [1, "header__content"], [1, "header__logotype", 3, "routerLink"], [1, "header__nav"], ["href", "#", 3, "routerLink"], ["href", "#", 1, "toggle-more"], [1, "header__nav-mobile"], ["href", "#"], ["href", "#", 1, "lang"], [1, "sidebar", 3, "ngClass"], [1, "sidebar__content"], [1, "sidebar__title"], [1, "sidebar__lang"], [1, "sidebar__links"], [1, "sidebar__list"], [1, "sidebar__list", "sidebar__list--gray"], [1, "sidebar__sign"]], template: function HeaderItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderItemComponent_Template_a_click_1_listener() { return ctx.appService.showMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u0430\u0440\u0442\u0438\u044F \"\u041F\u043E\u0435\u0445\u0430\u043B\u0438\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0421\u043E\u0431\u044B\u0442\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0421\u043E\u0431\u044B\u0442\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0412\u0438\u0434\u0435\u043E \u0438 \u0444\u043E\u0442\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0414\u043B\u044F \u0421\u041C\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u041F\u043E\u0438\u0441\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0435\u0432\u044B\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Russian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u0414\u043B\u044F \u0421\u041C\u0418");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439 c\u00A0\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u044B\u043C\u0438 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044F\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 Telegram-\u043A\u0430\u043D\u0430\u043B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0422\u0432\u0438\u0442\u0442\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u0430\u043D\u0430\u043B \u043D\u0430 YouTube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F \u0420\u043E\u0441\u0441\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u0441\u0438\u043C\u0432\u043E\u043B\u0438\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442 \u0420\u043E\u0441\u0441\u0438\u0438 \u2014 \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0430\u043C \u0448\u043A\u043E\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u0412\u0438\u0440\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0443\u0440 \u043F\u043E \u041A\u0440\u0435\u043C\u043B\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u041F\u0443\u0442\u0438\u043D \u2014 \u043B\u0438\u0447\u043D\u044B\u0439 \u0441\u0430\u0439\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u041F\u0443\u0442\u0438\u043D, 20 \u043B\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u0430 \u0420\u043E\u0441\u0441\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c4, ctx.appService.isMenu));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: -60px;\n  left: 0;\n  width: 100%;\n  padding-top: 60px;\n  background: #051945;\n  font-size: 15px;\n  z-index: 1000;\n}\n@media screen and (max-width: 730px) {\n  .header[_ngcontent-%COMP%] {\n    position: static;\n    top: 0;\n  }\n}\n.header__content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1001;\n  top: -100vh;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(2, 12, 34, 0);\n  transition: background 0.2s ease-in, top 0s linear 0.2s;\n}\n.sidebar__content[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: -400px;\n  width: 400px;\n  height: 908px;\n  transition: left 0.5s ease-in-out;\n  max-height: 100vh;\n  overflow-y: auto;\n  padding: 40px 40px 20px;\n  text-align: center;\n  background-color: #020c22;\n}\n.sidebar__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #f0f4f8;\n  transition: color 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.sidebar__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #22ebbe;\n}\n.sidebar__title[_ngcontent-%COMP%] {\n  margin-bottom: 35px;\n  font-size: 21px;\n  color: #f0f4f8;\n  line-height: 1.5;\n}\n.sidebar__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  font-style: italic;\n  font-weight: 700;\n  font-size: 24px;\n}\n.sidebar__lang[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n.sidebar__lang[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 4px 25px;\n}\n.sidebar__lang[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid #4a5469;\n}\n.sidebar__links[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.sidebar__list[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.sidebar__list[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 35px;\n}\n.sidebar__list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding-top: 9px;\n  padding-bottom: 9px;\n}\n.sidebar__list--gray[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 35px;\n}\n.sidebar__list--gray[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #909cb4;\n}\n.sidebar__list--gray[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  display: block;\n  width: 25px;\n  height: 2px;\n  background: #4a5469;\n}\n.sidebar__sign[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4a5469;\n}\n.active.sidebar[_ngcontent-%COMP%] {\n  top: 60px;\n  background-color: rgba(2, 12, 34, 0.2);\n  transition: top 0s ease-in, background 0.2s ease-in;\n}\n.active.sidebar[_ngcontent-%COMP%]   .sidebar__content[_ngcontent-%COMP%] {\n  left: 0;\n  transition: left 0.5s ease-in-out 0.2s;\n}\n.header__logotype[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  margin-right: 22px;\n  padding-right: 25px;\n  height: 60px;\n  line-height: 60px;\n  color: #fefefe;\n  font-size: 14px;\n}\n@media screen and (max-width: 730px) {\n  .header__logotype[_ngcontent-%COMP%] {\n    font-size: 19px;\n    margin-top: 0;\n    padding-right: 0;\n  }\n}\n.header__logotype[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: -50px;\n  transform: translateY(-50%);\n  display: block;\n  width: 29px;\n  height: 29px;\n  background-image: url('logotype.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n@media screen and (max-width: 990px) {\n  .header__logotype[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n@media screen and (max-width: 730px) {\n  .header__logotype[_ngcontent-%COMP%]::before {\n    display: block;\n    left: 0;\n    top: -50%;\n  }\n}\n.header__logotype[_ngcontent-%COMP%]::after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n  display: block;\n  width: 2px;\n  height: 25px;\n  border-left: 1px solid #707e9c;\n}\n@media screen and (max-width: 730px) {\n  .header__logotype[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n}\n.header__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n}\n.header__nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 22px;\n}\n.header__nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  height: 60px;\n  line-height: 60px;\n  color: #fefefe;\n  transition: color 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.header__nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #22ebbe;\n}\n@media screen and (max-width: 730px) {\n  .header__nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.toggle-aside[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  left: 0;\n  z-index: 1002;\n  cursor: pointer;\n  display: block;\n  width: 60px;\n  height: 60px;\n}\n@media screen and (max-width: 860px) {\n  .toggle-aside[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.toggle-aside[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: block;\n  width: 4px;\n  height: 18px;\n  background-image: url('portal_points.svg');\n  background-repeat: no-repeat;\n  background-size: 4px 18px;\n}\n.toggle-aside[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .toggle-aside[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%] {\n  background-image: url('portal_green.svg');\n  background-size: 16px 16px;\n  width: 16px;\n  height: 16px;\n}\n.toggle-aside[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%] {\n  background-image: url('portal_white.svg');\n}\n.toggle-more[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  right: -20px;\n  width: 60px;\n  height: 60px;\n}\n.toggle-more[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: block;\n  width: 18px;\n  height: 18px;\n  background-image: url('portal.svg');\n  background-size: 18px 18px;\n}\n@media screen and (max-width: 730px) {\n  .toggle-more[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.header.active[_ngcontent-%COMP%] {\n  background: #020c22;\n  padding-bottom: 40px;\n}\n.header.active[_ngcontent-%COMP%]   .header__logotype[_ngcontent-%COMP%] {\n  color: #2ac1a0;\n}\n.header.active[_ngcontent-%COMP%]   .toggle-more[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-image: url('portal_green.svg');\n}\n.header.active[_ngcontent-%COMP%]   .header__nav-mobile[_ngcontent-%COMP%] {\n  display: block !important;\n}\n.header__nav-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n.header__nav-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  border-top: 1px solid #282e3c;\n}\n.header__nav-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 20px;\n  font-size: 19px;\n  color: #fefefe;\n  border-bottom: 1px solid #282e3c;\n}\n.header__nav-mobile[_ngcontent-%COMP%]   a.lang[_ngcontent-%COMP%] {\n  color: #647290;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDSTtFQVZKO0lBV00sZ0JBQUE7SUFDQSxNQUFBO0VBRUo7QUFDRjtBQUFJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUVOO0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsb0NBQUE7RUFDQSx1REFBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLHVCQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtBQUhGO0FBS0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUVBLHFEQUFBO0FBSko7QUFNSTtFQUNFLGNBQUE7QUFKTjtBQVNBO0VBQ0UsbUJBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBUEY7QUFTRTtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQSjtBQVdBO0VBQ0UsbUJBQUE7QUFSRjtBQVVFO0VBQ0UsaUJBQUE7QUFSSjtBQVVJO0VBQ0UsK0JBQUE7QUFSTjtBQWFBO0VBQ0UsbUJBQUE7QUFWRjtBQWFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVZGO0FBWUU7RUFDRSxtQkFBQTtBQVZKO0FBYUU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWEo7QUFlQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFaRjtBQWNFO0VBQ0UsY0FBQTtBQVpKO0FBZ0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUVBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBZEY7QUFpQkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQWRGO0FBaUJBO0VBQ0UsU0FBQTtFQUNBLHNDQUFBO0VBQ0EsbURBQUE7QUFkRjtBQWdCRTtFQUNFLE9BQUE7RUFDQSxzQ0FBQTtBQWRKO0FBa0JBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0FBakJGO0FBbUJFO0VBWkY7SUFhSSxlQUFBO0lBQ0EsYUFBQTtJQUNBLGdCQUFBO0VBaEJGO0FBQ0Y7QUFrQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBRUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7QUFsQko7QUFvQkk7RUFoQkY7SUFpQkksYUFBQTtFQWpCSjtBQUNGO0FBbUJJO0VBcEJGO0lBcUJJLGNBQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTtFQWhCSjtBQUNGO0FBbUJFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUVBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0FBbEJKO0FBb0JJO0VBWkY7SUFhSSxhQUFBO0VBakJKO0FBQ0Y7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBbEJGO0FBb0JFO0VBQ0Usa0JBQUE7QUFsQko7QUFxQkU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0FBbkJKO0FBcUJJO0VBQ0UsY0FBQTtBQW5CTjtBQXVCRTtFQXJCRjtJQXNCSSxhQUFBO0VBcEJGO0FBQ0Y7QUF1QkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFyQkY7QUF1QkU7RUFYRjtJQVlJLGFBQUE7RUFwQkY7QUFDRjtBQXNCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUVBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQXRCSjtBQTBCQTs7RUFFRSx5Q0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF2QkY7QUEwQkE7RUFDRSx5Q0FBQTtBQXZCRjtBQTBCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUF4QkY7QUEwQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFFQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxtQ0FBQTtFQUNBLDBCQUFBO0FBMUJKO0FBNkJFO0VBdkJGO0lBd0JJLGNBQUE7RUExQkY7QUFDRjtBQStCQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUE1QkY7QUE4QkU7RUFDRSxjQUFBO0FBNUJKO0FBK0JFO0VBQ0UseUNBQUE7QUE3Qko7QUFnQ0U7RUFDRSx5QkFBQTtBQTlCSjtBQWtDQTtFQUNFLGFBQUE7QUEvQkY7QUFrQ0E7RUFDRSw2QkFBQTtBQS9CRjtBQWtDQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFFQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBaENGO0FBa0NFO0VBQ0UsY0FBQTtBQWhDSiIsImZpbGUiOiJpdGVtLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogLTYwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwNTE5NDU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczMHB4KSB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgIHRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAwMTtcclxuICB0b3A6IC0xMDB2aDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwxMiwzNCwwKTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1pbiwgdG9wIDBzIGxpbmVhciAwLjJzO1xyXG59XHJcblxyXG4uc2lkZWJhcl9fY29udGVudCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtNDAwcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogOTA4cHg7XHJcbiAgdHJhbnNpdGlvbjogbGVmdCAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gIHBhZGRpbmc6IDQwcHggNDBweCAyMHB4O1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMGMyMjtcclxuXHJcbiAgYSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2YwZjRmODtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuNHMgY3ViaWMtYmV6aWVyKC4yMywxLC4zMiwxKTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICMyMmViYmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhcl9fdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBjb2xvcjogI2YwZjRmODtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG5cclxuICBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLFRpbWVzLHNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWRlYmFyX19sYW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG5cclxuICBzcGFuIHtcclxuICAgIHBhZGRpbmc6IDRweCAyNXB4O1xyXG5cclxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0YTU0Njk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhcl9fbGlua3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19saXN0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxuXHJcbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDlweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhcl9fbGlzdC0tZ3JheSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiAzNXB4O1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjOTA5Y2I0O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGViYXJfX2xpc3QtLWdyYXk6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQ6ICM0YTU0Njk7XHJcbn1cclxuXHJcbi5zaWRlYmFyX19zaWduIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM0YTU0Njk7XHJcbn1cclxuXHJcbi5hY3RpdmUuc2lkZWJhciB7XHJcbiAgdG9wOiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwxMiwzNCwuMik7XHJcbiAgdHJhbnNpdGlvbjogdG9wIDBzIGVhc2UtaW4sIGJhY2tncm91bmQgMC4ycyBlYXNlLWluO1xyXG5cclxuICAuc2lkZWJhcl9fY29udGVudCB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCAuNXMgZWFzZS1pbi1vdXQgMC4ycztcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXJfX2xvZ290eXBlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcblxyXG4gIGhlaWdodDogNjBweDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuXHJcbiAgY29sb3I6ICNmZWZlZmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzBweCkge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogLTUwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjlweDtcclxuICAgIGhlaWdodDogMjlweDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL290aGVyX2ljb25zL2xvZ290eXBlLnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzBweCkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAtNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzcwN2U5YztcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzBweCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlcl9fbmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICBsaTpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjJweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGNvbG9yOiAjZmVmZWZlO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjRzIGN1YmljLWJlemllciguMjMsMSwuMzIsMSk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAjMjJlYmJlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzMwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4udG9nZ2xlLWFzaWRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA2MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwMjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbnMvcG9ydGFsX3BvaW50cy5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNHB4IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4udG9nZ2xlLWFzaWRlOmhvdmVyIHNwYW4sXHJcbi50b2dnbGUtYXNpZGU6Zm9jdXMgc3BhbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ucy9wb3J0YWxfZ3JlZW4uc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi50b2dnbGUtYXNpZGU6Zm9jdXMgc3BhbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ucy9wb3J0YWxfd2hpdGUuc3ZnKTtcclxufVxyXG5cclxuLnRvZ2dsZS1tb3JlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG5cclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbnMvcG9ydGFsLnN2Zyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE4cHggMThweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczMHB4KSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi8vIGFkZCBjbGFzcyBcImFjdGl2ZVwiIHRvIC5oZWFkZXIgdG8gc2VlIGhpZGRlbiBtb2JpbGUgbWVudVxyXG5cclxuLmhlYWRlci5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICMwMjBjMjI7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcblxyXG4gIC5oZWFkZXJfX2xvZ290eXBlIHtcclxuICAgIGNvbG9yOiAjMmFjMWEwO1xyXG4gIH1cclxuXHJcbiAgLnRvZ2dsZS1tb3JlIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ucy9wb3J0YWxfZ3JlZW4uc3ZnKTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXJfX25hdi1tb2JpbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXJfX25hdi1tb2JpbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXJfX25hdi1tb2JpbGUgdWwge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMjgyZTNjO1xyXG59XHJcblxyXG4uaGVhZGVyX19uYXYtbW9iaWxlIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgY29sb3I6ICNmZWZlZmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyODJlM2M7XHJcblxyXG4gICYubGFuZyB7XHJcbiAgICBjb2xvcjogIzY0NzI5MDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "uNub":
/*!*************************************!*\
  !*** ./src/app/pages/error/page.ts ***!
  \*************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "OaWH");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/navigation.service */ "+NYR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ErrorPageComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ErrorPageComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Internal Server Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ErrorPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ErrorPageComponent_div_0_div_3_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ErrorPageComponent_div_0_div_4_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.appService.errorCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.appService.errorCode === 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.appService.errorCode === 500);
} }
// import {UserModelService} from '../../models/user.model.service';
class ErrorPageComponent {
    constructor(appService, navigationService) {
        // super(appService, translateService, navigationService, userModelService);
        this.appService = appService;
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        if (!this.appService.errorCode) {
            this.appService.errorCode = 404;
        }
    }
    ngOnDestroy() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"])); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 1, vars: 1, consts: [["class", "error-title", 4, "ngIf"], [1, "error-title"], [1, "error-code"], ["class", "error-text", 4, "ngIf"], [1, "error-text"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorPageComponent_div_0_Template, 5, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appService.errorCode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.error-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: #c09957;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJwYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZmxleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICNjMDk5NTc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



// import {AuthGuard} from './core/guards/auth.guard';
// import {RoleGuard} from './core/guards/user-role-pro.guard';
const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-page-module */ "pages-home-page-module").then(__webpack_require__.bind(null, /*! ./pages/home/page.module */ "kZk6")).then(m => m.HomePageModule),
        pathMatch: 'full'
    },
    {
        path: 'news',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-news-page-module */ "pages-news-page-module").then(__webpack_require__.bind(null, /*! ./pages/news/page.module */ "5FGa")).then(m => m.NewsPageModule),
        pathMatch: 'full'
    },
    {
        path: 'docs',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-docs-page-module */ "pages-docs-page-module").then(__webpack_require__.bind(null, /*! ./pages/docs/page.module */ "lc0d")).then(m => m.DocsPageModule),
        pathMatch: 'full'
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-contact-page-module */ "pages-contact-page-module").then(__webpack_require__.bind(null, /*! ./pages/contact/page.module */ "tLiJ")).then(m => m.ContactPageModule),
        pathMatch: 'full'
    },
    {
        path: '**',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-page-module */ "pages-home-page-module").then(__webpack_require__.bind(null, /*! ./pages/home/page.module */ "kZk6")).then(m => m.HomePageModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"],
                scrollPositionRestoration: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map