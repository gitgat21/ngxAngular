import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasktComponent } from './maskt.component';

describe('MasktComponent', () => {
  let component: MasktComponent;
  let fixture: ComponentFixture<MasktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
