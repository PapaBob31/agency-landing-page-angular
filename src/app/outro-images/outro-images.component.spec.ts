import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroImagesComponent } from './outro-images.component';

describe('OutroImagesComponent', () => {
  let component: OutroImagesComponent;
  let fixture: ComponentFixture<OutroImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutroImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutroImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
