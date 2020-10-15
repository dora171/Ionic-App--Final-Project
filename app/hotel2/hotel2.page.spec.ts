import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Hotel2Page } from './hotel2.page';

describe('Hotel2Page', () => {
  let component: Hotel2Page;
  let fixture: ComponentFixture<Hotel2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hotel2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Hotel2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
