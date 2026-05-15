import { Locator, Page } from "@playwright/test";
import { BrowserInteractionImp } from "../utils/Browsrinteractions";


export class CheckoutPage extends BrowserInteractionImp{
    CheckoutPage:Locator;
    FirstName:Locator;
    LastName:Locator;
    PostalCode:Locator;
continue:Locator
finish:Locator;
successMessage:Locator;


    constructor(page:Page){
        super();
        this.CheckoutPage=page.locator("#checkout");
        this.FirstName=page.locator("#first-name");
        this.LastName=page.locator("#last-name");
        this.PostalCode=page.locator("#postal-code");
        this.continue=page.locator("#continue");
        this.finish=page.locator("#finish");
        this.successMessage=page.locator(".complete-header");

    }

    async viewCheckoutPage():Promise<void>{
        await this.click(this.CheckoutPage);
    }


    async enterFirstName(data:string):Promise<void>{
        await this.fill(this.FirstName,data);
    }

    async enterLastName(data:string):Promise<void>{
        await this.fill(this.LastName,data);
    }
    async enterPostalCode(data:string):Promise<void>{
        await this.fill(this.PostalCode,data);
    }
    async viewContinue():Promise<void>{
        await this.click(this.continue);
    }
    async viewFinish():Promise<void>{
        await this.click(this.finish);
    }
    async ViewSuccessMessage():Promise<void>{
        await this.click(this.successMessage);
        
    }
}