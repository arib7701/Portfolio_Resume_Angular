import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socials: any[];

  constructor(public infoService: InfoService) {}

  ngOnInit() {
    this.infoService
      .getSocials()
      .valueChanges()
      .subscribe(socials => {
        this.socials = socials;
      });
  }
}
