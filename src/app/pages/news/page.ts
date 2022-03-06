import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
// import {MainComponent} from '../../core/main.component';
// import {AppService} from '../../services/app.service';
// import {NavigationService} from '../../services/navigation.service';
// import {UserModelService} from '../../models/user.model.service';
// import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-wines-page',
  templateUrl: 'page.html',
  styleUrls: ['page.scss']
})
export class NewsPageComponent implements AfterViewInit, OnInit, AfterViewInit, OnDestroy {


  filters = [
    'Все',
    'Новости',
    'Статьи',
    'Медиа'
  ];

  fields = [
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
  fieldsSotred = [
    {
      id: '',
      title: '',
      category: '',
    }
  ];

  constructor(
    // appService: AppService,
    // translateService: TranslateService,
    // navigationService: NavigationService,
    // userModelService: UserModelService,
  ) {
    // super(appService, translateService, navigationService, userModelService);
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.fieldsSotred = this.fields;
  }

  ngOnDestroy() {

  }

  filterSort(filter: string) {

    if (filter === 'Все') {
      return this.fieldsSotred = this.fields;
    }

    this.fieldsSotred = this.fields.filter((field: any) => {
      return field.category === filter;
    });

    return null;
  }

}
