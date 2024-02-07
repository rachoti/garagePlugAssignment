import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as pageData from './constants/pagetxt.json';
import { IntroPageData } from './models/pageData.model';
@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.page.html',
styleUrls: ['./intro-page.page.scss'],
})
export class IntroPagePage {
  pageTxt:IntroPageData = pageData;
  constructor(
    private router: Router
  ) {}
  redirectToLoginPage(path: string) {
    this.router.navigateByUrl(path);
  }
}
