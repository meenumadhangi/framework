import test, { expect } from "@playwright/test";
import { Login } from "../pages/login";
import { Homepage } from "../pages/hoempage";
import { CartProduct } from "../pages/cartproduct";
import { LoginData } from "../testdata/logindata";
import { CheckoutPage } from "../pages/checkout";


test("AddLoginPage",async({page})=>{
  await page.goto("https://www.saucedemo.com/?utm_source=chatgpt.com");

  const login =new Login(page);
  const homepage=new Homepage(page);
  const cartProduct=new CartProduct(page);

  await login.enterusername("standard_user");
 await login.enterpassword("secret_sauce")
await login.choosesignin();
await expect(page).toHaveURL(/inventory/);


//const homepage=new Homepage(page);
await homepage.addProduct(homepage.addToCart);
await homepage.addProduct(homepage.secondProduct)
await homepage.addProduct(homepage.thirdProduct);



//const cartProduct=new CartProduct(page);
//await cartProduct.verifyCartCount();
await cartProduct.viewProductName();


const checkoutPage= new CheckoutPage(page);

await checkoutPage.viewCheckoutPage();

await checkoutPage.enterFirstName("meenu");
await checkoutPage.enterLastName("k");
await checkoutPage.enterPostalCode("600103");
await checkoutPage.viewContinue();
await checkoutPage.viewFinish();
await checkoutPage.ViewSuccessMessage();



//await login.enterusername(LoginData.username);
// await login.enterpassword(LoginData.password);




});