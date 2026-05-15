

//
// import { test as base} from "../fixtures/base";
// type MyFixtures={
//     demo:string;
// }
  

// export const test =base.extend<MyFixtures>({

//     demo:async(_,use) =>{
//         use("hello");

//     }
//});
//export {expect} from "@playwright/test";






import { test, expect } from "../fixtures/base";

test("run fixture login", async ({ login }) => {

    // if we reach here, fixture already ran login steps
    await expect(true).toBeTruthy();

});

  

