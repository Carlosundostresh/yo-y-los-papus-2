import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerDiaComponent } from './primer-dia.component';

describe('PrimerDiaComponent', () => {
  let component: PrimerDiaComponent;
  let fixture: ComponentFixture<PrimerDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerDiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimerDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
