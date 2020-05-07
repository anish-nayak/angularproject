import { Component, OnInit } from '@angular/core';
import { VoterRegisterationService, Application } from 'src/app/components/service/voters/voter-registeration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-voter-request',
  templateUrl: './send-voter-request.component.html',
  styleUrls: ['./send-voter-request.component.css']
})
export class SendVoterRequestComponent implements OnInit {
  userid: number;
  constituency: string;
  approvedstatus:number;
  passedstatus: number;
  voterid:string;
  
  constructor(private sendRequestService:VoterRegisterationService,private router:Router) { }

  ngOnInit(): void {
  }
  async onSubmit() {
    console.log('clicked..');

    let body = {
      userid: this.userid,
  constituency: this.constituency,
  approvedstatus:this.approvedstatus,
  passedstatus:this.passedstatus,
  voterid:this.voterid,
    };

    console.log(body);
    const sessionId = localStorage.getItem('sessionId');
    let res = await this.sendRequestService.addVoterRequest(body, sessionId);

    if (res != null && res.userid > 0) {
      alert('Application Updated Successfully..');
    } else {
      alert('Failed..');
    }
  }

}
