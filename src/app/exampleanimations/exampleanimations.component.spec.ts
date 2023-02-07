import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleanimationsComponent } from './exampleanimations.component';

describe('ExampleanimationsComponent', () => {
  let component: ExampleanimationsComponent;
  let fixture: ComponentFixture<ExampleanimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleanimationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleanimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
