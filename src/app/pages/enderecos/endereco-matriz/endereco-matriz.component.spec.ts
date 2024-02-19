import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoMatrizComponent } from './endereco-matriz.component';

describe('EnderecoMatrizComponent', () => {
  let component: EnderecoMatrizComponent;
  let fixture: ComponentFixture<EnderecoMatrizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnderecoMatrizComponent]
    });
    fixture = TestBed.createComponent(EnderecoMatrizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
