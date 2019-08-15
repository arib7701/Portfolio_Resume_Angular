import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences: any[];

  constructor(public infoService: InfoService) {}

  ngOnInit() {
    this.infoService
      .getExperiences()
      .valueChanges()
      .subscribe(experiences => {
        this.experiences = experiences;
      });
  }
}
