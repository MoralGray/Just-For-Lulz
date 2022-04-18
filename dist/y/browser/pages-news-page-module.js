(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-page-module"],{

/***/ "5FGa":
/*!*******************************************!*\
  !*** ./src/app/pages/news/page.module.ts ***!
  \*******************************************/
/*! exports provided: NewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_news_media_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/news-media/item.component */ "qaP1");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page */ "niE7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class NewsPageModule {
}
NewsPageModule.ɵfac = function NewsPageModule_Factory(t) { return new (t || NewsPageModule)(); };
NewsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NewsPageModule });
NewsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _page__WEBPACK_IMPORTED_MODULE_4__["NewsPageComponent"]
                }
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NewsPageModule, { declarations: [_page__WEBPACK_IMPORTED_MODULE_4__["NewsPageComponent"], _components_news_media_item_component__WEBPACK_IMPORTED_MODULE_3__["NewsYouTubeItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "niE7":
/*!************************************!*\
  !*** ./src/app/pages/news/page.ts ***!
  \************************************/
/*! exports provided: NewsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageComponent", function() { return NewsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "OaWH");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/navigation.service */ "+NYR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function NewsPageComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsPageComponent_ng_container_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const filter_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.filterSort(filter_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](filter_r2);
} }
function NewsPageComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0431) \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0435\u0434\u0438\u043D\u044B\u0439 \u043F\u043E\u0434\u0445\u043E\u0434 \u043A \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043F\u0435\u0434\u0430\u0433\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u043E\u0432, \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u044E\u0449\u0438\u0445 \u0432\u043E\u0441\u043F\u0438\u0442\u0430\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0440\u0430\u0431\u043E\u0442\u0443 \u0432 \u043E\u0431\u0449\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0438 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F\u0445, \u0438 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u044B\u0432\u0430\u0442\u044C \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0438\u0445 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0441 \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u0442\u0430\u043A\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0430, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043D\u0430 \u0431\u0430\u0437\u0435 \u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u0434\u0435\u0442\u0441\u043A\u043E\u0433\u043E \u0446\u0435\u043D\u0442\u0440\u0430 \u00AB\u0410\u0440\u0442\u0435\u043A\u00BB.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0414\u043E\u043A\u043B\u0430\u0434 \u2013 \u0434\u043E 15 \u044F\u043D\u0432\u0430\u0440\u044F \u0438 \u0434\u043E 15 \u0430\u043F\u0440\u0435\u043B\u044F 2022\u0433.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439: \u041A\u0440\u0430\u0432\u0446\u043E\u0432 \u0421.\u0421.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041A\u0440\u0430\u0432\u0446\u043E\u0432 \u0421\u0435\u0440\u0433\u0435\u0439 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0422\u0435\u043C\u0430\u0442\u0438\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0414\u0435\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0428\u043A\u043E\u043B\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r5 == null ? null : field_r5.title);
} }
// import {UserModelService} from '../../models/user.model.service';
// import {TranslateService} from '@ngx-translate/core';
class NewsPageComponent {
    constructor(appService, navigationService) {
        this.filters = [
            'Все',
            'Новости',
            'Статьи',
            'Медиа'
        ];
        this.fields = [
            {
                id: '1',
                title: 'Новости 1',
                category: 'Новости',
            },
            {
                id: '2',
                title: 'Медиа 1',
                category: 'Медиа',
            },
            {
                id: '3',
                title: 'Статьи 1',
                category: 'Статьи',
            }
        ];
        this.fieldsSotred = [
            {
                id: '',
                title: '',
                category: '',
            }
        ];
        // super(appService, navigationService, userModelService);
        this.appService = appService;
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.fieldsSotred = this.fields;
    }
    ngOnDestroy() {
    }
    filterSort(filter) {
        this.appService.isLoading = false;
        if (filter === 'Все') {
            return this.fieldsSotred = this.fields;
        }
        this.fieldsSotred = this.fields.filter((field) => {
            return field.category === filter;
        });
        return null;
    }
}
NewsPageComponent.ɵfac = function NewsPageComponent_Factory(t) { return new (t || NewsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"])); };
NewsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsPageComponent, selectors: [["app-wines-page"]], decls: 20, vars: 2, consts: [[1, "menu"], [1, "menu__container"], [1, "menu__list"], [4, "ngFor", "ngForOf"], [1, "content"], [1, "content__container"], [1, "form"], [1, "form__label"], [1, "form__dropdown"], ["type", "button", 1, "form__title"], ["type", "button", 1, "form__show"], [1, "line"], ["type", "button", 1, "content__show"], ["href", "#", 3, "click"], [1, "content__text"], [1, "content__title"], ["href", "#"], [1, "content__subtitle"], [1, "content__responsible"], [1, "content__topic"]], template: function NewsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewsPageComponent_ng_container_3_Template, 4, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043B\u0438\u0446\u0430, \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u043B\u0438 \u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0412\u0441\u0435 \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NewsPageComponent_ng_container_17_Template, 31, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fieldsSotred);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], styles: [".form[_ngcontent-%COMP%] {\n  padding-top: 54px;\n}\n.form__dropdown[_ngcontent-%COMP%] {\n  display: flex;\n}\n.form__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 27px;\n  color: #606778;\n}\n.form__title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 488px;\n  height: 38px;\n  padding-left: 10px;\n  text-align: left;\n  background: #fefefe;\n  margin-right: 30px;\n  border: 1px solid #d3cfcf;\n  color: #606778;\n}\n.form__title[_ngcontent-%COMP%]:hover {\n  border: 1px solid #2ac1a0;\n}\n.form__title[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: 15px;\n  bottom: 15px;\n  width: 7px;\n  height: 7px;\n  border: 1px solid;\n  border-color: transparent #7c7a7a #7c7a7a transparent;\n  transform: rotate(45deg);\n}\n.form__show[_ngcontent-%COMP%] {\n  width: 160px;\n  border: 1px solid #d3cfcf;\n  color: #2ac1a0;\n  height: 40px;\n  line-height: 38px;\n  background: #f8f8f8;\n}\n.line[_ngcontent-%COMP%] {\n  margin-top: 43px;\n  width: 100%;\n  height: 1px;\n  background: #e2e3e4;\n}\n.content[_ngcontent-%COMP%] {\n  margin: 0 0 43px;\n  background: #f8f8f8;\n}\n.content__text[_ngcontent-%COMP%] {\n  padding: 32px 0;\n  color: #989899;\n  border-bottom: 1px solid #e2e3e4;\n}\n.content__line[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n.content__title[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  line-height: 1.35;\n}\n.content__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #606778;\n}\n.content__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0a3fb4;\n}\n.content__subtitle[_ngcontent-%COMP%] {\n  max-width: 623px;\n  font-size: 14px;\n  margin: 13px 0 18px 0;\n  line-height: 1.4;\n}\n.content__responsible[_ngcontent-%COMP%], .content__topic[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 9px;\n  font-size: 13px;\n  color: #606778;\n}\n.content__responsible[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child, .content__topic[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  min-width: 220px;\n}\n.content__responsible[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .content__topic[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #020c22;\n}\n.content__show[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  margin: 64px 0 40px 0;\n  color: #fefefe;\n  background-color: #2ac1a0;\n  border: none;\n  text-align: center;\n  font-size: 13px;\n}\n.content__show[_ngcontent-%COMP%]:hover {\n  background-color: #28dcb4;\n}\n.menu__list[_ngcontent-%COMP%] {\n  display: flex;\n}\n.menu__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 11px;\n  line-height: 60px;\n  color: #4a5469;\n}\n@media (max-width: 730px) {\n  .menu__list[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    background: #03153a;\n  }\n\n  .menu__media[_ngcontent-%COMP%] {\n    display: block;\n    width: 80%;\n    padding: 14px 0;\n    line-height: 25px;\n    font-size: 20px;\n    color: #647290;\n  }\n\n  .burger_menu[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 22px;\n    right: 22px;\n    background-repeat: no-repeat;\n    background-size: 18px 18px;\n    width: 18px;\n    height: 18px;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    margin: 0 0 43px;\n    background: #fefefe;\n  }\n\n  .form__dropdown[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .form__title[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-right: 0;\n  }\n\n  .form__show[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 27px;\n    background-color: #fefefe;\n  }\n\n  .content__responsible[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 10px;\n  }\n\n  .content__responsible-media[_ngcontent-%COMP%], .content__topic-media[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n\n  .content__topic[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .footer__item[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .footer__media[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .footer[_ngcontent-%COMP%] {\n    padding-top: 26px 0 35px 0;\n  }\n\n  .footer__title[_ngcontent-%COMP%] {\n    margin: 22px 0 0 0;\n    font-size: 20px;\n    line-height: 27px;\n  }\n\n  .footer__subtitle[_ngcontent-%COMP%] {\n    font-size: 13px;\n    padding-top: 4px;\n    color: #909cb4;\n  }\n\n  .footer__line[_ngcontent-%COMP%] {\n    margin: 25px 0 20px -20px;\n    background: #282e3c;\n    height: 1px;\n  }\n\n  .footer__list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #fefefe;\n    font-size: 17px;\n  }\n\n  .footer__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 17px;\n  }\n\n  .footer__license[_ngcontent-%COMP%], .footer__admin[_ngcontent-%COMP%], .footer__year[_ngcontent-%COMP%] {\n    margin: 0;\n    color: #606778;\n    font-size: 13px;\n  }\n\n  .footer__admin[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n.info__button[_ngcontent-%COMP%] {\n  position: relative;\n  background: #0a3fb4;\n  display: block;\n  color: #fefefe;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  height: 40px;\n  line-height: 40px;\n  width: 100%;\n}\n.info__button[_ngcontent-%COMP%]:hover {\n  background: #020c22;\n}\n.error[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  text-align: center;\n}\n.error__block[_ngcontent-%COMP%] {\n  border: 1px solid #7a7a7a;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n.error__text[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n.error__button[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 44px;\n  margin-bottom: 10px;\n  color: #fefefe;\n  background-color: #2ac1a0;\n  border: none;\n  align-items: center;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0FBQ1I7QUFFSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBRFI7QUFJSTtFQUNJLHlCQUFBO0FBRlI7QUFLSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFEQUFBO0VBQ0Esd0JBQUE7QUFIUjtBQU1JO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSlI7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUxKO0FBUUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBTEo7QUFPSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFMUjtBQVFJO0VBQ0ksWUFBQTtBQU5SO0FBU0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVBSO0FBVUk7RUFDSSxjQUFBO0FBUlI7QUFXSTtFQUNJLGNBQUE7QUFUUjtBQVlJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVZSO0FBYUk7RUFFSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBWlI7QUFlSTtFQUVJLGdCQUFBO0FBZFI7QUFpQkk7RUFFSSxjQUFBO0FBaEJSO0FBbUJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFqQlI7QUFvQkk7RUFDSSx5QkFBQTtBQWxCUjtBQXVCQTtFQUNJLGFBQUE7QUFwQko7QUF1QkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQXBCSjtBQXVCQTtFQUNJO0lBQ0UsYUFBQTtFQXBCSjs7RUFzQkU7SUFDRSxtQkFBQTtFQW5CSjs7RUFxQkU7SUFDRSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VBbEJKOztFQW9CRTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7SUFFQSw0QkFBQTtJQUNBLDBCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFsQko7O0VBb0JFO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtFQWpCTjs7RUFtQkU7SUFDSSxjQUFBO0VBaEJOOztFQWtCRTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VBZk47O0VBaUJFO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RUFkTjs7RUFnQkU7SUFDSSxjQUFBO0lBQ0EsbUJBQUE7RUFiTjs7RUFlRTtJQUNJLGVBQUE7RUFaTjs7RUFjRTtJQUNJLGNBQUE7RUFYTjs7RUFhRTtJQUNJLGFBQUE7RUFWTjs7RUFZRTtJQUNJLGNBQUE7RUFUTjs7RUFXRTtJQUNJLDBCQUFBO0VBUk47O0VBVUU7SUFDSSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQVBOOztFQVNFO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQU5OOztFQVFFO0lBQ0kseUJBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7RUFMTjs7RUFPRTtJQUNJLGNBQUE7SUFDQSxlQUFBO0VBSk47O0VBT0U7SUFDSSxtQkFBQTtFQUpOOztFQU1FO0lBQ0ksU0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBSE47O0VBS0U7SUFDQyxnQkFBQTtFQUZIO0FBQ0Y7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUxKO0FBUUE7RUFDSSxtQkFBQTtBQUxKO0FBVUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFQSjtBQVNBO0VBQ0kseUJBQUE7RUFDQSx1Q0FBQTtBQU5KO0FBU0E7RUFDSSxhQUFBO0FBTko7QUFTQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTkoiLCJmaWxlIjoicGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gICAgcGFkZGluZy10b3A6IDU0cHg7XHJcblxyXG4gICAgJl9fZHJvcGRvd24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgICBjb2xvcjogIzYwNjc3ODtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiA0ODhweDtcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QzY2ZjZjtcclxuICAgICAgICBjb2xvcjogIzYwNjc3ODtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzJhYzFhMDtcclxuICAgIH1cclxuXHJcbiAgICAmX190aXRsZTphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGJvdHRvbTogMTVweDtcclxuICAgICAgICB3aWR0aDogN3B4O1xyXG4gICAgICAgIGhlaWdodDogN3B4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzdjN2E3YSAjN2M3YTdhIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAmX19zaG93IHtcclxuICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QzY2ZjZjtcclxuICAgICAgICBjb2xvcjogIzJhYzFhMDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgIH1cclxufVxyXG5cclxuLmxpbmUge1xyXG4gICAgbWFyZ2luLXRvcDogNDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTJlM2U0O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgMCA0M3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuXHJcbiAgICAmX190ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiAzMnB4IDA7XHJcbiAgICAgICAgY29sb3I6ICM5ODk4OTk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUzZTQ7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGluZTpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fdGl0bGUgbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIGEge1xyXG4gICAgICAgIGNvbG9yOiAjNjA2Nzc4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMGEzZmI0O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3N1YnRpdGxlIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDYyM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW46IDEzcHggMCAxOHB4IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIH1cclxuXHJcbiAgICAmX19yZXNwb25zaWJsZSxcclxuICAgICZfX3RvcGljIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM2MDY3Nzg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fcmVzcG9uc2libGUgZGl2OmZpcnN0LWNoaWxkLFxyXG4gICAgJl9fdG9waWMgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3Jlc3BvbnNpYmxlIGEsXHJcbiAgICAmX190b3BpYyBhIHtcclxuICAgICAgICBjb2xvcjogIzAyMGMyMjtcclxuICAgIH1cclxuXHJcbiAgICAmX19zaG93IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgbWFyZ2luOiA2NHB4IDAgNDBweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmVmZWZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYWMxYTA7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fc2hvdzpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhkY2I0O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLm1lbnVfX2xpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1lbnVfX2xpc3QgbGkgYSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGNvbG9yOiAjNGE1NDY5O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzMwcHgpIHtcclxuICAgIC5tZW51X19saXN0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5tZW51IHtcclxuICAgICAgYmFja2dyb3VuZDogIzAzMTUzYTtcclxuICAgIH1cclxuICAgIC5tZW51X19tZWRpYSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjNjQ3MjkwO1xyXG4gICAgfVxyXG4gICAgLmJ1cmdlcl9tZW51IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDIycHg7XHJcbiAgICAgIHJpZ2h0OiAyMnB4O1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaWNvbnMvbWVudS5zdmdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMThweCAxOHB4O1xyXG4gICAgICB3aWR0aDogMThweDtcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDQzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcclxuICAgIH1cclxuICAgIC5mb3JtX19kcm9wZG93biB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuZm9ybV9fdGl0bGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICAgIC5mb3JtX19zaG93IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9fcmVzcG9uc2libGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudF9fcmVzcG9uc2libGUtbWVkaWEsIC5jb250ZW50X190b3BpYy1tZWRpYSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRfX3RvcGljIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5mb290ZXJfX2l0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyX19tZWRpYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjZweCAwIDM1cHggMDtcclxuICAgIH1cclxuICAgIC5mb290ZXJfX3RpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDIycHggMCAwIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9fc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTA5Y2I0O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9fbGluZSB7XHJcbiAgICAgICAgbWFyZ2luOiAyNXB4IDAgMjBweCAtMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjgyZTNjO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9fbGlzdCBhIHtcclxuICAgICAgICBjb2xvcjogI2ZlZmVmZTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlcl9fbGlzdCBsaSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgIH1cclxuICAgIC5mb290ZXJfX2xpY2Vuc2UsIC5mb290ZXJfX2FkbWluLCAuZm9vdGVyX195ZWFyIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICM2MDY3Nzg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9fYWRtaW4ge1xyXG4gICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8v0JrQndCe0J/QmtCQXHJcblxyXG4uaW5mb19fYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICMwYTNmYjQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZmVmZWZlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmluZm9fX2J1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDIwYzIyO1xyXG59XHJcblxyXG4vL9Ch0KLQmNCb0Kwg0JTQm9CvINCh0KLQoCDQntCo0JjQkdCa0JhcclxuXHJcbi5lcnJvciB7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZXJyb3JfX2Jsb2NrIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMjIsIDEyMiwgMTIyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC41KTtcclxufVxyXG5cclxuLmVycm9yX190ZXh0IHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxuXHJcbi5lcnJvcl9fYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZlZmVmZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYWMxYTA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "qaP1":
/*!*********************************************************!*\
  !*** ./src/app/components/news-media/item.component.ts ***!
  \*********************************************************/
/*! exports provided: NewsYouTubeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsYouTubeItemComponent", function() { return NewsYouTubeItemComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "OaWH");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = function () { return ["/"]; };
function NewsYouTubeItemComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r1.content);
} }
class NewsYouTubeItemComponent {
    constructor(appService, http) {
        this.http = http;
        this.apiKey = 'YOUR-APIKEY-YOUTUBE';
        this.appService = appService;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    getVideosForChanel(channel, maxResults) {
        const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            console.log(res);
            return res;
        }));
    }
}
NewsYouTubeItemComponent.ɵfac = function NewsYouTubeItemComponent_Factory(t) { return new (t || NewsYouTubeItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
NewsYouTubeItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsYouTubeItemComponent, selectors: [["app-news-youtube"]], inputs: { links: "links" }, decls: 10, vars: 1, consts: [[1, "site-pages"], [1, "site-pages__container"], [1, "site-pages-content"], [1, "site-pages_title"], [1, "site-pages_desk"], [1, "site-pages_about"], ["class", "site-pages-links", 4, "ngFor", "ngForOf"], [1, "site-pages-links"], [1, "site-pages-link", 3, "routerLink"], [1, "site-pages-link_title"], [1, "site-pages-link_content"]], template: function NewsYouTubeItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0422\u0443\u0442 \u043C\u043E\u0436\u043D\u043E \u0443\u0437\u043D\u0430\u0442\u044C \u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0445");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0423\u0432\u0438\u0434\u0435\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NewsYouTubeItemComponent_div_9_Template, 6, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], encapsulation: 2 });
NewsYouTubeItemComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NewsYouTubeItemComponent, factory: NewsYouTubeItemComponent.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=pages-news-page-module.js.map