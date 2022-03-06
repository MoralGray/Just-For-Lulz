import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  router: Router;
  location: Location;

  public previousUrl = '';
  public currentUrl = '';

  constructor(
    router: Router,
    location: Location
  ) {
    this.router = router;
    this.location = location;

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.previousUrl = this.currentUrl;
      this.currentUrl = event.url;
    });
  }

  goTo(url: string) {
    this.goToUrl(url);
  }

  goToUrl(url: any, options = {}) {

    if (typeof url === 'string' || url instanceof String) {
      url = [url];
    }

    this.router.navigate(url, options);
  }

  isRoute(route: string) {
    return this.router.url.includes(route);
  }

  replaceState(state: string) {
    this.location.replaceState(state);
  }
  back() {
    this.location.back();
  }

}
