import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotifyService, User, AuthService } from '@mdv-fifteen/core-data';

@Component({
  selector: 'mdv-fifteen-ui-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userInfo = { email: 'e@e.com', password: 'pass'}
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notify: NotifyService,
    private authservice: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    const inputedUser: User = this.form.value
    if (this.form.invalid) {
      this.notify.notification('Invaild User')
      return false
    } else {
      if(inputedUser.email === this.userInfo.email && inputedUser.password === this.userInfo.password) {
        this.router.navigate(['/shoes'])
        this.authservice.setToken(inputedUser.email)
      }
    }
  }

  private initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
  }


}
