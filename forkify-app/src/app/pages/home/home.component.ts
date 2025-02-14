import { RecipeService } from '../../services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importação necessária

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]  // Adicionando CommonModule aqui
})
export class HomeComponent implements OnInit {
  recipes: any[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeService.searchRecipes('pizza').subscribe({
      next: (response) => {
        this.recipes = response.data.recipes;
      },
      error: (error) => {
        console.error('Erro ao buscar receitas:', error);
      }
    });
  }

  goToRecipeDetail(id: string): void {
    this.router.navigate([`/recipe/${id}`]);
  }
}
