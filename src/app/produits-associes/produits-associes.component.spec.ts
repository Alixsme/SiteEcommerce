import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsAssociesComponent } from './produits-associes.component';

describe('ProduitsAssociesComponent', () => {
  let component: ProduitsAssociesComponent;
  let fixture: ComponentFixture<ProduitsAssociesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsAssociesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsAssociesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
