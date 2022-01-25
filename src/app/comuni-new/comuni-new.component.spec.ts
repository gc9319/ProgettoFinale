import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComuniNewComponent } from './comuni-new.component';

describe('ComuniNewComponent', () => {
  let component: ComuniNewComponent;
  let fixture: ComponentFixture<ComuniNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComuniNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComuniNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
