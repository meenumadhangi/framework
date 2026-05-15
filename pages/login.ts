import {  Locator,Page } from "@playwright/test";
import { BrowserInteractionImp } from "../utils/Browsrinteractions";


export class Login extends BrowserInteractionImp{
    
    
    username:Locator;
    password:Locator;
signIn:Locator;
page:Page;
    constructor(page:Page){
        super();
        
        
    this.page=page;
        this.username=page.locator("#user-name");
        this.password=page.locator("#password");
        this.signIn =page.locator("#login-button")


    }

    async  enterusername(data:string):Promise<void>{
        await this.fill(this.username,data);
    }

    async enterpassword(data:string):Promise<void>{
        await this.fill(this.password,data);
    }

    async choosesignin(): Promise<void> {
        await this.click(this.signIn);
        
        
    }
}