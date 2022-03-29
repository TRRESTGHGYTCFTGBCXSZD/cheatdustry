var lib = require('super-cheat/lib');

lib.setBuildingSimple(extendContent(Wall, "elastic-wall", {}), Wall.WallBuild, {
    damage(damage) {  },
    handleDamage(tile, amount) { return 0; },
});
lib.setBuildingSimple(extendContent(Wall, "absorbing-wall", {}), Wall.WallBuild, {
    damage(damage) {  },
    handleDamage(tile, amount) { return 0; },
});