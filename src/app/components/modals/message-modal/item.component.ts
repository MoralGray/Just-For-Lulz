import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ModalService} from '../../../services/modal.service';
import {AppService} from '../../../services/app.service';
import {TranslateService} from '@ngx-translate/core';
import {NavigationService} from '../../../services/navigation.service';
// import {UserModelService} from '../../../models/user.model.service';

@Component({
  selector: 'app-message-modal',
  templateUrl: './item.html',
  styleUrls: ['../item.scss'],
})

export class MessageModalComponent implements OnInit {

  @Input() modal = true;
  @Input() massageModalText: any;

  @Output() resultEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  // private modalService: ModalService;
  translateService: TranslateService;
  navigationService: NavigationService;
  // userModelService: UserModelService;
  appService: AppService;
  closing = false;

  constructor(
    appService: AppService,
    translateService: TranslateService,
    navigationService: NavigationService,
    // userModelService: UserModelService,
  ) {
    // this.modalService = modalService;
    // this.userModelService = userModelService;
    this.appService = appService;
    this.translateService = translateService;
    this.navigationService = navigationService;
  }

  ngOnInit(): void {
  }

  close() {
    this.closing = true;
    setTimeout(() => {
      // this.modalService.closeModal();
    }, 200);
  }
}
