/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HexMapComponent } from './hex-map.component';

describe('HexMapComponent', () => {
  let component: HexMapComponent;
  let fixture: ComponentFixture<HexMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
