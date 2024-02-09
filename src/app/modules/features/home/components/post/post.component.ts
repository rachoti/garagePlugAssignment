import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/modules/shared/components/modal/modal.component';
import { BaseService } from 'src/app/modules/shared/services/base/base.service';
import { UtilityService } from 'src/app/modules/shared/services/utility/utility.service';
import { Endpoints } from '../comments/constants/endpoints';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  subscription = new Subscription();
  datasource;
  data;
  pageIndex: number[] = [5, 10];
  pageSize: number = 10;
  length: number = 100;
  endPoints = Endpoints;

  constructor(
    private baseService: BaseService,
    private modalController: ModalController,
    private utilityService: UtilityService,
    private store: Store<{auth: {username: string, password: string}}>
  ) {
    this.endPoints = this.utilityService.appendDomainToEndpoints(Endpoints);
  }

  ionViewWillEnter() {
    this.subscription.add(this.baseService
      .get('posts',this.endPoints.post)
      .subscribe((res: any) => {
        this.data = res;
        this.datasource = this.data.slice(0, this.pageSize);
      }));
      this.store.select('auth').subscribe(res=>{
        console.log("Login Result",res);
      })
  }

  pageChangeEvent(event) {
    const startCount = event.pageIndex * event.pageSize;
    this.datasource = this.data.slice(startCount, startCount + event.pageSize);
  }

  async viewDataInModal(viewData: Post) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        data: viewData,
      },
    });
    modal.present();
  }
}
