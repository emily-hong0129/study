const Bee = require('./Bee');

class ForagerBee extends Bee{
  constructor(canFly, treasureChest){
    super();
    this.age = 10;
    this.job = `find pollen`;
    this.canFly = true
    this.treasureChest = [];
  }

  forage(value){
    this.treasureChest.push(value);
  }

}

module.exports = ForagerBee;

// 사용을 한다면?
// foragerBee.forage('pollen');
// foragerBee.forage('flowers');
// foragerBee.forage('gold'); 



