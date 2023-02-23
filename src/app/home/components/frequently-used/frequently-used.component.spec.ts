import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrequentlyUsedComponent } from './frequently-used.component';

describe('FrequentlyUsedComponent', () => {
  let component: FrequentlyUsedComponent;
  let fixture: ComponentFixture<FrequentlyUsedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlyUsedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrequentlyUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
