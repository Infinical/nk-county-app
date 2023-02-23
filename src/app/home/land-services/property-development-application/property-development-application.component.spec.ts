import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropertyDevelopmentApplicationComponent } from './property-development-application.component';

describe('PropertyDevelopmentApplicationComponent', () => {
  let component: PropertyDevelopmentApplicationComponent;
  let fixture: ComponentFixture<PropertyDevelopmentApplicationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDevelopmentApplicationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyDevelopmentApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
