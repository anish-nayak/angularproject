import { Component, OnInit } from '@angular/core';
import { Voter } from './register';
import { Router } from '@angular/router';
import { VoterRegisterationService } from '../service/voters/voter-registeration.service';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {


  voter: Voter=new Voter();
  submitted=false;
 
  
  constructor(private resgisterService:VoterRegisterationService,private router:Router) { }

  
  ngOnInit() {
  }

  public registerNow() :void
  {
    this.submitted=false;
    this.voter= new Voter();
  }

  public save(){
    this.resgisterService.doRegister(this.voter)
    .subscribe(data=> console.log(data),error => console.log(error));
    this.voter=new Voter();
   
    
  }
  public onSubmit(){
    this.submitted = true;
    this.save();
  }

 

}
