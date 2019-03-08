import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGameListComponent } from './admin-game-list.component';

describe('GameListComponent', () => {
  let component: AdminGameListComponent;
  let fixture: ComponentFixture<AdminGameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
