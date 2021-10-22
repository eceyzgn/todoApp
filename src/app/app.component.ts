import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Ece';
  items=[
    {description: "kahvaltı", action: "No"},
    {description: "sinema", action: "No"},
    {description: "spor", action: "No"},
    {description: "fatura", action: "No"}
  ];
}
