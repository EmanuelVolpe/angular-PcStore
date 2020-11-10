import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPcComponent } from './lista-pc.component';

describe('ListaPcComponent', () => {
  let component: ListaPcComponent;
  let fixture: ComponentFixture<ListaPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
