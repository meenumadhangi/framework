import test, { expect } from "@playwright/test";
import { Login } from "../pages/login";
import { LoginData } from "../testdata/logindata";
import { Homepage } from "../pages/hoempage";
import { CartProduct } from "../pages/cartproduct";




test("login test with credentialvalues",async({page})=>{
    await page.goto("https://www.saucedemo.com/");

const login=new Login(page);
const hoempage=new Homepage(page);

const cartProduct=new CartProduct(page);



await login.enterusername(LoginData.username);
await login.enterpassword(LoginData.password);
await login.choosesignin();
await expect(page).toHaveURL(/inventory/);

await hoempage.addProduct(hoempage.addToCart);
await hoempage.addProduct(hoempage.secondProduct);
await hoempage.addProduct(hoempage.thirdProduct);


await hoempage.openCart()



});