import {Component} from '@angular/core';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
    selector:'addparty',
    templateUrl:'./addparty.components.html',
    

})
export class AddPartyComponent{
    partyForm = new FormGroup({
        name: new FormControl(),
        leader: new FormControl(),
        symbol : new FormControl()
    });
    Submit(){
        console.log(this.partyForm.value);
    }
}