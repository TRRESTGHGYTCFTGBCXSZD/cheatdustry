const requireloadfail = []

function protectedrequire(loader){
	try {
		return require(loader)
	} catch(yon) {
		Core.bundle.debug('Geriodustry / '.concat(loader,' Has Failed To Load!','\n',yon));
	};
	return null
}

protectedrequire('items-before-json')
protectedrequire('super-cheat/lib')
protectedrequire('super-cheat/invincible-walls')
//require('puzzloop-balls')
//require('save-ma-baby')
protectedrequire('antumbra-core')
protectedrequire('corvusturret')
