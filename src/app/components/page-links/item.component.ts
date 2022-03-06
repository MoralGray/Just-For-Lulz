import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
// import {UserModelService} from '../../models/user.model.service';

@Component({
  selector: 'app-page-links',
  templateUrl: './item.html'
})

export class PageLinksItemComponent implements OnDestroy, OnInit {

  @Input() links: any;

  appService: AppService;

  constructor(
    appService: AppService,
  ) {
    this.appService = appService;
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
