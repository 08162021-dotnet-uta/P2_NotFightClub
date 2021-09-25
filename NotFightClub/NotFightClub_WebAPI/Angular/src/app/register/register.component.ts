import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';
import { User } from '../interfaces/user';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }



  ngOnInit(): void {
  }

  //this method can be removed possibly or used to hash passwords
  onSubmit(registerForm: NgForm) {
   //take the register data and create a user from it
   //hash the passwords
   //pass the user to the authentication service
   //call the user service to send the information to the database

    let userC: User = {
      userId: 0,
      userName: registerForm.value.username,
      pword: '',
      email: registerForm.value.email,
      dob: registerForm.value.dob,
      bucks: 0
    };

    console.log(userC);
    

    bcrypt.genSalt().then(salt => {
      //console.log(salt);
      bcrypt.hash(registerForm.value.password, salt).then(hash => {
        userC.pword = hash;
        this.userService.Register(userC);
        //console.log(userC.pword);
        //console.log(hash);
      })
    })

  }



  
}
