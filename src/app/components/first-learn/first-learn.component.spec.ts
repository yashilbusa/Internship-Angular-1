import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLearnComponent } from './first-learn.component';

describe('FirstLearnComponent', () => {
  let component: FirstLearnComponent;
  let fixture: ComponentFixture<FirstLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstLearnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
