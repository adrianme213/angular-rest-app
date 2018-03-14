import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared/widget.model';
@Component({
  selector: 'app-widgets-detail',
  templateUrl: './widgets-detail.component.html',
  styleUrls: ['./widgets-detail.component.css']
})
export class WidgetsDetailComponent {
  selectedWidget: Widget;
  originalName;
  @Input() set widget(value: Widget){
    if (value) { this.originalName = value.name; }
    this.selectedWidget = Object.assign({}, value);
  };
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

}
