import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNserviceComponent } from './add-nservice.component';

describe('AddNserviceComponent', () => {
  let component: AddNserviceComponent;
  let fixture: ComponentFixture<AddNserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
