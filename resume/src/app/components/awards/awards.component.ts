import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {
  awards: any[];

  constructor(public infoService: InfoService) {}

  ngOnInit() {
    this.infoService
      .getAwards()
      .valueChanges()
      .subscribe(awards => {
        this.awards = awards;
      });
  }
}
