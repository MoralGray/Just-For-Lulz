import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
// import {UserModelService} from '../../models/user.model.service';
import {FormControl, NgForm} from '@angular/forms';
import {NavigationService} from '../../services/navigation.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './item.html'
})

export class FooterItemComponent implements OnDestroy, OnInit {

  appService: AppService;
  // userModelService: UserModelService;
  navigationService: NavigationService;
  route: ActivatedRoute;

  user: any = {
    email: null,
    password: null,
  };
  loginError: string | null = null;
  regError: string | null = null;
  resetOkText: string | null = null;
  resetError: string | null = null;
  passwordError: string | null = null;
  reg: any = {
    email: null,
    name: null,
    surname: null,
    password: null,
    password_confirmation: null,
  };

  reset: any = {
    email: null,
    password: null,
    password_confirmation: null,
    token: null,
  };

  constructor(
    appService: AppService,
    // userModelService: UserModelService,
    navigationService: NavigationService,
    route: ActivatedRoute,
  ) {

    this.appService = appService;
    // this.userModelService = userModelService;
    this.navigationService = navigationService;
    this.route = route;

    this.reset.token = this.route.snapshot.queryParamMap.get('resetToken') || null;

  }

  ngOnInit() {
    if (this.reset.token) {
      this.appService.showPassword();
    }
  }

  ngOnDestroy() {

  }

  validate(controls: any) {
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        if (controls[key].constructor === FormControl) {
          controls[key].markAsTouched();
        } else {
          this.validate(controls[key].controls);
        }

      }
    }
  }

  // login(form: NgForm) {

  //   this.loginError = null;

  //   this.validate(form.form.controls);

  //   if (form.valid) {
  //     this.appService.loginLoading = true;
  //     this.userModelService.login(this.user, (answer) => {
  //       this.appService.loginLoading = false;

  //       if (answer.status) {

  //         this.appService.loginShow = false;

  //         this.user = {
  //           email: null,
  //           password: null
  //         };

  //         form.form.markAsPristine();
  //         form.form.markAsUntouched();
  //         form.form.updateValueAndValidity();
  //       } else {
  //         this.loginError = HelperService.translate(`website.error.${answer.message}`);
  //       }

  //     });
  //   }
  // }

  // register(regForm: NgForm) {
  //   this.regError = null;

  //   this.validate(regForm.form.controls);

  //   if (regForm.valid) {
  //     this.appService.loginLoading = true;
  //     this.userModelService.register(this.reg, (answer) => {
  //       this.appService.loginLoading = false;

  //       if (answer.status) {
  //         this.appService.regShow = false;

  //         this.reg = {
  //           email: null,
  //           name: null,
  //           surname: null,
  //           password: null,
  //           password_confirmation: null,
  //         };

  //         regForm.form.markAsPristine();
  //         regForm.form.markAsUntouched();
  //         regForm.form.updateValueAndValidity();

  //       } else {
  //         this.regError = HelperService.translate(`website.error.${answer.message}`);
  //       }

  //     });

  //   }

  // }

  // resetSubmit(form: NgForm) {
  //   this.resetOkText = null;
  //   this.resetError = null;

  //   this.validate(form.form.controls);

  //   if (form.valid) {
  //     this.appService.loginLoading = true;
  //     this.userModelService.resetEmail({email: this.reset.email}, (answer) => {
  //       this.appService.loginLoading = false;

  //       this.resetOkText = HelperService.translate('website.reset_form.reset_ok_text').replace('%EMAIL%', this.reset.email);

  //       this.reset = {
  //         email: null,
  //         password: null,
  //         password_confirmation: null,
  //         token: null,
  //       };

  //       if (answer.status) {
  //         this.appService.resetOk = true;

  //         form.form.markAsPristine();
  //         form.form.markAsUntouched();
  //         form.form.updateValueAndValidity();

  //       } else {
  //         this.resetError = HelperService.translate(`website.error.${answer.message}`);
  //       }

  //     });

  //   }
  // }

  // passwordSubmit(form: NgForm) {
  //   this.passwordError = null;

  //   this.validate(form.form.controls);

  //   if (form.valid) {

  //     this.appService.loginLoading = true;
  //     this.userModelService.resetPassword({password: this.reset.password, token: this.reset.token}, (answer) => {
  //       this.appService.loginLoading = false;

  //       this.reset = {
  //         email: null,
  //         password: null,
  //         password_confirmation: null,
  //         token: null,
  //       };

  //       if (answer.status) {
  //       this.appService.passwordOk = true;

  //       this.navigationService.goTo('/');

  //       form.form.markAsPristine();
  //       form.form.markAsUntouched();
  //       form.form.updateValueAndValidity();

  //       } else {
  //         this.resetError = HelperService.translate(`website.error.${answer.message}`);
  //       }

  //     });

  //   }
  // }
}
