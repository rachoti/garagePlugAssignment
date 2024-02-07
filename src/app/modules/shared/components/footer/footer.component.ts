import { Component } from '@angular/core';
import * as pageData from '../constants/footer.json';
import { Footer } from '../models/footer.model';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  pageTxt: Footer = pageData;
}
