import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() user: any; // Aquí puedes definir un tipo más específico si lo deseas
  activeTab: 'personal' | 'geographic' | 'messages' = 'personal'; // Pestaña activa por defecto
  filteredMessages: string[] = []; // Mensajes filtrados
  query: string = ''; // Consulta de búsqueda

  setActiveTab(tab: 'personal' | 'geographic' | 'messages') {
    this.activeTab = tab; // Cambia la pestaña activa
    if (tab === 'messages') {
      this.filteredMessages = this.user.messages; // Restablece los mensajes filtrados al cambiar a la pestaña de mensajes
    }
  }

  // Método que maneja la búsqueda
  onSearch(query: string) {
    this.query = query; // Asigna la consulta a la variable
    this.filteredMessages = this.user.messages.filter((message: string) => // Añadir tipo explícito aquí
      message.toLowerCase().includes(query.toLowerCase())
    ); // Filtra los mensajes
  }

  getBackgroundColor() {
    switch (this.activeTab) {
      case 'personal':
        return '#e0f7fa'; // Celeste
      case 'geographic':
        return '#ffe0b2'; // Naranja
      case 'messages':
        return '#F7DC6F'; // Amarillo
      default:
        return '#e0f7fa'; // Color por defecto
    }
  }
}