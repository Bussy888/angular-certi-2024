import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() user: any;
  @Output() showDetails = new EventEmitter<any>();
  @Output() deleteUser = new EventEmitter<any>();

  onShow() {
    this.showDetails.emit(this.user); // Emitir el usuario seleccionado
  }

  onDelete() {
    this.deleteUser.emit(this.user); // Emitir el usuario a eliminar
  }
}
