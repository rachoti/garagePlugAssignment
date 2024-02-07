import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Post } from 'src/app/modules/features/home/components/post/models/post.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  name: string;
  @Input() data: Post;

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
