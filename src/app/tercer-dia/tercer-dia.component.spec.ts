import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerDiaComponent } from './tercer-dia.component';

describe('TercerDiaComponent', () => {
  let component: TercerDiaComponent;
  let fixture: ComponentFixture<TercerDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TercerDiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TercerDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
