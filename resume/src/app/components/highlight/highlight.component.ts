import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css']
})
export class HighlightComponent implements OnInit {
  highlights: any[];

  constructor(public infoService: InfoService) {}

  ngOnInit() {
    this.infoService
      .getHighlights()
      .valueChanges()
      .subscribe(highlights => {
        this.highlights = highlights;
      });
  }
}
