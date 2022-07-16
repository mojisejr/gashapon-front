import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoxPageComponent } from './create-box-page.component';

describe('CreateBoxPageComponent', () => {
  let component: CreateBoxPageComponent;
  let fixture: ComponentFixture<CreateBoxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBoxPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
