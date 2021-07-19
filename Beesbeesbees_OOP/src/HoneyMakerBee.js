const Bee = require('./Bee');

class HoneyMakerBee extends Bee{
  constructor(honeyPot){
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney(){  // 1씩 추가
    this.honeyPot++;
  }
  giveHoney(){  // 1씩 감소
    this.honeyPot--;
  }
}

module.exports = HoneyMakerBee;
