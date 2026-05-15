import test from "@playwright/test";
//import { LoginData } from "../testdata/logindata";
import { Login } from "../pages/login";
import { LoginData } from "../testdata/logindata";
import { Homepage } from "../pages/hoempage";




test.beforeEach(async({page})=>{
    await page.goto("https://www.saucedemo.com/");


const  login=new Login(page);
await login.enterusername(LoginData.username);
await login.enterpassword(LoginData.password);
await login.choosesignin();


});
test("addProduct",async({page})=>{
  const homepage=  new Homepage(page);
 await homepage.addProduct(homepage.addToCart);

});


test("multipleproducts",async({page})=>{
   const  homepage= new Homepage(page);
  await homepage.addProduct(homepage.addToCart);
  await homepage.addProduct(homepage.secondProduct);
  await  homepage.addProduct(homepage.thirdProduct);
});
