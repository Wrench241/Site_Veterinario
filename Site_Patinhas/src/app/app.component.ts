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

}