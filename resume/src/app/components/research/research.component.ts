import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  researchs: any[];

  constructor(public infoService: InfoService) {}

  ngOnInit() {
    this.infoService
      .getResearchs()
      .valueChanges()
      .subscribe(researchs => {
        this.researchs = researchs;
      });
  }
}
