import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComuniInfoComponent } from './comuni-info.component';

describe('ComuniInfoComponent', () => {
  let component: ComuniInfoComponent;
  let fixture: ComponentFixture<ComuniInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComuniInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComuniInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
