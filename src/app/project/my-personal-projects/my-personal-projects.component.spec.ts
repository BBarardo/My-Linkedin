import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyPersonalProjectsComponent} from './my-personal-projects.component';

describe('MyPersonalProjectsComponent', () => {
  let component: MyPersonalProjectsComponent;
  let fixture: ComponentFixture<MyPersonalProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyPersonalProjectsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPersonalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
