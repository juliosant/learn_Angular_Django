import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  selected_member = { id: 0, name: '', surname: ''}

  members = [
    {id: 1, name: 'Julio', surname: 'Santiago'},
    {id: 2, name: 'Julia', surname: 'Santiaga'},
    {id: 3, name: 'Julie', surname: 'Santiage'},
  ];

  constructor (private api: ApiService) { 
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log("Erro", error)
      }
    );
  };

  memberClicked = (member: any) => {
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data)
        this.selected_member = data
      },
      error => {
        console.log("Erro", error)
      }
    );
  }
}
