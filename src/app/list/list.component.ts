import { CommonModule } from '@angular/common'; 
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() users: any[] = [];
  @Input() selectedUser: any; 
  @Output() selectUser = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<any>();

  onShow(user: any) {
    this.selectUser.emit(user);
  }

  onDelete(user: any) {
    this.deleteUser.emit(user);
  }
}
