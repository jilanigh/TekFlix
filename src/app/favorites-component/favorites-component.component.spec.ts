import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponentComponent } from './favorites-component.component';

describe('FavoritesComponentComponent', () => {
  let component: FavoritesComponentComponent;
  let fixture: ComponentFixture<FavoritesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
