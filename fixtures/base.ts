

import {test as base} from "@playwright/test";

import { Login} from "../pages/login";


type MyFixtures = {
  login:Login;

}
export const test = base.extend<MyFixtures>({
    login:async({page},use)=>{
        const login=new Login(page);
    await login.enterusername("standard_user");
 await login.enterpassword("secret_sauce")
await login.choosesignin();

    // Use the fixture value in the test.
    await use(login);
    }

    // Clean up the fixture.
    //await todoPage.removeAll();
  });

  export{expect} from "@playwright/test";