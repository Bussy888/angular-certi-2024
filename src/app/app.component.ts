import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './services/data.service';
import { UserData } from './user-data.interface';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, SearchComponent, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: UserData[] = [];
  filteredUsers: UserData[] = [];
  selectedUser: any = null; 

  constructor(private dataService: DataService) {
    this.users = this.dataService.getData();
    this.filteredUsers = this.users;
  }

  onSearch(query: string) {
    this.filteredUsers = this.users.filter(user =>
      `${user.name} ${user.lastName}`.toLowerCase().includes(query.toLowerCase())
    );
  }

  showDetails(user: UserData) {
    console.log('Selected User:', user); // Agrega este log para verificar
    this.selectedUser = user;
  }

  deleteUser(user: UserData) {
    this.filteredUsers = this.filteredUsers.filter(u => u !== user);
    if (this.selectedUser === user) {
      this.selectedUser = null; 
    }
  }
}
