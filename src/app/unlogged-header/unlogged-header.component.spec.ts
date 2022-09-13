import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnloggedHeaderComponent } from './unlogged-header.component';

describe('UnloggedHeaderComponent', () => {
  let component: UnloggedHeaderComponent;
  let fixture: ComponentFixture<UnloggedHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnloggedHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnloggedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
