const data = {
	10154480 : {
		"layer": 680,
		"chain": "PostProcess_01.PPC.S1_AssassinAwaken00_PPC"
	},
	300800 : {
		"layer": 640,
		"chain": "PostProcess.PPC.S1_Spirit00_PPC"
	},
	300801: {
		"layer": 640,
		"chain": "PostProcess.PPC.S1_Spirit00_PPC"
	},
	300805: {
		"layer": 640,
		"chain": "PostProcess.PPC.S1_Spirit00_PPC"
	},
	10155130: {
		"layer": 820,
		"chain": "PostProcess.PPC.S1_Glaiver_PPC"
	},
	10152340 : {
		"layer": 680,
		"chain": "PostProcess.PPC.S1_BeamPanel00_PPC"
	},
	602101: {
		"layer": 680,
		"chain": "PostProcess_01.PPC.S1_ArcherVeteran00_PPC"
	},
	602221: {
		"layer": 680,
		"chain": "PostProcess_01.PPC.S1_ArcherVeteran00_PPC"
	}
}

function CleanSteroids(mod) {
	
	mod.hook("S_ABNORMALITY_BEGIN", 5, { "order": -999999999, "filter": { "fake": null } }, (event) => {
		if(!mod.game.me.is(event.target)) return;
		if(!data[event.id]) return;
		
		const objItem = data[event.id];
		
		mod.send("S_POST_PROCESS", 1, { 
			"enabled": false,
			"slot": objItem.layer,
			"name": objItem.chain
		});

		mod.setTimeout(()=> {
			mod.send("S_POST_PROCESS", 1, { 
				"enabled": false,
				"slot": objItem.layer,
				"name": objItem.chain
			})
		}, 25);

		mod.setTimeout(()=> {
			mod.send("S_POST_PROCESS", 1, { 
				"enabled": false,
				"slot": objItem.layer,
				"name": objItem.chain
			})
		}, 60);
	});
}

exports.NetworkMod = CleanSteroids;