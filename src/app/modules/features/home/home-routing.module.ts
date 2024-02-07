import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MoreComponent } from './components/more/more.component';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'post',
        children: [
          {
            path: '',
            component: PostComponent
          },
        ],
      },
      {
        path: 'comments',
        children: [
          {
            path: '',
            component: CommentsComponent
          },
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            component: ProfileComponent
          },
        ],
      },
      {
        path: 'more',
        component: MoreComponent
      },
    ],
  },
  {
    path: '',
    redirectTo: 'post',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
