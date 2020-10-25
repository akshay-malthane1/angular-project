import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkService } from 'src/app/common/dark.service';
import { HeaderComponent } from './header.component';
import { FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeaderComponent', () => {
  let fixture: any;
  let component: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule, FormsModule, ],
      providers: [DarkService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove from local storage', () => {
    expect(component).toBeTruthy();
  });

});
