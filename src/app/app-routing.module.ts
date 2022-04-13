import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
// import {AuthGuard} from './core/guards/auth.guard';
// import {RoleGuard} from './core/guards/user-role-pro.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/page.module').then(m => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/page.module').then(m => m.NewsPageModule),
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/page.module').then(m => m.ContactPageModule),
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./pages/home/page.module').then(m => m.HomePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
