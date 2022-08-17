const { use } = require('express/lib/application');
const restaurantDB = require('./databases/restrauntsDataBase/dishesDataBase.js');

const restraunt = restaurantDB.getModel();

(async() => {

	await restraunt.deleteMany({});

	let restaurant1 = new restraunt({	
		restaurantId:1,
		email:'dominos@us.com',
		restaurantName:'Dominos Pizza',
		restaurantAbbrName:'DP',
		address:'412 Washington Street, MA 02134',
		phone:'123-456-9078',
		openStatus:'open',
		deliveryTime:'30',
		rateValue:3.9,
		foodType:'Non-Veg',
		origin:'American',
		imagePath:'dominos.jpeg'
}); 

	let restaurant2 = new restraunt({	
					restaurantId:2,
					email:'rogrady7@gmail.com',
					restaurantName:'Tawakal Halal Cafe',
					restaurantAbbrName:'THC',
					address:'389 Maverick St. Boston, MA 02128',
					phone:'(617) 418-5890',
					openStatus:'open',
					deliveryTime:'30',
					rateValue:3.2,
					foodType:'Non-Veg',
					origin:'African',
					imagePath:'tawakal.jpg'
					}); 

    let restaurant3 = new restraunt({	
						restaurantId:3,
						email:'vligoeb@huffingtonpost.com',
						restaurantName:"Gene's Chinese Flatbread Cafe",
						restaurantAbbrName:'GCF',
						address:'86 Bedford St Boston, MA 02111',
						phone:'(617) 418-5890',
						openStatus:'open',
						deliveryTime:'30',
						rateValue:4.6,
						foodType:'Non-Veg',
						origin:'Chinese',
						imagePath:'genes.jpg'
						}); 
					



	await Promise.all([
		restaurant1.save(), 
		restaurant2.save(),
		restaurant3.save()
		]);

	let currentRestaurants = await restraunt.find({});

	console.log(currentRestaurants);

	process.exit();


})();












