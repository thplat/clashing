/*require(["purchase"],function(purchase){
  purchase.purchaseProduct();
});*/

Barbarian.setLevel(6);

var BarbCollection = new TroopCollection(5);

BarbCollection.add([
	new Barbarian(),
	new Barbarian(),
	new Barbarian(),
	new Barbarian(),
	new Barbarian(),
]);

console.log(BarbCollection.totalDps());