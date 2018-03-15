import { Component, OnInit } from '@angular/core';
import { ItemsService, CaffeineService, WidgetsService, Item, Widget } from '../shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  items: Item[];
  sources;
  widgets: Widget[];

  constructor(private itemsService: ItemsService,
              private caffeineService: CaffeineService,
              private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.getItems();
    this.loadWidgets();
    this.sources = this.caffeineService.sources;
  }

  getItems() {
    this.itemsService.all()
      .subscribe(items => this.items = items);
  }

  loadWidgets() {
    this.widgetsService.loadWidgets()
      .subscribe(widgets => this.widgets = widgets);
  }
}
