import { Component, Input } from '@angular/core';
import { Pais } from '../types/Pais';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
@Input() pais:Pais | undefined
}
