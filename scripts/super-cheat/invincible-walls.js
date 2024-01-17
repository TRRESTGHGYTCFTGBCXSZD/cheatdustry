var lib = require('super-cheat/lib');

lib.setBuildingSimple(extend(Wall, "elastic-wall", {}), Wall.WallBuild, {
    damage(damage) {  },
    handleDamage(tile, amount) { return 0; },
});
lib.setBuildingSimple(extend(Wall, "absorbing-wall", {}), Wall.WallBuild, {
    damage(damage) {  },
    handleDamage(tile, amount) { return 0; },
});