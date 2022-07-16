import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDepositComponent } from './nft-deposit.component';

describe('NftDepositComponent', () => {
  let component: NftDepositComponent;
  let fixture: ComponentFixture<NftDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftDepositComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
