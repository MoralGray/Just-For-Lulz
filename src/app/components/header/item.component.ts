import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {ModalService} from '../../services/modal.service';
// import {UserModelService} from '../../models/user.model.service';

@Component({
  selector: 'app-header',
  templateUrl: './item.html',
  styleUrls: ['./item.scss']
})

export class HeaderItemComponent implements OnDestroy, OnInit {

  private modalService: ModalService;
  appService: AppService;
  // userModelService: UserModelService;
  isLangOpened = false;

  constructor(
    appService: AppService,
    modalService: ModalService
    // userModelService: UserModelService,
  ) {

    this.modalService = modalService;
    this.appService = appService;
    // this.userModelService = userModelService;
  }

  ngOnInit() {
    
  }

  ngOnDestroy() {

  }

  openModal(event: any) {
    console.log(event)
  }
}
