import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorInfoComponent } from './actor-info.component';

describe('ActorInfoComponent', () => {
  let component: ActorInfoComponent;
  let fixture: ComponentFixture<ActorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
