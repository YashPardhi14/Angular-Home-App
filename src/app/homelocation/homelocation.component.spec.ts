import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelocationComponent } from './homelocation.component';

describe('HomelocationComponent', () => {
  let component: HomelocationComponent;
  let fixture: ComponentFixture<HomelocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomelocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
