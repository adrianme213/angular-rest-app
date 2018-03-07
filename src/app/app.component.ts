import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular REST App';
  links = [
    { path: '/home', icon: 'home', label: 'Home'},
    { path: '/items', icon: 'list', label: 'Items'},
    { path: '/fizzbuzz', icon: 'view_quilt', label: 'Fizzbuzz'},
    { path: '/gizmo', icon: 'date_range', label: 'Gizmo'},
    { path: '/widgets', icon: 'pan_tool', label: 'Widgets'}
  ];
}
