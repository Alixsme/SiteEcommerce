import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLigneCommandeComponent } from './liste-ligne-commande.component';

describe('ListeLigneCommandeComponent', () => {
  let component: ListeLigneCommandeComponent;
  let fixture: ComponentFixture<ListeLigneCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLigneCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeLigneCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
