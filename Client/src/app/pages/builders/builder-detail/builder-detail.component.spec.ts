import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderDetailComponent } from './builder-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorHandler } from '../../../shared/_services/http-handle-error.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('BuilderDetailComponent', () => {
  let component: BuilderDetailComponent;
  let fixture: ComponentFixture<BuilderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule, NgbModule.forRoot()],
      declarations: [BuilderDetailComponent],
      providers: [HttpErrorHandler],
    }).compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
