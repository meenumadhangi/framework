

import {test,expect} from "@playwright/test";
test("simple get api test",async({request})=>{
 const response = await request.get('https://reqres.in/api/users/2');
 
  console.log("Status:", response.status());
  console.log("Response:", await response.text());

  expect(response.ok()).toBeTruthy();

});