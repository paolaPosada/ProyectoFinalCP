import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private af: AngularFireAuth
  ) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged( function(user) {
      if (user) {
         // tslint:disable-next-line: no-unused-expression
         $('#userEmailInput').val(user.email);
         console.log('ESTES ES EL EMAIL PAOLA');
         console.log(user.email);
      } else {
      }
    });
  }


  infoUser() {
    // tslint:disable-next-line: only-arrow-functions
    firebase.auth().onAuthStateChanged( function(user) {
      if (user) {
         // tslint:disable-next-line: no-unused-expression
         $('#userEmailInput').val(user.displayName);
      } else {
      }
    });
  }
}