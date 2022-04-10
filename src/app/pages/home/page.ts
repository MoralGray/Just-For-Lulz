import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
// import {MainComponent} from '../../core/main.component';
import {AppService} from '../../services/app.service';
import {NavigationService} from '../../services/navigation.service';
// import {UserModelService} from '../../models/user.model.service';
// import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-wines-page',
  templateUrl: 'page.html',
  styleUrls: ['page.scss']
})
export class HomePageComponent implements AfterViewInit, OnInit, AfterViewInit, OnDestroy {

  isLoadling = false;
  mapMarkSelectedShow = false;
  mapMarkSelectedShowT = false;
  isAboutMapShow = false;
  isAboutMapShowT = false;
  mapNewMarkIsShow = false;

  mapTheme: any[] = [{
      "stylers": [{
          "saturation": -100
        },
        {
          "gamma": 1
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "poi.business",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "poi.business",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "poi.place_of_worship",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "poi.place_of_worship",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "visibility": "simplified"
      }]
    },
    {
      "featureType": "water",
      "stylers": [{
          "visibility": "on"
        },
        {
          "saturation": 50
        },
        {
          "gamma": 0
        },
        {
          "hue": "#50a5d1"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#333333"
      }]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text",
      "stylers": [{
          "weight": 0.5
        },
        {
          "color": "#333333"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.icon",
      "stylers": [{
          "gamma": 1
        },
        {
          "saturation": 50
        }
      ]
    }
  ]

  chavoElems = [{
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

  pageBlockLinks = [{
      title: 'Главная',
      content: 'Главная',
      img: '',
      url: '/'
    },
    {
      title: 'Новости',
      content: 'Новости',
      img: '',
      url: '/news'
    },
    {
      title: 'Голосование',
      content: 'Голосование',
      img: '',
      url: '/'
    },
    {
      title: 'Статьи',
      content: 'Статьи',
      img: '',
      url: '/'
    },
  ];

  mapEurope: any = [52.500000, 23.383333];

  mapTgMarks = [{
      id: 0,
      title: 'Региональное отделение',
      url: 'https://t.me/justforlulz2ch',
      desk: '',
      lat: 67.88147,
      long: 131.76099,
    },
    {
      id: 1,
      title: 'Региональное отделение',
      url: 'https://t.me/justforlulz2ch',
      desk: '',
      lat: 33.41402,
      long: 15.29929,
    },
    {
      id: 2,
      title: 'Региональное отделение',
      url: 'https://t.me/justforlulz2chchanel',
      desk: '',
      lat: 29.91398,
      long: 11.07895,
    },
    {
      id: 3,
      title: 'Региональное отделение',
      url: 'https://t.me/justforlulz2ch',
      desk: '',
      lat: 13.91398,
      long: 173.07895,
    },
    {
      id: 4,
      title: 'Региональное отделение',
      url: 'https://t.me/justforlulz2chchanel',
      desk: '',
      lat: 41.91398,
      long: -44.07895,
    },
    {
      id: 5,
      title: 'Региональное отделение',
      url: 'https://t.me/justforlulz2ch',
      desk: '',
      lat: 19.91398,
      long: -27.07895,
    }
  ];

  mapUsersMarks = [{
      id: 0,
      title: 'Член партии',
      url: 'https://t.me/Petrychka',
      desk: '',
      lat: 57.88147,
      long: 101.76099,
    },
    {
      id: 1,
      title: 'Член партии',
      url: 'https://t.me/AplleDianaOchka',
      desk: '',
      lat: 37.88147,
      long: 111.76099,
    },
    {
      id: 2,
      title: 'Член партии',
      url: 'https://t.me/MoralGray',
      desk: '',
      lat: 50.88147,
      long: 30.76099,
    },
    {
      id: 3,
      title: 'Член партии',
      url: 'https://t.me/Dukhan1n',
      desk: '',
      lat: 57.88147,
      long: 51.76099,
    },
    {
      id: 4,
      title: 'Член партии',
      url: 'https://t.me/yours_truly_confused_N10',
      desk: '',
      lat: 51.88147,
      long: 81.76099,
    },
    {
      id: 5,
      title: 'Член партии',
      url: 'https://t.me/sashashlyapik',
      desk: '',
      lat: 57.88147,
      long: 201.76099,
    }
  ];

  iconTgMap: any = {
    url: 'assets/icons/tg_icon.png',
    scaledSize: {
      width: 24,
      height: 24
    }
  };

  iconUserMap: any = {
    url: 'assets/icons/user_map.png',
    scaledSize: {
      width: 25,
      height: 40
    }
  };

  selectedMark = {
    title: '',
    desk: '',
    imgUrl: '',
    url: '',
  };

  constructor(
    appService: AppService,
    // translateService: TranslateService,
    navigationService: NavigationService,
    // userModelService: UserModelService,
  ) {
    // super(appService, translateService, navigationService, userModelService);
  }

  ngAfterViewInit() {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  openTgMap(id: number, type: string) {
    console.log('id', id)
    console.log('type', type)
    const objectType = type === 'user' ? 'mapUsersMarks' : 'mapTgMarks';
    const markUrl = this[objectType][id]?.url;
    const url = `https://jsonlink.io/api/extract?url=${markUrl}`;

    this.isLoadling = true;
    this.mapMarkSelectedShowT = false;
    this.mapMarkSelectedShow = !this.mapMarkSelectedShow;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.selectedMark.title = data.title;
        this.selectedMark.desk = data.description;
        this.selectedMark.imgUrl = data.images[0];
        this.selectedMark.url = data.url;
        this.isLoadling = false;
        this.mapMarkSelectedShowT = true;
        console.log('selectedMark', this.selectedMark)
      });
  }

  openAboutMap() {
    this.isAboutMapShow = !this.isAboutMapShow;
    this.isAboutMapShowT = false;
  }

  clickOutsideHandler(key: any) {
    if (key === 'mapMarkSelectedShowT' && this.mapMarkSelectedShowT) {
      this.mapMarkSelectedShow = false;
      this.mapMarkSelectedShowT = false;
      return;
    }
  }

  openMarkerModal($event: any) {
    if ($event) {
      console.log('e', $event);

      this.mapNewMarkIsShow = true;

      this.mapUsersMarks.push({
        id: Number(new Date()),
        title: 'Член партии',
        url: 'https://t.me/sashashlyapik',
        desk: '',
        lat: $event.coords.lat,
        long: $event.coords.long,
      });
    } else {
      this.mapNewMarkIsShow = false;
    }
  }

}
