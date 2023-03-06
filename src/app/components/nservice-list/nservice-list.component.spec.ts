import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NserviceListComponent } from './nservice-list.component';

describe('NserviceListComponent', () => {
  let component: NserviceListComponent;
  let fixture: ComponentFixture<NserviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NserviceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NserviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
