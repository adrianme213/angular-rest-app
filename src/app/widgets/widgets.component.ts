import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  selectedWidget: Widget;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.widgets = this.widgetsService.widgets;
    this.reset();
  }

  reset() {
    this.selectedWidget = { id: null, name: '', description: '' };
  }

  save(widget) {
    console.log('Saving Widget', widget);
    this.reset();
  }

  selected(widget) {
    this.selectedWidget = widget;
  }

  cancel() {
    this.reset();
  }

}
