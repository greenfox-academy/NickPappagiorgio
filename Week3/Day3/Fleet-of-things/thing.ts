'use strict';

class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }
  public complete() {
    this.completed = true;
  }
}
let milk = new Thing ('Get milk', );
export { Thing };




//* crete a fleet of things to have this output:*/
//* 1. [ ] Get milk */
//* 2. [ ] Remove the obstacles */
//* 3. [x] Stand up */
//* 4. [x] Eat lunch */
//* Hint: You have to create a Print method also */