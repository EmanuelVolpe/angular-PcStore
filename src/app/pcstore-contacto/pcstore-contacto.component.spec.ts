import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcstoreContactoComponent } from './pcstore-contacto.component';

describe('PcstoreContactoComponent', () => {
  let component: PcstoreContactoComponent;
  let fixture: ComponentFixture<PcstoreContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcstoreContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcstoreContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
