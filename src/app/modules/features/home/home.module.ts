import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HomePage } from './home.page';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatPaginatorModule,
  ],
  declarations: [HomePage, FooterComponent, PostComponent, ModalComponent, CommentsComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomePageModule {}
