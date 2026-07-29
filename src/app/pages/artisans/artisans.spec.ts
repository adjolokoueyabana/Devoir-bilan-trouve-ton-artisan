import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artisans } from './artisans';

describe('Artisans', () => {
  let component: Artisans;
  let fixture: ComponentFixture<Artisans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Artisans],
    }).compileComponents();

    fixture = TestBed.createComponent(Artisans);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
