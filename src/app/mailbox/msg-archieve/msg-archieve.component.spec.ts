import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgArchieveComponent } from './msg-archieve.component';

describe('MsgArchieveComponent', () => {
  let component: MsgArchieveComponent;
  let fixture: ComponentFixture<MsgArchieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgArchieveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgArchieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
