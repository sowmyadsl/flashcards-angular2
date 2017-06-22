import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AdminComponent } from '../admin/admin.component';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [AngularFireAuth, AuthService]
})

export class AuthComponent{
  user: Observable<firebase.User>;
  uid;
  email: any;
  password: any;

  constructor(public afAuth: AngularFireAuth, public authService: AuthService) {
    this.user = afAuth.authState;
  }

  signUp(email, password) {
    this.authService.signUp(this.email, this.password);
    this.email = this.password = '';
  }

  logIn() {
    this.authService.logIn(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

}
