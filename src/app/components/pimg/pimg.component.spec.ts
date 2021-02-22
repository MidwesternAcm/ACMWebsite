import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PimgComponent } from './pimg.component';

describe('PimgComponent', () => {
  let component: PimgComponent;
  let fixture: ComponentFixture<PimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PimgComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
