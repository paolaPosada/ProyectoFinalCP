import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutUsersComponent } from './layout-users.component';

describe('LayoutUsersComponent', () => {
  let component: LayoutUsersComponent;
  let fixture: ComponentFixture<LayoutUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
