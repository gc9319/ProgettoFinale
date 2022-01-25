import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FattureInfoComponent } from './fatture-info.component';

describe('FattureInfoComponent', () => {
  let component: FattureInfoComponent;
  let fixture: ComponentFixture<FattureInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FattureInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FattureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
