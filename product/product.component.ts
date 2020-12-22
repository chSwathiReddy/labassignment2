import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  template: `
    <p>
      product works!
    </p>
    <ul>
  <li (click)="onSelect(product)"*ngFor="let product of products">
    <span>{{product.id}}</span> {{product.name}}
  </li>
</ul>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

  public products = [
    {"id": 1, "name": "maskara"},
    {"id": 2, "name": "Nlipstick"},
    {"id": 3, "name": "foundation"},
    {"id": 4, "name": "primer"},
    {"id": 5, "name": "moisturizer"}
  ]
  constructor(private rounter: Router) { }
 
  ngOnInit() {
  }
  onSelect(product){
 
    this.rounter.navigate(['/products', product.id]);
  }
}