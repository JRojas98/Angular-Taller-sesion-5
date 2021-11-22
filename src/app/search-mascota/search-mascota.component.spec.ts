import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMascotaComponent } from './search-mascota.component';

describe('SearchMascotaComponent', () => {
  let component: SearchMascotaComponent;
  let fixture: ComponentFixture<SearchMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
