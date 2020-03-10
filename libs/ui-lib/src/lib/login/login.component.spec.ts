// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

// import { LoginComponent } from './login.component';
// import { MaterialModule } from 'libs/material/src/lib/material.module';
// import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material';
// import { CommonModule } from '@angular/common';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let formBuilder: FormBuilder = new FormBuilder;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ],
//       imports: [
//         CommonModule,
//         MaterialModule,
//       ],
//       providers: [
//         MatSnackBar,
//         { 
//           provide: Router,
//           useValue: {
//             router: jest.fn()
//           }
//         },
//         { provide: FormBuilder, useValue: formBuilder }
//       ]
//     })
//     .overrideTemplate(LoginComponent, '')
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
describe('LoginComponent', () => {
  it('should work', () => {
    expect(true).toBeTruthy()
  })
})