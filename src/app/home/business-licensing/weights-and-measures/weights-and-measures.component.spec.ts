import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeightsAndMeasuresComponent } from './weights-and-measures.component';

describe('WeightsAndMeasuresComponent', () => {
  let component: WeightsAndMeasuresComponent;
  let fixture: ComponentFixture<WeightsAndMeasuresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightsAndMeasuresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeightsAndMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
