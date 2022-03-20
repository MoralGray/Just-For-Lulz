import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
// import {UserModelService} from '../../models/user.model.service';

@Component({
  selector: 'app-chavo',
  templateUrl: './item.html',
  styleUrls: ['./item.scss']
})

export class ChavoItemComponent implements OnDestroy, OnInit {

  @Input() position = 'left';
  @Input() data: any[] = [];

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

  openChavo(chavo: any) {
    chavo.deskShow = !chavo.deskShow;
    chavo.show = !chavo.show;
  }

}
