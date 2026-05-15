

import { BrowserInteraction } from "./Browseractions";
import{Locator,test} from "@playwright/test";

export  class BrowserInteractionImp implements BrowserInteraction{
  async  fill(locator: Locator,data:string):Promise<void> {
        await test.step(`enter the correct value ${data}`,async()=>{

await locator.fill(data);
        });
    }

async click(locator:Locator): Promise<void> {
    await test.step(`click the right value`,async()=>{
await locator.click();
    });
}


}
