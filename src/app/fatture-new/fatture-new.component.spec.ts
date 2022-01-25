import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FattureNewComponent } from './fatture-new.component';

describe('FattureNewComponent', () => {
  let component: FattureNewComponent;
  let fixture: ComponentFixture<FattureNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FattureNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FattureNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
