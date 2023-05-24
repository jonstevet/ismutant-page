import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsmutantService {

  isMutant(dna: string[]): boolean {
    const n: number = dna.length;
    let count: number = 0;

    // Comprobar las secuencias horizontales y verticales
    for (let i: number = 0; i < n; i++) {
      for (let j: number = 0; j < n; j++) {
        // Horizontal
        if (j < n - 3 && dna[i][j] === dna[i][j+1] && dna[i][j] === dna[i][j+2] && dna[i][j] === dna[i][j+3]) {
          count++;
        }
        // Vertical
        if (i < n - 3 && dna[i][j] === dna[i+1][j] && dna[i][j] === dna[i+2][j] && dna[i][j] === dna[i+3][j]) {
          count++;
        }
        // Diagonal arriba-derecha
        if (i >= 3 && j < n - 3 && dna[i][j] === dna[i-1][j+1] && dna[i][j] === dna[i-2][j+2] && dna[i][j] === dna[i-3][j+3]) {
          count++;
        }
        // Diagonal abajo-derecha
        if (i < n - 3 && j < n - 3 && dna[i][j] === dna[i+1][j+1] && dna[i][j] === dna[i+2][j+2] && dna[i][j] === dna[i+3][j+3]) {
          count++;
        }
      }
    }
    // Si se encontraron más de una secuencia de 4 letras iguales, es mutante
    return count > 1;
  }

}
