import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NewsYouTubeItemComponent} from '../../components/news-media/item.component';

import {NewsPageComponent} from './page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewsPageComponent
      }
    ]),
  ],
  declarations: [NewsPageComponent, NewsYouTubeItemComponent]
})
export class NewsPageModule {

}
