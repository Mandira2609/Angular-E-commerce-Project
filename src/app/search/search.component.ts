import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchResult : undefined| product[];
  product: any;

  
  constructor(private activeRoute:ActivatedRoute){}
 
  ngOnInit(): void {
    let query =this.activeRoute.snapshot.paramMap.get('query');
    query && this.product.searchProduct(query).subscribe((result: product[] | undefined)=>{
      this.searchResult=result
    })
  }
}
