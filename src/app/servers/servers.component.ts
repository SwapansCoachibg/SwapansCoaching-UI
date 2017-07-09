import { Component, OnInit } from '@angular/core';
import { AssociateService } from '../associate.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [AssociateService]
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverCreationStatus='No server was created'
serverName='TestingServer';
associate=[];
//private associateService:AssociateService
  constructor(private associateService:AssociateService) { 
  //setTimeout(()=>{this.allowNewServer=true},2000);
   }

  ngOnInit() {
    this.getAssociate();
    
  }
onCreateServer(){
this.serverCreationStatus='Server was created with name '+this.serverName;
}
onUpdateServerName(event: any){
this.serverName=(<HTMLInputElement>event.target).value;
}
 getAssociate(){
    this.associateService.getAssociate()
    .subscribe(
      (data)=>console.log(data)
    );
  }
}
