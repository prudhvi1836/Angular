import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

        public subject:any="Angular is typescript framework"

        public user:any={
          name : "teja",
          email :  "yugand@gmail",
          country : "india"
        }
        
        public userList :any=[
          {
          name : "yuga",
          email :  "yugand@gmail",
          country : "india"
          },
          {
          name : "abc",
          email :  "yydaa@gmail",
          country : "newzeland"
          },
          {
          name : "xyz",
          email :  "xyz@gmail",
          country : "southafrica"
          }
        ]

}