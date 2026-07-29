import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanCard } from './artisan-card';

describe('ArtisanCard', () => {
  let component: ArtisanCard;
  let fixture: ComponentFixture<ArtisanCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtisanCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
