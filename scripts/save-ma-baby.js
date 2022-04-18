const puzzloopgirlfriend = extend(Block, "save-ma-bab", {
	load() {
		this.super$load();
	}
    @Override
    public void onDestroyed(){
        super.onDestroyed();
 
        Groups.unit.each(u => u.team == this.team, u.kill());
        Groups.build.each(b => b.team == this.team && cores.contains(b.block), b.kill());
    }
});