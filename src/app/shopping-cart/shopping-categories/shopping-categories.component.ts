import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { PriceService } from 'src/app/core/services/price.service';
import { ShoppingProduct } from '../models/shopping-product';
import { ShoppingProductsService } from '../services/shopping-products.service';

@Component({
  selector: 'app-shopping-categories',
  templateUrl: './shopping-categories.component.html',
  styleUrls: ['./shopping-categories.component.scss']
})
export class ShoppingCategoriesComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  categoriesProductDetails = new Map();
  isProductsAvailable = false;

  constructor(
    private shoppingProductsService: ShoppingProductsService,
    private priceService: PriceService
  ) { }
  

  ngOnInit(): void {
    this.subscription = this.shoppingProductsService.getProducts()
      .subscribe((shoppingProducts: ShoppingProduct[]) => {
        this.seggregateAndSetCategories(shoppingProducts);
        this.isProductsAvailable = this.categoriesProductDetails.size ? true : false;
      });
  }

  private seggregateAndSetCategories(shoppingProducts: ShoppingProduct[]) {
    shoppingProducts.map((product: ShoppingProduct) => {
      if( !this.categoriesProductDetails.get(product.category) ) {
        this.categoriesProductDetails.set(
          product.category, 
          [ product] 
        )
      } else {
        const prods = this.categoriesProductDetails.get(product.category);
        prods.push(product);
        this.categoriesProductDetails.set(
          product.category, 
          [ prods] 
        )
      }
    });
  }

  addPrice(price: number) {
    this.priceService.addPrice(price);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
