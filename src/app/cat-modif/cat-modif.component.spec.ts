import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatModifComponent } from './cat-modif.component';

describe('CatModifComponent', () => {
  let component: CatModifComponent;
  let fixture: ComponentFixture<CatModifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatModifComponent]
    });
    fixture = TestBed.createComponent(CatModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
