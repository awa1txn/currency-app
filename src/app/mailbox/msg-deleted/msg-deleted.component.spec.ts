import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgDeletedComponent } from './msg-deleted.component';

describe('MsgDeletedComponent', () => {
  let component: MsgDeletedComponent;
  let fixture: ComponentFixture<MsgDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgDeletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
