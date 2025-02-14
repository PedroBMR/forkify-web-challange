import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://forkify-api.herokuapp.com/api/v2/recipes';

  constructor(private http: HttpClient) {}

  // Método para buscar receitas por termo de pesquisa
  searchRecipes(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?search=${query}`);
  }

  // Método para obter detalhes de uma receita pelo ID
  getRecipeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
