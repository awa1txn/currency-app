import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgBookmarkedComponent } from './msg-bookmarked.component';

describe('MsgBookmarkedComponent', () => {
  let component: MsgBookmarkedComponent;
  let fixture: ComponentFixture<MsgBookmarkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgBookmarkedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgBookmarkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
