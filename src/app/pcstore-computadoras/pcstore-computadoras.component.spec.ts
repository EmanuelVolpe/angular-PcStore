import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcstoreComputadorasComponent } from './pcstore-computadoras.component';

describe('PcstoreComputadorasComponent', () => {
  let component: PcstoreComputadorasComponent;
  let fixture: ComponentFixture<PcstoreComputadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcstoreComputadorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcstoreComputadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
