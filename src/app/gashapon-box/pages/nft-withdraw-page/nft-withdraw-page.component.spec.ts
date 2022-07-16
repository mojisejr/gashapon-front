import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftWithdrawPageComponent } from './nft-withdraw-page.component';

describe('NftWithdrawPageComponent', () => {
  let component: NftWithdrawPageComponent;
  let fixture: ComponentFixture<NftWithdrawPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftWithdrawPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftWithdrawPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
