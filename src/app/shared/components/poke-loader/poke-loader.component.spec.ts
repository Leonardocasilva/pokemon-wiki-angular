import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeLoaderComponent } from './poke-loader.component';

describe('PokeLoaderComponent', () => {
  let component: PokeLoaderComponent;
  let fixture: ComponentFixture<PokeLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeLoaderComponent]
    });
    fixture = TestBed.createComponent(PokeLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
