import { Locator, Page } from "@playwright/test";
import { BrowserInteractionImp } from "../utils/Browsrinteractions";


export class Homepage extends BrowserInteractionImp{
    addToCart:Locator;
cartIcon:Locator;
secondProduct:Locator;
thirdProduct:Locator;

constructor(page:Page){
    super();
    
    this.addToCart=page.locator("#add-to-cart-sauce-labs-backpack");

this.secondProduct=page.locator("#add-to-cart-sauce-labs-fleece-jacket");
this.thirdProduct=page.locator("#add-to-cart-sauce-labs-onesie");
this.cartIcon=page.locator(".shopping_cart_link");

    }

    async addProduct(Product:Locator):Promise<void>{
        await this.click(Product);
    }

   
    
       
    
    async openCart():Promise<void>{
        await this.click(this.cartIcon);
    }
}

