import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLignePanierComponent } from './liste-ligne-panier.component';

describe('ListeLignePanierComponent', () => {
  let component: ListeLignePanierComponent;
  let fixture: ComponentFixture<ListeLignePanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeLignePanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeLignePanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
