import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VoterRegisterationService {
  
  private baseUrl='http://localhost:8080/evs';
  
  constructor(private http:HttpClient) { }

  doRegister(voter: Object): Observable<Object>
  {
    return this.http.post('http://localhost:8080/evs/register',voter);
  }

   electionSchedule(sessionId) {
    const headers = { sessionId: sessionId };
    return this.http.get<Election[]>('http://localhost:8080/evs/voter/schedule', {
      headers,
    });
   }

    
  public addVoterRequest(body,sessionId)
  {
    const headers = { sessionId: sessionId };
  return this.http
    .put<Application>('http://localhost:8080/evs/voter', body, {
      headers,
    })
    .toPromise();
} 

  
   getVoterStatus(sessionId,userid){
    const headers = { sessionId: sessionId ,userid: userid};
    return this.http.get("http://localhost:8080/evs/voter/status",{
      headers,
    });
  }
}
export class Election {
  electionid: number;
  name: string;
  electionDate: string;
  district: string;
  constituency: string;
  countingDate: string;
}
export class Application{
    
      userid:number;
      constituency:string;
      passedStatus:number;
      approvedStatus:number;
      voterId:number;
}