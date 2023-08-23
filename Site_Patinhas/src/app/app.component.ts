import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste';
  listavisivel: boolean = false;
showFiller: any;

  directionURL() {
    window.location.href='https://www.instagram.com';
  }

  list = [
    {
      number: '1',
      name: 'Redes sociais',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'Localização',
      icon: 'fa-solid fa-house',
    },
    {
      number: '3',
      name: 'Catálogo',
      icon: 'fa-solid fa-house',
    },
    {
      number: '4',
      name: 'Contato',
      icon: 'fa-solid fa-house',
    },
    {
      number: '5',
      name: 'Sobre',
      icon: 'fa-solid fa-house',
    },
  ];
}