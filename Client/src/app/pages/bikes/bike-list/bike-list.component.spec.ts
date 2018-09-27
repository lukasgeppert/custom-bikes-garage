import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeListComponent } from './bike-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BikeSearchPipe } from '../_pipes/bike-search.pipe';
import { HttpErrorHandler } from '../../../shared/_services/http-handle-error.service';

describe('BikeListComponent', () => {
  let component: BikeListComponent;
  let fixture: ComponentFixture<BikeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [BikeListComponent, BikeSearchPipe],
      providers: [HttpErrorHandler]
    }).compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
