import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';  // Importando o HomeComponent

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent]  // Adicionando HomeComponent aqui
})
export class AppComponent {
  title = 'Recipe Finder';
}
