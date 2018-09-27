import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeDetailComponent } from './bike-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorHandler } from '../../../shared/_services/http-handle-error.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('BikeDetailComponent', () => {
  let component: BikeDetailComponent;
  let fixture: ComponentFixture<BikeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
      ],
      declarations: [BikeDetailComponent],
      providers: [HttpErrorHandler],
    }).compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
