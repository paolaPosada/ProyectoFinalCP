import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  user;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
    this.user = authService.authInfo;
  }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login(value.email, value.password)
      .then(() => {
        this.router.navigate(['/user/tienda']);
        // const name = this.authService.name;
      })
      .catch(() => {
        alert('No es valido');
      });
 }
}

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
    .then((data) => {
      this.router.navigate(['/user/tienda']);
      alert('Logeado con Google correctamente');
      console.log(data);
    })
    .catch(() => {
      alert('No es valido');
    });
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook()
    .then((data) => {
      alert('Logeado con Facebook correctamente');
      this.router.navigate(['/user/tienda']);
      console.log(data);
    })
    .catch(() => {
      alert('No es valido');
    });
  }

}
