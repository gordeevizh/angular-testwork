import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;
 
  constructor(
    public authService: AuthService, 
    public router: Router
  ) {
    this.setMessage();
  }
 
  setMessage() {
    this.message = this.authService.isLoggedIn ? 'Вы авторизованы в качестве гостя' : 'Вы не авторизованы, войти как гость?';
  }
 
  login() {
    this.message = 'Попытка войти как гость ...';
 
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/';
        this.router.navigateByUrl(redirect);
      }
    });
  }
 
  logout() {
    this.authService.logout();
    this.setMessage();
  }
}