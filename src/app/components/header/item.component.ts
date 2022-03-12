import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
// import {UserModelService} from '../../models/user.model.service';

@Component({
  selector: 'app-header',
  templateUrl: './item.html',
  styleUrls: ['./item.scss']
})

export class HeaderItemComponent implements OnDestroy, OnInit {

  appService: AppService;
  // userModelService: UserModelService;
  isLangOpened = false;

  constructor(
    appService: AppService,
    // userModelService: UserModelService,
  ) {

    this.appService = appService;
    // this.userModelService = userModelService;
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {

  }
}
