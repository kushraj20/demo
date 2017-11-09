/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StarRankingComponent } from './star-ranking.component';

describe('StarRankingComponent', () => {
  let component: StarRankingComponent;
  let fixture: ComponentFixture<StarRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
