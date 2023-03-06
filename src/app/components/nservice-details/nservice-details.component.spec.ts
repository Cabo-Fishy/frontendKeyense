import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NserviceDetailsComponent } from './nservice-details.component';

describe('NserviceDetailsComponent', () => {
  let component: NserviceDetailsComponent;
  let fixture: ComponentFixture<NserviceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NserviceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NserviceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
