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

  saveWidget(widget) {
    console.log('Saving Widget', widget);
    this.reset();
  }

  deleteWidget(widget) {
    console.log('Delete Widget ', widget);
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  cancel(widget) {
    this.reset();
  }

}
