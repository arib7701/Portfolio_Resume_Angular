import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  hobbies: any[];

  constructor(public infoService: InfoService) {}

  ngOnInit() {
    this.infoService
      .getHobbies()
      .valueChanges()
      .subscribe(hobbies => {
        this.hobbies = hobbies;
      });
  }
}
