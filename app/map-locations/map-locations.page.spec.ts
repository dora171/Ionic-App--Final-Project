import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapLocationsPage } from './map-locations.page';

describe('MapLocationsPage', () => {
  let component: MapLocationsPage;
  let fixture: ComponentFixture<MapLocationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLocationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapLocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
