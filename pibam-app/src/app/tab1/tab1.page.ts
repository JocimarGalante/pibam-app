import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BibleService } from './bible.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  bible: any

  constructor(private bibleService: BibleService) {}

  ngOnInit(){
    this.obterVersiculoDaBiblia();
  }

  obterVersiculoDaBiblia() {
    this.bibleService.getBibleVerse().subscribe((data) => {
      this.bible = data;
      console.log(data); // Faça algo com os dados da resposta
    }, (error) => {
      console.error('Erro ao obter o versículo da Bíblia', error);
    });
  }
}
