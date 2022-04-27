(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-docs-page-module"],{

/***/ "lc0d":
/*!*******************************************!*\
  !*** ./src/app/pages/docs/page.module.ts ***!
  \*******************************************/
/*! exports provided: DocsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsPageModule", function() { return DocsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page */ "vHNy");
/* harmony import */ var _components_chavo_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/chavo/item.component */ "xuVB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class DocsPageModule {
}
DocsPageModule.ɵfac = function DocsPageModule_Factory(t) { return new (t || DocsPageModule)(); };
DocsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DocsPageModule });
DocsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _page__WEBPACK_IMPORTED_MODULE_3__["DocsPageComponent"]
                }
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DocsPageModule, { declarations: [_page__WEBPACK_IMPORTED_MODULE_3__["DocsPageComponent"], _components_chavo_item_component__WEBPACK_IMPORTED_MODULE_4__["ChavoItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "vHNy":
/*!************************************!*\
  !*** ./src/app/pages/docs/page.ts ***!
  \************************************/
/*! exports provided: DocsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsPageComponent", function() { return DocsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_chavo_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/chavo/item.component */ "xuVB");


// import {MainComponent} from '../../core/main.component';
// import {AppService} from '../../services/app.service';
// import {NavigationService} from '../../services/navigation.service';
// import {UserModelService} from '../../models/user.model.service';
// import {TranslateService} from '@ngx-translate/core';
class DocsPageComponent {
    constructor() {
        this.chavoElems = [{
                title: 'Хто я?',
                desk: 'Гречневый заводчанин',
                data: 'Гречневый заводчанин, студент, успешный адвокат, ассенизатор, обычная домохозяйка, майор КГБ, 300к-программист или телохранитель Путина. Неважно. Теперь ты сторонник Всероссийской маргинальной политической партии «Поехали!». Наше движение неразрывно связано с принципом сетевой анонимности, так что при желании ты можешь поддержать нас, не раскрывая свою личность. Учитывая анонимный характер выборов, ты ничем не рискуешь, предоставляя нам свой голос. Либо ты можешь быть просто нашим сторонником и приносить пользу партии, формально не вступая в неё.',
                show: false,
                deskShow: true
            },
            {
                title: 'Кто вы?',
                desk: 'Кто “вы!” то, блять?',
                data: 'Кто “вы!” то, блять? Я один здесь. Не стоит думать о нашем сообществе, как о какой-то определенной группе людей. Анонимус безлик, и имя ему – Легион. Те деятели, которые будут представлять наши интересы внутри юридической структуры партии, являются лишь посредниками, транслирующими мнение этого сообщества. Поэтому, анон, ты уже с нами. Более корректным вопросом было бы «Кто мы?»',
                show: false,
                deskShow: true
            },
            {
                title: 'Кто мы?',
                desk: 'Мы группа людей',
                data: 'Мы группа людей, объединенная целью стать действующей политической силой в России. Этой задачи мы сможем достичь, создав политическую партию, от имени которой мы получим возможность предпринимать конкретные действия и выдвигать своих кандидатов на выборах разных уровней. Без политической партии прямой диалог общества и государственного аппарата невозможен. Самое главное, наличие политической партии позволит нам проводить агитационные кампании и привлекать новых сторонников.',
                show: false,
                deskShow: true
            },
            {
                title: 'И как вы собрались овладеть политической властью? У вас есть вообще какая-то политическая программа?',
                desk: 'Политическая программа',
                data: 'Политическая программа, которая будет предъявлена в Минюст при регистрации, будет содержать лишь общее описание направлений, в которых мы собираемся работать. Как и в случае с большинством партий, политическая программа является формальностью, на которой не стоит зацикливаться. В нашем случае программа (и фасад партии в целом) будет направлена на тех наших потенциальных сторонников, которые пришли к нам не так, как ты. Не представляется возможным осуществить то, что мы задумали, если использовать лишь человеческий ресурс имиджборд. Мы планируем расширить партию путём привлечения сторонних людей. Даже пенсионеров и людей, не знакомых с сетевой культурой.',
                show: false,
                deskShow: true
            },
            {
                title: 'Зачем мне нужно вообще поддерживать какую-то партию?',
                desk: 'Каждая партия отстаивает',
                data: 'Каждая партия отстаивает свои интересы. Свои, а не твои. А их интерес исключительно финансовый. Люди, ассоциированные с действующими партиями, либо занимаются лоббированием, либо выполняют государственный заказ на имитацию политической жизни, либо пытаются добраться до кормушки и сохранить свою позицию. Либо всё перечисленное одновременно.',
                show: false,
                deskShow: true
            },
            {
                title: 'Почему именно мы народная партия, а не другие?',
                desk: 'Партия выражает коллективную волю',
                data: 'Партия выражает коллективную волю своих сторонников, каждый из которых имеет возможность высказывает свою позицию или внести предложение. Устранение лидеров не губит идею, потому что лидеры нашей партии – это говорящие головы Лернейской гидры. Срубив одну голову, на её месте вырастут две новые.',
                show: false,
                deskShow: true
            },
            {
                title: 'А почему партия маргинальная? Я же не маргинал. Что вообще это значит – «маргинальная партия»?',
                desk: 'мар-ги-на́ль-ный',
                data: 'мар-ги-на́ль-ный: книжн. находящийся на границе двух сред, категорий и т. п. В первую очередь обозначение партии как маргинальной относится к её положению по отношению к существующим политическим силам. Идея о создании партии появилась при осознании невозможности ассоциировать себя с каким-либо из действующих политических движений. Нас не устраивают ни те, ни другие. Ни левые, ни правые, ни центристы. Ни анархисты, ни этатисты. Потому что все эти идеологии не имеют для нас никакого значения. Для нас важны лишь конкретные действия. Действия, оказывающие непосредственный положительный эффект на твою жизнь. Весь остальной идеологический бред – это просто слова, а слова это ветер.',
                show: false,
                deskShow: true
            },
            {
                title: 'Что делать?',
                desk: 'На данном этапе – всё, что хочешь',
                data: 'На данном этапе – всё, что хочешь, лишь бы оно шло от имени партии и приносило пользу. Клепать мемчики и видосики. Вирусно распространять их в интернете. Твори, рисуй. Лайкай, репость. Еби гусей. Наше оружие - ХАЙП! Не стесняйся ничего, черный пиар - тоже пиар. Наступило время, когда мемы могут спасти Россию. Если же ты обладаешь определенными политическими талантами, можешь помочь сформировать совокупность теоретической и юридической документации нашего движения. Вноси свои предложения и обсуждай чужие.Если же ты готов в перспективе стать полноценным членом партии и действовать от своего настоящего имени ИРЛ, то это просто замечательно. Главная проблема, с которой мы сталкиваемся на данный момент – нехватка людей, которые готовы действовать ИРЛ. Нам предстоит создать организационный комитет, для чего необходимо минимум 10 человек. После создания организационного комитета у нас будет год на агитацию и поиск необходимого числа сторонников. Для регистрации партии нам нужны отделения в половине субъектов РФ, поэтому если ты из какой-то дальней мухосрани, ты можешь оказаться довольно полезным.',
                show: false,
                deskShow: true
            },
            {
                title: 'Новое "Новое величие", "Дело сети"?',
                desk: 'Гоним ссаными тряпками любых засланных майоров',
                data: 'Гоним ссаными тряпками любых засланных майоров с предложениями, направленными на подрыв конституционного строя. Мы не позволим извратить нашу цель и сделать из партии что-то иное. Наша цель – исключительно законными способами создать партию и срубить как можно больше голосов на любых выборах. Всё. Никаких противозаконных настроений или подтекстов. Работаем с теми юридическими возможностями, которые у нас есть. "И если кто-нибудь наделённый властью заставит тебя пройти милю, пройди с ним две" (Мф 5:41)333',
                show: false,
                deskShow: true
            },
            {
                title: 'А программа партии? Устав?',
                desk: 'Сделаем стандартную скучную программу',
                data: 'Сделаем стандартную скучную программу, максимально краткую и по существу. Это вообще не имеет значения, об этом не нужно беспокоиться. Только чтобы Минюст без всяких вопросов пропустил. Да, это популистский ход, по-другому никак. Только так добьемся наших целей. Анон, помни, слишком радикальные и проработанные программы разделяют общество и лишают нас потенциальной поддержки. Не делитесь на левых и правых, будьте проще. От наших предложений выиграют все, поэтому не стоит спорить по мелочам. На самом деле у всех людей одни и те же желания и идеалы. И каждую конченную мразь когда-то держали на руках родители, лучась светом от любви. Так что сначала мы приходим к власти, а потом уже диктуем продукты нашей железной воли. Сейчас же власть у тех, кто сам плюет на свою программу. Их действия расходятся с словами, а слова с мыслями. Это путь в тупик.',
                show: false,
                deskShow: true
            },
            {
                title: 'РРРЯЯЯ! НЕПОЛУЧИЦА!',
                desk: 'Ты говоришь, это все невозможно?',
                data: 'Ты говоришь, это все невозможно? Нахуй иди, мы тебя не спрашивали! Нам от вас пессимистов тошно, все беды из-за нытья ебучего вашего. Сначала они тебя не замечают, потом смеются над тобой, затем борются с тобой. А потом ты побеждаешь. Можете быть уверены, настанут лучшие времена. Пусть я выражаюсь пошло. Смейтесь, но воссияет заря новой жизни, восторжествует правда. Я не дождусь и сдохну, но зато чьи то правнуки дождутся. Я приветствую их от всей души. Вперед! Помогай вам Бог! Друзья, благословляю вас и радуюсь, радуюсь! Радуюсь.. «A dream you dream alone is only a dream. A dream you dream together is reality» Yoko Ono, 1972',
                show: false,
                deskShow: true
            },
            {
                title: ' как вы относитесь к идее о том, что … ? Это хорошо или плохо?',
                desk: '',
                data: 'Да.',
                show: false,
                deskShow: true
            },
            {
                title: 'Зачем это все?',
                desk: 'Мы всем рунетом делаем народную партию',
                data: 'Мы всем рунетом делаем народную партию, в смысле зачем? Это же вин невиданных масштабов.',
                show: false,
                deskShow: true
            },
        ];
        // super(appService, translateService, navigationService, userModelService);
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
DocsPageComponent.ɵfac = function DocsPageComponent_Factory(t) { return new (t || DocsPageComponent)(); };
DocsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocsPageComponent, selectors: [["app-docs-page"]], decls: 98, vars: 1, consts: [[1, "wrapper"], [1, "main"], [1, "main__block"], [1, "main__container"], [1, "main__text"], [1, "main__title"], [1, "main__subtitle"], ["href", "#"], [1, "main__subtitle-small"], [1, "main__line"], [1, "main__download"], ["href", "#", 1, ""], [1, "main__download-img"], [1, "main__download-size"], [1, "chapter"], [1, "chapter__container"], [1, "chapter__text"], [1, "chapter__title"], [1, "chapter__subtitle"], [1, "chapter__dropdown"], [1, "chapter__list"], ["type", "button", 1, "chapter__button"], [1, "chapter__dropdown", "chapter__second", "chapter__list"], [3, "data"]], template: function DocsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F \u2013 \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0437\u0430\u043A\u043E\u043D \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438. \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F \u0438\u043C\u0435\u0435\u0442 \u0432\u044B\u0441\u0448\u0443\u044E \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0441\u0438\u043B\u0443, \u043F\u0440\u044F\u043C\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0432\u0441\u0435\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0441\u0442\u0440\u0430\u043D\u044B. \u0417\u0430\u043A\u043E\u043D\u044B \u0438 \u0438\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u043E\u0432\u044B\u0435 \u0430\u043A\u0442\u044B, \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C\u044B\u0435 \u0432 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438, \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0440\u0435\u0447\u0438\u0442\u044C \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0412 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0423\u043A\u0430\u0437\u043E\u043C \u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442\u0430 \u043E\u0442 3 \u0438\u044E\u043B\u044F 2020 \u0433\u043E\u0434\u0430 \u00AB\u041E\u0431 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u043C \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u0438\u0438 \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u0438 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u0432\u043D\u0435\u0441\u0435\u043D\u043D\u044B\u043C\u0438 \u0432 \u043D\u0435\u0435 \u043F\u043E\u043F\u0440\u0430\u0432\u043A\u0430\u043C\u0438\u00BB \u0442\u0435\u043A\u0441\u0442 \u0440\u0430\u0437\u043C\u0435\u0449\u0435\u043D \u043D\u0430 \u00AB\u041E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u043C \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043F\u043E\u0440\u0442\u0430\u043B\u0435 \u043F\u0440\u0430\u0432\u043E\u0432\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438\u00BB (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "pravo.gov.ru");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041F\u0440\u0438\u043D\u044F\u0442\u0430 \u0432\u0441\u0435\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u043C \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u0435\u043C 12 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 1993 \u0433\u043E\u0434\u0430 \u0441 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u043C\u0438, \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u043D\u044B\u043C\u0438 \u0432 \u0445\u043E\u0434\u0435 \u043E\u0431\u0449\u0435\u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u044F 1 \u0438\u044E\u043B\u044F 2020 \u0433\u043E\u0434\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043E\u043F\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043A\u043E\u043F\u0438\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " PDF, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 3.6 \u041C\u0411 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0420\u0430\u0437\u0434\u0435\u043B \u043F\u0435\u0440\u0432\u044B\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u0413\u043B\u0430\u0432\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "1. \u041E\u0441\u043D\u043E\u0432\u044B \u043A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0441\u0442\u0440\u043E\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "1...16");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2. \u041F\u0440\u0430\u0432\u0430 \u0438 \u0441\u0432\u043E\u0431\u043E\u0434\u044B \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u0438 \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0438\u043D\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "17...64");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "3. \u0424\u0435\u0434\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "65...79");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "4. \u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442 \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "80...93");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "5. \u0424\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u0421\u043E\u0431\u0440\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "94...109");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "6. \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "110...117");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "7. \u0421\u0443\u0434\u0435\u0431\u043D\u0430\u044F \u0432\u043B\u0430\u0441\u0442\u044C \u0438 \u043F\u0440\u043E\u043A\u0443\u0440\u0430\u0442\u0443\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "118...129");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "8. \u041C\u0435\u0441\u0442\u043D\u043E\u0435 \u0441\u0430\u043C\u043E\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "130...133");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "9. \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u043E\u043F\u0440\u0430\u0432\u043A\u0438 \u0438 \u043F\u0435\u0440\u0435\u0441\u043C\u043E\u0442\u0440 \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "134...137");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " \u0420\u0430\u0437\u0434\u0435\u043B \u0432\u0442\u043E\u0440\u043E\u0439 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " \u0417\u0430\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u043D\u044B\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "app-chavo", 23);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.chavoElems);
    } }, directives: [_components_chavo_item_component__WEBPACK_IMPORTED_MODULE_1__["ChavoItemComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  min-height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.main[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n}\n\n.main__text[_ngcontent-%COMP%] {\n  margin-top: 57px;\n}\n\n.main__title[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n  font-weight: 400;\n  font-size: 32px;\n  line-height: 1.2;\n}\n\n.main__subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  color: #020c22;\n  font-size: 20px;\n}\n\n.main__subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #020c22;\n  border-bottom: 1px solid #bcc2eb;\n  transition: border-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.main__subtitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #0a3fb4;\n  transition: border-color 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.main__subtitle-small[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #606778;\n  line-height: 1.4;\n}\n\n.main__line[_ngcontent-%COMP%] {\n  width: 893px;\n  margin: 50px 0px;\n  height: 1px;\n  background: #e2e3e4;\n}\n\n.main__download[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n  font-size: 20px;\n  color: #0a3fb4;\n}\n\n.main__download-size[_ngcontent-%COMP%] {\n  color: #606778;\n  font-size: 13px;\n}\n\n.chapter[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n}\n\n.chapter__title[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n  font-size: 32px;\n  line-height: 1.2;\n}\n\n.chapter__subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 55px;\n  line-height: 1.1;\n  font-size: 24px;\n}\n\n.chapter__dropdown[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n\n.chapter__list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background: #fefefe;\n  border: none;\n  border-radius: 2px;\n  color: #4a5469;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: color 1.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 1.4s cubic-bezier(0.23, 1, 0.32, 1);\n  padding: 14px 44px 14px 20px;\n}\n\n.chapter__button[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  right: 15px;\n  bottom: 16px;\n  width: 10px;\n  height: 10px;\n  border: 2px solid;\n  border-color: transparent #a6aebf #a6aebf transparent;\n  transform: rotate(-45deg);\n}\n\n.chapter__list[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 26px;\n}\n\n.chapter__button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.chapter__button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.chapter__second[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #4a5469;\n}\n\n.chapter__list[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #0a3fb4;\n  box-shadow: 0 4px 4px 0 rgba(9, 63, 179, 0.077), 0 8px 18px 2px rgba(2, 11, 34, 0.066);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUVJO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFHSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFEUjs7QUFJSTtFQUNJLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLDREQUFBO0FBRlI7O0FBS0k7RUFDSSxxQkFBQTtFQUNBLDREQUFBO0FBSFI7O0FBTUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSlI7O0FBT0k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFMUjs7QUFRSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFOUjs7QUFTSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBUFI7O0FBWUE7RUFDSSxtQkFBQTtBQVRKOztBQVdJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFUUjs7QUFZSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBVlI7O0FBYUk7RUFDRSxtQkFBQTtBQVhOOztBQWNJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxR0FBQTtFQUNBLDRCQUFBO0FBWlI7O0FBZUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtFQUNBLHlCQUFBO0FBYlI7O0FBZ0JJO0VBQ0ksbUJBQUE7QUFkUjs7QUFpQkk7RUFDRSxtQkFBQTtBQWZOOztBQWtCSTtFQUNJLGVBQUE7QUFoQlI7O0FBbUJJO0VBQ0ksY0FBQTtBQWpCUjs7QUFvQkk7RUFDSSxjQUFBO0VBQ0Esc0ZBQUE7QUFsQlIiLCJmaWxlIjoicGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi53cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcblxyXG4gICAgJl9fdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1N3B4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcbiAgICAmX19zdWJ0aXRsZSBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDIwYzIyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19zdWJ0aXRsZSBhIHtcclxuICAgICAgICBjb2xvcjogIzAyMGMyMjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JjYzJlYjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC40cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fc3VidGl0bGUgYTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGEzZmI0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuNHMgY3ViaWMtYmV6aWVyKC4yMywgMSwgLjMyLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAmX19zdWJ0aXRsZS1zbWFsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjA2Nzc4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDg5M3B4O1xyXG4gICAgICAgIG1hcmdpbjogNTBweCAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2UyZTNlNDtcclxuICAgIH1cclxuXHJcbiAgICAmX19kb3dubG9hZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICMwYTNmYjQ7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZG93bmxvYWQtc2l6ZSB7XHJcbiAgICAgICAgY29sb3I6ICM2MDY3Nzg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmNoYXB0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuXHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIH1cclxuXHJcbiAgICAmX19zdWJ0aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19kcm9wZG93biB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlzdCBhIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNGE1NDY5O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMS40cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGJveC1zaGFkb3cgMS40cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCA0NHB4IDE0cHggMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19idXR0b246YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICBib3R0b206IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2E2YWViZiAgI2E2YWViZiAgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAmX19saXN0Om5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYnV0dG9uIHAge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX2J1dHRvbiBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fc2Vjb25kIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6ICM0YTU0Njk7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fbGlzdDpob3ZlciBhIHtcclxuICAgICAgICBjb2xvcjogIzBhM2ZiNDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA0cHggMCByZ2JhKDksIDYzLCAxNzksIDAuMDc3KSwgMCA4cHggMThweCAycHggcmdiYSgyLCAxMSwgMzQsIDAuMDY2KTtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "xuVB":
/*!****************************************************!*\
  !*** ./src/app/components/chavo/item.component.ts ***!
  \****************************************************/
/*! exports provided: ChavoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChavoItemComponent", function() { return ChavoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "OaWH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ChavoItemComponent_ng_container_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chavo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chavo_r1.data);
} }
function ChavoItemComponent_ng_container_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chavo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chavo_r1.data);
} }
function ChavoItemComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChavoItemComponent_ng_container_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const chavo_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openChavo(chavo_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChavoItemComponent_ng_container_3_div_4_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChavoItemComponent_ng_container_3_div_5_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const chavo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chavo_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chavo_r1.deskShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chavo_r1.show);
} }
// import {UserModelService} from '../../models/user.model.service';
class ChavoItemComponent {
    constructor(appService) {
        this.position = 'left';
        this.data = [];
        this.appService = appService;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    openChavo(chavo) {
        chavo.deskShow = !chavo.deskShow;
        chavo.show = !chavo.show;
    }
}
ChavoItemComponent.ɵfac = function ChavoItemComponent_Factory(t) { return new (t || ChavoItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
ChavoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChavoItemComponent, selectors: [["app-chavo"]], inputs: { position: "position", data: "data" }, decls: 4, vars: 1, consts: [[1, "chavo"], [1, "chavo-content"], [1, "chavo-fields"], [4, "ngFor", "ngForOf"], [1, "chavo-field", 3, "click"], [1, "chavo-field_title"], ["class", "chavo-field_desk", 4, "ngIf"], ["class", "chavo-field_data", 4, "ngIf"], [1, "chavo-field_desk"], [1, "chavo-field_data"]], template: function ChavoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChavoItemComponent_ng_container_3_Template, 6, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".chavo[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n}\n.chavo-content[_ngcontent-%COMP%] {\n  padding: 60px 0 0 20px;\n}\n.chavo-field[_ngcontent-%COMP%] {\n  padding-bottom: 25px;\n  border-bottom: 1px solid #d7d7d7;\n  cursor: pointer;\n}\n.chavo-field_title[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding-top: 25px;\n  font-style: italic;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 33px;\n  color: #020c22;\n  transition: all 0.3s ease 0s;\n}\n.chavo-field[_ngcontent-%COMP%]:first-child   .chavo-field_title[_ngcontent-%COMP%] {\n  padding-top: 0px;\n}\n.chavo-field_desk[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  word-break: break-word;\n  overflow: hidden;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 19px;\n  color: rgba(0, 0, 0, 0.5);\n  max-width: 15%;\n}\n.chavo-field_data[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGO0FBSUE7RUFDRSxzQkFBQTtBQUZGO0FBT0E7RUFDRSxvQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUpGO0FBTUU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQUpKO0FBT0U7RUFDRSxnQkFBQTtBQUxKO0FBUUU7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQU5KO0FBU0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBUEoiLCJmaWxlIjoiaXRlbS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXZvIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICZfX2NvbnRhaW5lciB7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhdm8tY29udGVudCB7XHJcbiAgcGFkZGluZzogNjBweCAwIDAgMjBweDtcclxufVxyXG5cclxuLmNoYXZvLWZpZWxkcyB7fVxyXG5cclxuLmNoYXZvLWZpZWxkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q3ZDdkNztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICZfdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4OyBcclxuICAgIGNvbG9yOiAjMDIwYzIyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuICB9XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQgJl90aXRsZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9kZXNrIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAxO1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIG1heC13aWR0aDogMTUlO1xyXG4gIH1cclxuXHJcbiAgJl9kYXRhIHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=pages-docs-page-module.js.map