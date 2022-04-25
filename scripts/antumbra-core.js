var lib = require('super-cheat/lib');

const antumbraCore = extendContent(CoreBlock, "antumbra-core", {
    canBreak(tile) { return Vars.state.teams.cores(tile.team()).size > 1; },
    canReplace(other) { return other.alwaysReplace; },
    canPlaceOn(tile, team) { return true; },
    placeBegan(tile, previous) {},
    beforePlaceBegan(tile, previous) {},

    drawPlace(x, y, rotation, valid) {},
});
antumbraCore.unitType = UnitTypes.antumbra;
