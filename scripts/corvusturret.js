const corvusTurret = extend(PowerTurret, "corvus-turret", {
	category: Category.distribution,
	buildVisibility: BuildVisibility.shown,
	health: 60,
	size: 5,
	recoil: 0,
	reload: 350,
	shake: 14,
	shootY: 5,
	moveWhileCharging: false,
	requirements: ItemStack.with(
        Items.copper,0,
        Items.lead,20,
        Items.metaglass,40,
        Items.graphite,40,
        Items.titanium,750+80+20,
        Items.thorium,0,
        Items.silicon,1000+850+130+40+30,
        Items.plastanium,600+650,
        Items.phaseFabric,500,
        Items.surgeAlloy,350,
		Vars.content.item("trrestghgytcftgbcxszdcheatdustry-gerio-alloy"),540
    ),
	shootSound: Sounds.laserblast,
	chargeSound: Sounds.lasercharge,
	shootType: UnitTypes.corvus.weapons.get(0).bullet,
});
corvusTurret.shoot.firstShotDelay = Fx.greenLaserCharge.lifetime;