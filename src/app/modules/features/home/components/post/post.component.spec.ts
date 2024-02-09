import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostComponent } from './post.component';
import { BaseService } from 'src/app/modules/shared/services/base/base.service';
import { of } from 'rxjs';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let baseServiceSpy;
  beforeEach(waitForAsync(() => {
    baseServiceSpy = jasmine.createSpyObj('baseServiceSpy',['get']);
    baseServiceSpy.get.and.returnValue(of(null));
    // baseServiceSpy.get.and.returnValue(Promise.resolve({}));
    TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      imports: [IonicModule.forRoot()],
      providers: [{provider: BaseService, userValue: baseServiceSpy}]
    }).compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
