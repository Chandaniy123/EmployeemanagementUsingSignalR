import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromosionComponent } from './promosion.component';

describe('PromosionComponent', () => {
  let component: PromosionComponent;
  let fixture: ComponentFixture<PromosionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromosionComponent]
    });
    fixture = TestBed.createComponent(PromosionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
