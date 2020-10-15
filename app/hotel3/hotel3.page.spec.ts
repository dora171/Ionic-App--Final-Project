import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hotel3Page } from './hotel3.page';

describe('Hotel3Page', () => {
  let component: Hotel3Page;
  let fixture: ComponentFixture<Hotel3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hotel3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hotel3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
