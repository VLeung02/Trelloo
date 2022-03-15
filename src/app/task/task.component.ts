import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // input out, putting things in/out
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }

}
