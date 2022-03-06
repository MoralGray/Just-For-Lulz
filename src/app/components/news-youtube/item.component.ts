import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
// import {UserModelService} from '../../models/user.model.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-youtube',
  templateUrl: './item.html'
})

export class NewsYouTubeItemComponent implements OnDestroy, OnInit {

  @Input() links: any;

  apiKey = 'YOUR-APIKEY-YOUTUBE';

  appService: AppService;

  constructor(
    appService: AppService,
    public http: HttpClient
  ) {
    this.appService = appService;
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  getVideosForChanel(channel: any, maxResults: number): Observable<Object> {
  const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
  return this.http.get(url)
    .pipe(map((res) => {
      console.log(res);
      return res;
    }));
  }
}
