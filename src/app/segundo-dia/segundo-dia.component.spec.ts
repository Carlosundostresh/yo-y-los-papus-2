import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoDiaComponent } from './segundo-dia.component';

describe('SegundoDiaComponent', () => {
  let component: SegundoDiaComponent;
  let fixture: ComponentFixture<SegundoDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundoDiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegundoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
