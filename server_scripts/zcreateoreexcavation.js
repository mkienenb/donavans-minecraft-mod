ServerEvents.recipes(event => {
	
	console.info('createoreexcavation (Loaded server script)');
	
	event.recipes.createoreexcavation.vein('{"text": "My tin vein"}', 'mekanism:raw_tin')
		.placement(1024, 128, 64425186)
		.id("kubejs:my_tin_vein");
		
	console.log('Hello! The recipe eventmekanism:raw_tin has fired!');

	event.recipes.createoreexcavation.vein('{"text": "My lead vein"}', 'mekanism:raw_lead')
		.placement(1024, 128, 6482784)
		.id("kubejs:my_lead_vein");
		
	console.log('Hello! The recipe event mekanism:raw_lead has fired!');

	event.recipes.createoreexcavation.vein('{"text": "My osmium vein"}', 'mekanism:raw_osmium')
		.placement(1024, 128, 62825183)
		.id("kubejs:my_osmium_vein");

	console.log('Hello! The recipe event mekanism:raw_osmium has fired!');
	
	event.recipes.createoreexcavation.vein('{"text": "My uranium vein"}', 'alexscaves:uranium')
		.placement(1024, 128, 6488182)
		.id("kubejs:my_uranium_vein");
		
	console.log('Hello! The recipe event alexscaves:uranium has fired!');
/**
	event.recipes.createoreexcavation.vein('{"text": "My bauxite vein"}', 'immersiveengineering:raw_bauxite')
		.placement(1024, 128, 64088181)
		.id("kubejs:my_bauxite_vein2");
		
	console.log('Hello! The recipe event immersiveengineering:raw_bauxite has fired!');
*/
	event.recipes.createoreexcavation.vein('{"text": "My silver vein"}', 'immersiveengineering:raw_silver')
		.placement(1024, 128, 64033181)
		.id("kubejs:my_silver_vein2");
		
	console.log('Hello! The recipe event immersiveengineering:raw_silver has fired!');

	event.recipes.createoreexcavation.vein('{"text": "My nickel vein"}', 'immersiveengineering:raw_nickel')
		.placement(1024, 128, 64025771)
		.id("kubejs:my_nickel_vein2");
		
	console.log('Hello! The recipe event immersiveengineering:raw_nickel has fired!');

});