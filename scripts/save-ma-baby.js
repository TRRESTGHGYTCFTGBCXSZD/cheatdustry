const puzzloopgirlfriend = extendContent(Block, "save-ma-baby", {});
const cores = [Blocks.coreShard, Blocks.coreFoundation, Blocks.coreNucleus];

puzzloopgirlfriend.buildType = () => {
    return extendContent(Block.Building, puzzloopgirlfriend, {
    onDestroyed(){
        this.super$onDestroyed();
        Groups.unit.each(u => u.team == this.team, u.kill());
        Groups.build.each(b => b.team == this.team && cores.includes(b.block), b.kill());
    }
    });
}