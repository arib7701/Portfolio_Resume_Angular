import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options = null;
  typed = null;
  socials: any[];

  constructor(public infoService: InfoService) {}

  ngOnInit() {
    this.infoService
      .getSocials()
      .valueChanges()
      .subscribe(socials => {
        this.socials = socials;
      });

    this.options = {
      strings: [
        'Charles K. Mawusi',
        'an Economist',
        'a Ph.D. Student',
        'an Agricultural Specialist',
        'an Natural Resources Specialist'
      ],
      typeSpeed: 100,
      loop: true
    };
    this.typed = new Typed('.typed', this.options);
  }
}
