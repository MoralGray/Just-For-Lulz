import {Component, OnInit} from '@angular/core';
import {AppService} from './services/app.service';
import {NavigationService} from './services/navigation.service';
// import {UserModelService} from './models/user.model.service';
// import {PagesModelService} from './models/pages.model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public appService: AppService;
  public navigationService: NavigationService;
  // public userModelService: UserModelService;
  // public pagesModelService: PagesModelService;

  private loading = 0;

  constructor(
    appService: AppService,
    navigationService: NavigationService,
    // pagesModelService: PagesModelService,
    // userModelService: UserModelService,
  ) {

    this.appService = appService;
    this.navigationService = navigationService;
    // this.userModelService = userModelService;
    // this.pagesModelService = pagesModelService;
  }

  ngOnInit(): void {
    this.loadPages();
    // this.getUser();
  }

  loadPages() {
    this.loading++;
    // this.pagesModelService.loadPages((status) => {
    //   this.checkLoading();
    // });
    this.checkLoading()
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