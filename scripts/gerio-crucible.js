const gerioCrucible = extend(GenericCrafter, "gerio-crucible",{
	requirements(Category.production, with(
		Items.copper,1000,
		Items.lead,1000,
		Items.metaglass,1000,
		Items.graphite,1000,
		Items.titanium,1000,
		Items.thorium,1000,
		Items.silicon,1000,
		Items.plastanium,1000,
		Items.phaseFabric,1000,
		Items.surgeAlloy,1000
	));
	outputItems: ItemStack.with(Vars.content.item("trrestghgytcftgbcxszdcheatdustry-gerio-alloy"), 1),
	craftTime: 160,
	size: 4;
	hasLiquids = true;
	hasPower = true;
	hasItems = true;

	craftEffect = Fx.none;

	legacyReadWarmup = true;
	drawer = new DrawMulti(
	new DrawRegion("-bottom"),
	new DrawLiquidTile(Liquids.water),
	new DrawDefault(),
	new DrawCultivator(),
	new DrawRegion("-top")
	);
	maxBoost = 2f;

    consumes: {
        items: ItemStack.with(
		Items.copper,10,
		Items.lead,10,
		Items.metaglass,10,
		Items.graphite,10,
		Items.titanium,10,
		Items.thorium,10,
		Items.silicon,10,
		Items.plastanium,10,
		Items.phaseFabric,10,
		Items.surgeAlloy,10
		));
            consumePower(1000f / 60f);
            consumeLiquid(Liquids.water, 18f / 60f);
    }
        });
		// (not) Pure JavaScript Construction After Converting from JSON