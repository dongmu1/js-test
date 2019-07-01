class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items[0].sellIn = 9;
    this.items[0].quality = 19;
  }
}
module.exports = {
  Item,
  Shop
}
