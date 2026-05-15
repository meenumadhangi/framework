import { Locator } from "@playwright/test";


export interface BrowserInteraction{
    fill(locator:Locator,data:string):Promise<void>;
    click(locator:Locator):Promise<void>;
    
    
}