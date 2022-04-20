const puzzloopgirlfriend = extendContent(Block, "save-ma-baby", {});
const cores = [Blocks.coreShard, Blocks.coreFoundation, Blocks.coreNucleus];

Events.on(BlockDestroyEvent, event => {
	//print(event.tile.block());
	//print(event.tile.team());
	if(event.tile.block() == "trrestghgytcftgbcxszdcheatdustry-save-ma-baby"){
		//print("triggered");
		Groups.unit.each(u =>
			{
				if (u.team == event.tile.team()) {
					u.kill();
				}
			}
		);
		Groups.build.each(b =>
			{
				if (b.team == event.tile.team() && cores.includes(b.block)) {
					b.kill();
				}
			}
		);
	};
});