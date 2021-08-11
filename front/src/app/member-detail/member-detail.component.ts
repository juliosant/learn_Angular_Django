import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private api: ApiService) { }
  selected_member = {id: 0, name:'', surname: ''};

  ngOnInit(): void {
    this.loadMember()
  }

  loadMember() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)

    this.api.getMember(id).subscribe(
      data => {
        console.log(data)
        this.selected_member = data
      },
      error => {
        console.log('Erro')
      }
    )
  }
}
