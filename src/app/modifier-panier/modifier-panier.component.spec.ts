import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPanierComponent } from './modifier-panier.component';

describe('ModifierPanierComponent', () => {
  let component: ModifierPanierComponent;
  let fixture: ComponentFixture<ModifierPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
