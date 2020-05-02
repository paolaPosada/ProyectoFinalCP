import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
// import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authInfo: Observable<firebase.User>;

  constructor(
    private af: AngularFireAuth
  ) { }

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password)
    /*.then((result) => {
      const user = result.user;
      const email = user.email;
      const name = user.displayName;
      console.log(name + email);
    })*/;
  }

  loginWithGoogle() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.af.auth.signInWithPopup(provider);
    // return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout() {
    return this.af.auth.signOut();
  }

  hasUser() {
    return this.af.authState;
  }

  infoUser() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
         // tslint:disable-next-line: no-unused-expression
         return(user.email);
         console.log(user.email);
      }
    });
  }

}
