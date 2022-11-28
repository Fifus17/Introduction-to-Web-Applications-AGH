import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartCardComponent } from './shopping-cart-card.component';

describe('ShoppingCartCardComponent', () => {
  let component: ShoppingCartCardComponent;
  let fixture: ComponentFixture<ShoppingCartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
