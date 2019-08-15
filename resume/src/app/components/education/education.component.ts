import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: any[];

  constructor(public infoService: InfoService) {}

  ngOnInit() {
    this.infoService
      .getEducations()
      .valueChanges()
      .subscribe(educations => {
        this.educations = educations;
      });
  }
}
