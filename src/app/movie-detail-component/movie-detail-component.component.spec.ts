import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponentComponent } from './movie-detail-component.component';

describe('MovieDetailComponentComponent', () => {
  let component: MovieDetailComponentComponent;
  let fixture: ComponentFixture<MovieDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
