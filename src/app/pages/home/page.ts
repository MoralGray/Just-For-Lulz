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
