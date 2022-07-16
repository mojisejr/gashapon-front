import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftStackingComponent } from './nft-stacking.component';

describe('NftStackingComponent', () => {
  let component: NftStackingComponent;
  let fixture: ComponentFixture<NftStackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftStackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftStackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
