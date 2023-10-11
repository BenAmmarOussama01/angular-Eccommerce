import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.scss']
})
export class ProductCategoryMenuComponent implements OnInit{
productCategories:ProductCategory[]=[];
icons = ["/assets/icone/Books.png","/assets/icone/CoffeeMugs.png","assets/icone/MousePads.png","assets/icone/LuggageTags.png"]
constructor(private productService:ProductService){}
ngOnInit(){
  this.listProductCategories();
    
}
  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        console.log('ProductCategory='+JSON.stringify(data))
        this.productCategories = data;
      }
    )
  }

  getIconByIndex(id:number){
    return this.icons[+id-1]
  }
}