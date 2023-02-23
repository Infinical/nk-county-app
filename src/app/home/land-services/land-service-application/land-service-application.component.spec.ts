import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandServiceApplicationComponent } from './land-service-application.component';

describe('LandServiceApplicationComponent', () => {
  let component: LandServiceApplicationComponent;
  let fixture: ComponentFixture<LandServiceApplicationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LandServiceApplicationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandServiceApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
