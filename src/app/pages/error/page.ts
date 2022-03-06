import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {NavigationService} from '../../services/navigation.service';
// import {UserModelService} from '../../models/user.model.service';

@Component({
  selector: 'app-error-page',
  templateUrl: 'page.html',
  styleUrls: ['page.scss']
})
export class ErrorPageComponent implements AfterViewInit, OnInit, AfterViewInit, OnDestroy {

  appService: AppService;

  constructor(
    appService: AppService,
    navigationService: NavigationService,
    // userModelService: UserModelService,
  ) {
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
