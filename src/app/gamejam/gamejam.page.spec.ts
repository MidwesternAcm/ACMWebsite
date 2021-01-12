import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamejamPage } from './gamejam.page';

describe('GamejamPage', () => {
  let component: GamejamPage;
  let fixture: ComponentFixture<GamejamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamejamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamejamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
