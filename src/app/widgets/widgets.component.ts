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
    this.all();
    this.reset();
  }

  all() {
    this.widgetsService.loadWidgets()
      .subscribe(widgets => this.widgets = widgets);
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  reset() {
    this.selectedWidget = { id: null, name: '', description: '' };
  }

  saveWidget(widget) {
    if (!widget.id) {
      this.createWidget(widget);
    } else {
      this.updateWidget(widget);
    }
  }

  createWidget(widget) {
    this.widgetsService.create(widget)
      .subscribe(result => {
      this.all();
      this.reset();
    })
  }

  updateWidget(widget) {
    this.widgetsService.update(widget)
      .subscribe(result =>{
        this.all();
        this.reset();
      })
  }

  deleteWidget(widget) {
    this.widgetsService.delete(widget)
      .subscribe(result => {
        this.all();
        this.reset();
      })
  }


  cancel(widget) {
    this.reset();
  }

}
