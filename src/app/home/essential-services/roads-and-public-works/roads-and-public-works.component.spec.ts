import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoadsAndPublicWorksComponent } from './roads-and-public-works.component';

describe('RoadsAndPublicWorksComponent', () => {
  let component: RoadsAndPublicWorksComponent;
  let fixture: ComponentFixture<RoadsAndPublicWorksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadsAndPublicWorksComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoadsAndPublicWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
