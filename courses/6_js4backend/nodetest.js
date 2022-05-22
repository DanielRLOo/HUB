// /*
const client = {
  name: 'Jane Doe',
  age: 25,
  id: 123456,
  pocketMoney: 50,
  email: 'email@domain.com',
  payBy: function (ammount) {
    return ammount >= this.pocketMoney ? 'Card' : 'Money';
  },
  presentation: function () {
    console.log(`I'm ${this.name} and my email address is ${this.email}`);
  }
}
// */

client.presentation();
