import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntartaimentComponent } from './entartaiment.component';

describe('EntartaimentComponent', () => {
  let component: EntartaimentComponent;
  let fixture: ComponentFixture<EntartaimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntartaimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntartaimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
