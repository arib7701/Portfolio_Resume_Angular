import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any[];

  constructor(public infoService: InfoService) {}

  ngOnInit() {
    this.infoService
      .getSkills()
      .valueChanges()
      .subscribe(skills => {
        this.skills = skills;
      });
  }
}
