import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoterRegisterationService } from '../service/voters/voter-registeration.service';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-voter-status',
  templateUrl: './voter-status.component.html',
  styleUrls: ['./voter-status.component.css']
})
export class VoterStatusComponent implements OnInit {

  status: any;
  userid:number;
  constructor(private service:VoterRegisterationService,
    private logoutService: LogoutService,
    private router:Router) { }

  ngOnInit(): void {
    // const sessionId = localStorage.getItem('sessionId');
    // this.viewStatus.getVoterStatus(sessionId,this.userid).subscribe((status) => {
    //   console.log(status);
    //  // this.status = status;
    // });
  }
  public statusbyUserid()
  {
    const sessionId = localStorage.getItem('sessionId');
    let resp=this.service.getVoterStatus(sessionId,this.userid)
    resp.subscribe((data)=>this.status=data);
  }
  async onClick() {
    console.log('Clicked..');
    let res = await this.logoutService.logout();

    if (res.message === 'LOGGED OUT SUCCESFULLY') {
      alert('LOGGED OUT SUCCESFULLY');
      this.router.navigate(['/login']);
    } else {
      alert('Some Error Occured..');
    }
  }

}
