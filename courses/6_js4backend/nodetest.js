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
    console.log(`Eu sou a ${this.name}, e meu e-mail é ${this.email}`);
  }
}
// */

client.presentation();
