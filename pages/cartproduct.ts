import { expect, Locator, Page } from "@playwright/test";
import { BrowserInteractionImp } from "../utils/Browsrinteractions";


export class CartProduct extends BrowserInteractionImp{
    ProductName: Locator;

    constructor(page:Page){
        super()
        this.ProductName=page.locator(".inventory_item_name");

    }
async viewProductName():Promise<void>{
    await expect(this.ProductName).toHaveText([
        "Sauce Labs Backpack",
        "Sauce Labs Fleece Jacket",
        "Sauce Labs Onesie"]);

//}
// async verifyCartCount():Promise<void>{
//     await expect(this.ProductName).toHaveCount(3);

}
}