import { Component } from '@angular/core';
import { BaseService } from 'src/app/modules/shared/services/base/base.service';
import { UtilityService } from 'src/app/modules/shared/services/utility/utility.service';
import { Endpoints } from './constants/endpoints';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  data;
  endPoints = Endpoints
  constructor(
    private baseService: BaseService,
    private utilityService: UtilityService
  ) {
    this.endPoints = this.utilityService.appendDomainToEndpoints(Endpoints);
   }

  ionViewWillEnter() {
    this.baseService
      .get('comments',this.endPoints.comments)
      .subscribe((res: any) => {
        this.data = res;
      });
  }
}
