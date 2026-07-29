import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArtisans } from './featured-artisans';

describe('FeaturedArtisans', () => {
  let component: FeaturedArtisans;
  let fixture: ComponentFixture<FeaturedArtisans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedArtisans],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedArtisans);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
