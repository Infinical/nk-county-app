import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodHandlersCertificateComponent } from './food-handlers-certificate.component';

describe('FoodHandlersCertificateComponent', () => {
  let component: FoodHandlersCertificateComponent;
  let fixture: ComponentFixture<FoodHandlersCertificateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodHandlersCertificateComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodHandlersCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
