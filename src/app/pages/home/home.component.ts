import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IsmutantService } from '../../services/ismutant.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  tableData: string[][] = [];
  result = "";
  options: string[] = ['A', 'T', 'C', 'G'];
  showResult = false;

  constructor(
    private DnaValidator : IsmutantService
  ) {
    this.initializeTableData();
  }

  initializeTableData() {
    for (let i = 0; i < 6; i++) {
      const row: string[] = [];
      for (let j = 0; j < 6; j++) {
        const randomIndex = Math.floor(Math.random() * this.options.length);
        row.push(this.options[randomIndex]);
      }
      this.tableData.push(row);
    }
  }

  getResult() {
    const tableResult = this.tableData.map(row => row.join(''));
    const isMutantResult = this.DnaValidator.isMutant(tableResult);

    if(isMutantResult){
      this.result = "Eres un mutante!!!!!!!"
    } else {
      this.result = "Bienvenido humano"
    }
    this.showResult = true;
  }

}
