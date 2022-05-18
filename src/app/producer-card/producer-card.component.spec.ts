import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerCardComponent } from './producer-card.component';

describe('ProducerCardComponent', () => {
  let component: ProducerCardComponent;
  let fixture: ComponentFixture<ProducerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
