import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {


  menyType: string = 'default';
default: any;
seller: any;
sellerName :string =''
searchResult: undefined | product[];
userName : string= ''
cartItems: any;
  constructor(private route: Router, private product:ProductService) { }
  ngOnInit(): void {
   
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.warn('in seller area')
          this.menyType='seller'
          if(localStorage.getItem('seller')){
            let sellerStore =localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore);
            this.sellerName=sellerData.name;
          }
        }  else if (localStorage.getItem('user')){
           let userStore= localStorage.getItem('user')
           let userData= userStore && JSON.parse(userStore);
           this.userName = userData.name;
           this.menyType='user';
        } else {
          this.menyType ='default'
        }
      }
    })
    let cartData =localStorage.getItem('localCart');
    if(cartData){
      this.cartItems = JSON.parse(cartData).length
    }
    this.product.cartData.subscribe((items)=>{
      this.cartItems=items.length
    })
  }

  logout(){
    localStorage.removeItem('seller')
    this.route.navigate(['/']);
  }
  userLogout(){
    localStorage.removeItem('user')
    this.route.navigate(['/user-auth']);
  }
  searchProduct(query:KeyboardEvent){
  if(query){
    const elements = query.target as HTMLInputElement
    this.product.searchProducts(elements.value).subscribe((result)=>{
     result.length =5 ;
      this.searchResult=result;
    })
  }
  }
  hideSearch(){
    this.searchResult=undefined
  }
  redirectToDetails(id:number){
  this.route.navigate(['/details/'+id])
  }
  submitSearch(val:string){
   this.route.navigate([`search/${val}`])
  }
}
