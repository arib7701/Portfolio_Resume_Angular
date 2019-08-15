import { Component, OnInit, Renderer2 } from '@angular/core';
import { InfoService } from '../../services/info.service';
declare var $: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios: any[];
  portfolioCategory = 'all';

  constructor(private renderer: Renderer2, public infoService: InfoService) {}

  ngOnInit() {
    // Get Portfolios from DB
    this.infoService
      .getPortfolios()
      .valueChanges()
      .subscribe(portfolios => {
        this.portfolios = portfolios;
      });
  }

  filter(filterValue: string) {
    $('#portfolio-flters li').removeClass('filter-active');
    this.renderer.addClass(event.target, 'filter-active');

    this.portfolioCategory = filterValue;
  }
}
