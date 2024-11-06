import { Component } from '@angular/core';
import { CityListComponent } from './city-list/city-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CityListComponent, HttpClientModule, FormsModule],  // Añadido HttpClientModule y FormsModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Examen Final - Mateo Michel'; 
}
