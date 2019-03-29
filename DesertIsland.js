var LEVEL = new Level("Level", "level");
var CLAY = new Material("clay", "g", "clay");
var WATER = new Material("water", "cl", "water");
var WOOD = new Material("wood", "g", "wood");
var CHARCOAL = new Material("charcoal", "g", "CHARCOAL");
var CLAY_POT = new Item("clay pot", "clay_pot");
var engine = new Engine();
engine.Player = new Player("Chuck Noland");
engine.Player.Storage = [new ResourceQuantity(LEVEL, 1)];
engine.Producers = [
    new ManualProducer("take water").thatProduce(10, WATER),
    new ManualProducer("bare hands dig clay").thatProduce(10, CLAY)
];
engine.Crafters = [
    new Crafter("craft clay pot")
        .thatCraft(1, CLAY_POT)["in"](20).seconds()
        .atCostOf(100, CLAY).and(10, WATER)
];
engine.Triggers = [
    new Trigger("carry water in clay pot")
        .whenReached(1, CLAY_POT)
        .spawnProducer(new ManualProducer("carry water").thatProduce(100, WATER))
        .spawnResource(1, LEVEL)
        .spawnResource(-1, CLAY_POT),
    new Trigger("carry clay in clay pot")
        .whenReached(1, CLAY_POT).and(2, LEVEL)
        .spawnProducer(new ManualProducer("carry clay").thatProduce(100, CLAY))
        .spawnProducer(new ManualProducer("collect branches").thatProduce(100, WOOD))
        .spawnResource(1, LEVEL)
        .appendTrigger(new Trigger("charcoal crafting")
        .whenReached(200, WOOD)
        .spawnCrafter(new Crafter("craft charcoal")
        .thatCraft(1000, CHARCOAL)["in"](20).seconds()
        .atCostOf(3000, WOOD).and(1000, CLAY)))
        .appendTrigger(new Trigger("charcoal craf")
        .whenReached(1000, CHARCOAL)
        .spawnResource(1, LEVEL)),
];
//# sourceMappingURL=DesertIsland.js.map