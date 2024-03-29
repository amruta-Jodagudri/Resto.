const menuData = [
    {
      name:'Soup - Soup makes everything souper-delicious!',
      items:[
        { name: 'Meat sause soup', price: '$6.99', image:'https://img.freepik.com/free-photo/front-view-meat-sauce-soup-with-greens-potatoes-dark-desk-soup-meal-sauce-meat_140725-79069.jpg?w=740&t=st=1704405371~exp=1704405971~hmac=2f3df195a6263599d658ec7f8c3af2f82a79793130f4137e940f72b4624cab85'},
        { name: 'Hot soup', price: '$6.99', image:'https://img.freepik.com/free-photo/ukrainian-traditional-borsch-isolated-white-surface_1303-24991.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=ais'},
        { name: 'Vegetable soup', price: '$6.99', image:'https://img.freepik.com/free-photo/boiling-cauldron-simmers-hearty-vegetable-soup-recipe-generated-by-ai_188544-10271.jpg?w=740&t=st=1704405740~exp=1704406340~hmac=8c5566b4355cf008bff89b0502ec2f147e83010afdcf44f47da446e63251d97e'},
        { name: 'healthy vege soup', price: '$6.99', image:'https://img.freepik.com/premium-photo/vegetable-soup-healthy-nutrition-healthy-lifestyle-homemade_185193-138098.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Brocoli soup', price: '$6.99', image:'https://img.freepik.com/premium-photo/fresh-broccoli-cream-soup-bowl-healthy-vegetarian-food_996271-12848.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Pumpkin cheese soup', price: '$6.99', image:'https://img.freepik.com/premium-photo/pumpkin-cream-soup-with-eggplant-tofu-cheese-plate-vegetarian-food_207126-10526.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Turkish soup', price: '$6.99', image:'https://img.freepik.com/premium-photo/traditional-delicious-turkish-food-yuvalama-soup-turkish-name-yuvalama-corbasi_693630-15783.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Tomato soup', price: '$6.99', image:'https://img.freepik.com/free-photo/dish-made-from-tomatoes-tasty-tomato-soup_185193-108352.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Chicken soup', price: '$6.99', image:'https://img.freepik.com/premium-photo/wholesome-taco-chicken-soup-served-with-tortilla-chips-utilizing-warm-color-palette_731533-1452.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Seafood soup', price: '$6.99', image:'https://img.freepik.com/premium-photo/seafood-soup-plate-black-slate-background_123827-27331.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Mushrom Soup', price: '$6.99', image:'https://img.freepik.com/premium-photo/chicken-mushroom-soup-chinese-cuisine-isolated-black-background_731533-1278.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Carrot soup', price: '$6.99', image:'https://img.freepik.com/premium-photo/composition-with-carrot-soup-ingredients-herbs-color-wooden-background_392895-193859.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Green creamy soup', price: '$6.99', image:'https://img.freepik.com/premium-photo/green-creamy-spinach-broccoli-soup-gray-concrete-background-healthy-food-diet-top-view_633077-302.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Lemon Tea', price: '$6.99', image:'https://img.freepik.com/free-photo/front-view-cup-tea-with-lemon-white-surface_140725-61577.jpg?w=740&t=st=1704405777~exp=1704406377~hmac=8fb583e1770cd786b26884f3bd8ffe9884b3d2953d05bf2faabeb189315bdf33'},
        { name: 'Ilaichi Tea', price: '$6.99', image:'https://images1.dnaindia.com/images/DNA-EN/900x1600/2023/7/19/1689760181179_teafinal.jpg'},
        { name: 'Green Tea', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIhdqUkiT5VzrZji4xjD8TY_8_31K_Xj_xQ&usqp=CAU'},
      ],
    },
    {
      name:'Snacks - Huuureeyy for Snacks!',
      items:[
        { name: 'Onion Rings', price: '$6.99', image:'https://img.freepik.com/free-photo/onion-rings-served-with-lettuce-sauce_141793-1228.jpg?w=360&t=st=1704403430~exp=1704404030~hmac=8189d5acf7cd27ac848f6e6c44f8317fcd84ba96f5eb9c693251890e8b59a52e'},
        { name: 'Idali-Vada', price: '$6.99', image:'https://img.freepik.com/premium-photo/idli-vada-with-sambar-pr-sambhar-also-called-medu-wada-rice-cake_466689-78755.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=ais'},
        { name: 'Samosa', price: '$6.99', image:'https://img.freepik.com/premium-photo/veg-samosa-is-crispy-spicy-indian-triangle-shape-snack-which-has-crisp-outer-layer-maida-filling-mashed-potato-peas-spices_466689-72896.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Dahi Puri', price: '$6.99', image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661887113/indian-food/indian-food-1120x732.jpg'},
        { name: 'Fried Vada', price: '$6.99', image:'https://img.freepik.com/free-photo/side-view-snack-crunchy-deep-fried-snack-with-sauce-bread-table_141793-5100.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Veg Burger', price: '$6.99', image:'https://img.freepik.com/free-photo/top-view-vegetarian-burgers_1220-55.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Dosa', price: '$6.99', image:'https://img.freepik.com/free-photo/delicious-indian-dosa-composition_23-2149086051.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Cone Dosa', price: '$6.99', image:'https://img.freepik.com/free-photo/crispy-bakery-with-various-sauces_140725-2902.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Uttappa', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvaQlSABLele0CC6htxI3iBw9LDnjD3_w5w&usqp=CAU'},
        { name: 'Pav Bhaji', price: '$6.99', image:'https://img.freepik.com/premium-photo/pav-bhaji-indian-spicy-fast-food-with-bread-onion-butter-indian-food-mumbai-food_466689-68604.jpg?w=360'},
        { name: 'Masala Dosa', price: '$6.99', image:'https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22907.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Sheviya Upma', price: '$6.99', image:'https://as2.ftcdn.net/v2/jpg/05/29/09/75/1000_F_529097521_tK4dfWh255jKUNdlzcFdylgwMahUFbKq.jpg'},
        { name: 'Noodles', price: '$6.99', image:'https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'pasta', price: '$6.99', image:'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Pene Pasta', price: '$6.99', image:'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?w=740&t=st=1704404620~exp=1704405220~hmac=f66839ba4b02157afae39d2b880c94adb40cdec32aee5b1363d055833b5c70d5'},
        { name: 'Moong Vada', price: '$6.99', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2014/01/moong-dal-pakoda-recipe-1.jpg'},
        { name: 'Dumpling Momo', price: '$6.99', image:'https://img.freepik.com/premium-photo/tibetian-dumplings-momo-with-chicken-meat-seafood-vegetables_1472-56712.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Dhokla', price: '$6.99', image:'https://shwetainthekitchen.com/wp-content/uploads/2023/04/instant-khaman-dhokla-recipe.jpg'},
        { name: 'Chicken Wings', price: '$8.99', image: 'https://www.thecookierookie.com/wp-content/uploads/2018/12/baked-chicken-wings-reshoot.jpg' },
        { name: 'Chicken Kabab', price: '$6.99', image:'https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Fries Chicken', price: '$6.99', image:'https://t4.ftcdn.net/jpg/03/31/50/09/240_F_331500924_ctzQKrQ2FFf5QUH1HRZ1nH3VMzkHjkaB.jpg'},
        { name: 'Chicken roll', price: '$6.99', image:'https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Mutton Wrap', price: '$6.99', image:'https://as1.ftcdn.net/v2/jpg/06/11/33/00/1000_F_611330056_9Ri3HwaXHxLlAoh2xJ5gKKQbaYB5haDf.jpg'},
        { name: 'White Dhokla', price: '$6.99', image:'https://static.toiimg.com/thumb/59190882.cms?width=1200&height=900'},
      ],
    },
    {
      name:'Salad - wealth is health!',
      items:[
        { name: 'Salad', price: '$7.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuOrkqMgLmKZpzrV6TKx8B0jdx2cwBROt9Q&usqp=CAU' },
        { name: 'Fruit Salad', price: '$6.99', image:'https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?w=360&t=st=1704402538~exp=1704403138~hmac=9959569daa4b19f3c7a3a08dd95c9a28e4c0032675b5014e440019cc185f557e'},
        { name: 'Paneer Salad', price: '$6.99', image:'https://img.freepik.com/free-photo/top-view-salad-with-feta-cheese-cutting-board_23-2148700461.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Cucumber-penut Salad', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlykvVC8ZYuRXbK6W9ZMA_9SH39dhaxtvmJQ&usqp=CAU'},
        { name: 'Cucumber-tomato Salad', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVzI1pS9AquLUJpbi7TvTsLeN3-ZbvDHs9A&usqp=CAU'},
        { name: 'Mix veggi Salad', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_-5hyAVgbQD6BNqw1l7WS6JZB_I3DQA3yQ&usqp=CAU'},
        { name: 'Creamy Cucumber Salad', price: '$6.99', image:'https://www.recipetineats.com/wp-content/uploads/2019/10/Cucumber-Salad-Mint-Yogurt_1.jpg'},
        { name: 'Korian Salad', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxi7r9QVJostmJof_fabfCKbfgBnr5ntkXA&usqp=CAU'},
        { name: 'sian-Cucumber Salad', price: '$6.99', image:'https://www.wellplated.com/wp-content/uploads/2021/05/Crisp-Asian-Cucumber-Salad.jpg'},
        { name: 'Egg salad', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAESwXHK0-tbyLyzDZqgeUYOfk6LrMg7zt8Q&usqp=CAU'},
        { name: 'Spicy Egg Salad', price: '$6.99', image:'https://media.eggs.ca/assets/RecipeThumbs/_resampled/FillWyIxMjgwIiwiNzIwIl0/Masala-Egg-Kachumber-Salad-CMS.jpg'},
        { name: 'Avacado Salad', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8gDATfZtbPzBUckTxzH66j56RmzoRbvTUw&usqp=CAU'},
      ],
    },
    {
      name:'Chinese - Let’s get saucy with it!',
      items:[
        { name: 'veg Crispy Manchurian', price: '$6.99', image:'https://i.ytimg.com/vi/OObr5GTbgD4/maxresdefault.jpg'},
        { name: 'Manchurian', price: '$6.99', image:'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/07/chicken-manchurian-1.jpg'},
        { name: 'Veg Manchurian', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS09FaPuJrjoeO9JPjeJ2T2GKdGQFSritKIwQ&usqp=CAU'},
        { name: 'Chicken Manchurian', price: '$6.99', image:'https://img.clevup.in/293537/1681468315112_CrispyChicken.jpeg?width=600'},
        { name: 'Schezvan Rice', price: '$6.99', image:'https://www.sharmispassions.com/wp-content/uploads/2014/11/SchezwanFriedRice5.jpg'},
        { name: 'Egg rice', price: '$6.99', image:'https://redhousespice.com/wp-content/uploads/2021/10/Chinese-egg-fried-rice-in-a-bowl-scaled.jpg'},
        { name: 'Fried rice', price: '$6.99', image:'https://www.whiskaffair.com/wp-content/uploads/2018/11/Vegetable-Fried-Rice-2-3.jpg'},
        { name: 'Chinese roll', price: '$6.99', image:'https://img.freepik.com/free-photo/plate-chinese-food-with-bowl-sauce-beef-wrap_188544-8400.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Chinese Noodle', price: '$6.99', image:'https://img.freepik.com/free-photo/noodles-with-beef-vegetables-black-table_141793-1730.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Noodles', price: '$6.99', image:'https://curlytales.com/wp-content/uploads/2019/12/WhatsApp-Image-2019-12-04-at-1.55.49-PM.jpeg'},
        { name: 'Chicken Balls', price: '$6.99', image:'https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/about_us/16.jpg?tr=w-3840'},
        { name: 'Combo', price: '$6.99', image:'https://threebestrated.in/images/RavisFood-Nagpur-MH.jpeg'},
        { name: 'Manchuri Soup', price: '$6.99', image:'https://mypinchofyum.files.wordpress.com/2015/05/chicken-manchow-soupedit.jpg'},
        { name: 'Chicken Manchow soup', price: '$6.99', image:'https://cdn1.foodviva.com/static-content/food-images/soup-recipes/manchow-soup/manchow-soup.jpg'},
        { name: 'Noodle Soup', price: '$6.99', image:'https://cdn.mos.cms.futurecdn.net/vujVqCvBWacUfSuh8DLUvi.jpg'},
        { name: 'Chicken soup', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwAJ1FcDjIO1ESH41iuPvADkyvNeEBS6MzA&usqp=CAU'},
      ],
    },
    {
      name: 'Cafeteria - Brunch vibes!',
      items: [
        { name: 'Burger', price: '$10.99', image: 'https://i.insider.com/5671cf3a72f2c1dd038b624a?width=1000&format=jpeg&auto=webp' },
        { name: 'Full loaded Burger', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX74nE4faLUMLc31cL-7hDSXs-2iAKtYIOkw&usqp=CAU'},
        { name: 'seafood Pizza', price: '$6.99', image:'https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Double cheese Pizza', price: '$6.99', image:'https://img.freepik.com/free-photo/hawaiian-pizza_1203-2455.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Tandoor Pizza', price: '$12.99', image: 'https://img.freepik.com/free-photo/top-view-mixed-pizza-with-tomato-black-olive-melted-cheese_140725-10787.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph' },
        { name: 'Cheese Pizza', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGx9jTSgIkZeLXoXYCMuOn0v1vrOmEwkR0Iw&usqp=CAU'},
        { name: 'Pepporani Pizza', price: '$6.99', image:'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Italian Pizza', price: '$6.99', image:'https://img.freepik.com/free-photo/fried-chicken-with-tomatoes-greens-carrots_141793-720.jpg?w=360&t=st=1704403553~exp=1704404153~hmac=60b120b5f4984fd1511dff3f8b4a937a585d2289e661167627eba0626de3afb2'},
        { name: 'Crispy Pizza', price: '$6.99', image:'https://img.freepik.com/free-photo/crispy-mixed-pizza-with-olives-sausage_140725-3095.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Paneer Pizza', price: '$6.99', image:'https://img.freepik.com/premium-photo/pizza-with-salami-cheese_223675-11.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'French fries', price: '$6.99', image:'https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Masala Fries', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgk4F4MAV8PELZsC3bOMI9ohTILtjs5cAM_T6OyDPFRXnEcXjOHTxv7Hafqywhtzz_UCA&usqp=CAU'},
        { name: 'Cheese Sandwitch', price: '$6.99', image:'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Veg Grill', price: '$6.99', image:'https://b.zmtcdn.com/data/reviews_photos/206/f49cd7916fa00e92120f35a8141c3206_1584157356.jpg'},
        { name: 'Sandwtch', price: '$6.99', image:'https://3.imimg.com/data3/AV/IW/MY-4078578/cheese-veg-san-250x250.png'},
        { name: 'Waffles', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1X-hViNSblT-vxDNYjXem2UZUk2d7wKkVw&usqp=CAU'},
        { name: 'Red sauce Pasta', price: '$6.99', image:'https://imgmedia.lbb.in/media/2019/11/5dc6754b83ef81923c024b79_1573287243434.jpg'},
        { name: 'White sauce Pasta', price: '$6.99', image:'https://imgmedia.lbb.in/media/2019/09/5d723a3de376894b2cce32a6_1567767101471.jpg'},
        { name: 'Chicken Nuggets', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-2g2sp5kYfJfOJ6m4TDBOnVXOspky119tQ&usqp=CAU'},
        { name: 'Cheese Toast', price: '$6.99', image:'https://www.girish-joshi.com/wp-content/uploads/2022/02/cafe_bistro_restaurant_food_photographers_0015.jpg'},
        { name: 'Garlic Bread', price: '$6.99', image:'https://b.zmtcdn.com/data/pictures/chains/8/20448098/b005f59f48982669cb89e509125c162e.jpeg?fit=around|750:500&crop=750:500;*,*'},
        { name: 'Nuggets', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3JJSTmeRzU75OrkRCVdjdAR91W4oXFdMRQ&usqp=CAU'},
        { name: 'Cheese Nuggets', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbcecFtFYIwJY3RWay3iQrmAgBVgKvNvazA&usqp=CAU'},
        { name: 'Cheese Balls', price: '$6.99', image:'https://www.seriouseats.com/thmb/SpE3rWRxVi7INH1VstxGClkdmAE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__04__20200416-chicken-nuggets-tim-chin-5-eeb817c772bc4a5c884d088abd85d13f.jpg'},
        { name: 'Hot Coffee', price: '$6.99', image:'https://www.acouplecooks.com/wp-content/uploads/2021/08/Cafe-Au-Lait-001s.jpg'},
        { name: 'Coffee', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLevD4edy8cD0uhbm2e_HKfkVY2iHmH6iygQ&usqp=CAU'},
        { name: 'Cold Coffee', price: '$6.99', image:'https://www.cookwithmanali.com/wp-content/uploads/2022/04/Cold-Coffee.jpg'},
        { name: 'Choco Craze Coffee', price: '$6.99', image:'https://static.toiimg.com/thumb/53859488.cms?imgsize=150956&width=800&height=800'},
      ],
    },
    {
      name: 'Main Courses - Curries a passport to flavor paradise!',
      items: [
        { name: 'Dal Makhani', price: '$6.99', image:'https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Paneer Curry', price: '$6.99', image:'https://img.freepik.com/premium-photo/paneer-curry_57665-13664.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Shahi Paneer', price: '$6.99', image:'https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Paneer Gravy', price: '$6.99', image:'https://img.freepik.com/premium-photo/paneer-curry_57665-13672.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Saag Paneer', price: '$6.99', image:'https://img.freepik.com/premium-photo/saag-paneer-curry-dish-traditional-indian-food_928112-1257.jpg?w=740'},
        { name: 'Palak Paneer', price: '$6.99', image:'https://img.freepik.com/free-photo/top-view-pakistani-food-arrangement_23-2148825109.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=ais'},
        { name: 'Masala Paneer Cheese', price: '$6.99', image:'https://as1.ftcdn.net/v2/jpg/04/70/91/94/1000_F_470919421_ebtaXCpioWijKocWbQAG4nd5thEJxAX9.jpg'},
        { name: 'Panner tikka Paneer', price: '$6.99', image:'https://s3.amazonaws.com/static.realcaliforniamilk.com/media/recipes_2/paneer-tikka-masala.jpg'},
        { name: 'Shahi Kaju Curry', price: '$6.99', image:'https://i.ytimg.com/vi/2dMgG6ev_7I/maxresdefault.jpg'},
        { name: 'Chole Masala', price: '$6.99', image:'https://img.freepik.com/premium-photo/indian-dish-spicy-chick-peas-curry-also-known-as-chola-chana-masala-commonly-chole-served-served-with-fried-puri-poori-colourful-wooden-background-selective-focus_466689-67292.jpg?w=360'},
        { name: 'Chickpea Chana Masala', price: '$6.99', image:'https://img.freepik.com/free-photo/vertical-shot-chickpea-curry-chana-masala-with-lime-bowl-white-surf_181624-31989.jpg?w=360&t=st=1704404917~exp=1704405517~hmac=8ae174f39dd0f8dba451859804a7ca77a8ba1befdc20c1f2b4ecda684eacb920'},
        { name: 'Carrot Gravy', price: '$6.99', image:'https://img.freepik.com/premium-photo/carrot-curry-garar-gravy-sabzi-made-using-tomato-puree-spices-served-bowl_466689-3665.jpg?size=626&ext=jpg'},
        { name: 'Mix Veg', price: '$6.99', image:'https://img.freepik.com/premium-photo/mix-vegetable-curry-indian-main-course-recipe-contains-carrots-cauliflower-green-peas-beans-baby-corn-capsicum-paneer-cottage-cheese-with-traditional-masala-curry_466689-35432.jpg'},
        { name: 'Kaju Masala', price: '$6.99', image:'https://thesanskruti.com/wp-content/uploads/2020/05/Kaju-butter-masala-Kaju-curry.jpg'},
        { name: 'malai Kofta Curry', price: '$6.99', image:'https://i.pinimg.com/236x/1a/64/0f/1a640fe19adc2327eb760c5a067dddb2.jpg'},
        { name: 'Gobi Masala', price: '$6.99', image:'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/cauliflower-curry-recipe.jpg'},
        { name: 'Sweet corn curry', price: '$6.99', image:'https://www.nehascookbook.com/wp-content/uploads/2022/11/Corn-curry-WS-480x270.jpg'},
        { name: 'Veg Kofta Curry', price: '$6.99', image:'https://shwetainthekitchen.com/wp-content/uploads/2014/10/DSC_0750.jpg'},
        { name: 'Butter kaju gravy', price: '$6.99', image:'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Kaju_Butter_Masala.jpg'},
        { name: 'Cheese Kaju Masala', price: '$6.99', image:'https://1.bp.blogspot.com/-2kK5IjfUclY/YDxpTfFxKKI/AAAAAAAAJYA/FsZ7URMtKdkF7uVoffALkI8iWqfQwKwTgCLcBGAsYHQ/s1920/IMG_0074.JPG'},
        { name: 'Rajma', price: '$6.99', image:'https://img.freepik.com/premium-photo/traditional-mexican-dish-chili-con-carne_82893-11183.jpg?w=360'},
        { name: 'Veg Haidrabadi', price: '$6.99', image:'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Vegetables_Dry/Mixed_Kadai_Vegetable_Sabzi_North_Indian_Recipe-20.jpg'},
        { name: 'Veg Kadai', price: '$6.99', image:'https://www.vegrecipesofindia.com/wp-content/uploads/2021/08/veg-kadai-3.jpg'},
        { name: 'Veg Diwani Handi', price: '$6.99', image:'https://i.ytimg.com/vi/9gOCDgbXbdo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBCvkOXB1nBBh13MWNJS0Csn1QrnQ'},
      ],
    },
    {
      name:'Non-Veg - always in demand!',
      items:[
        { name: 'Egg Paratha', price: '$6.99', image:'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347392/india-food-paratha/india-food-paratha-1120x732.jpg'},
        { name: 'Egg Curry', price: '$6.99', image:'https://img.freepik.com/free-photo/green-curry-with-eggs-black-cups-with-lemon-lemongrass-chili-tomatoes_1150-25746.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=ais'},
        { name: 'Fried Chicken', price: '$6.99', image:'https://img.freepik.com/free-photo/fried-chicken-with-tomatoes-greens-carrots_141793-720.jpg?w=360&t=st=1704403553~exp=1704404153~hmac=60b120b5f4984fd1511dff3f8b4a937a585d2289e661167627eba0626de3afb2'},
        { name: 'Half Egg fry', price: '$6.99', image:'https://as2.ftcdn.net/v2/jpg/06/44/49/47/1000_F_644494712_6gnDQZrBoSEgsVD8oJwMGvMatkpn5ipG.jpg'},
        { name: 'Butter Chicken', price: '$6.99', image:'https://img.freepik.com/premium-photo/butter-chicken_466689-54451.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=ais'},
        { name: 'Baked ', price: '$6.99', image:'https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=ais'},
        { name: 'Thai Curry', price: '$6.99', image:'https://img.freepik.com/free-photo/massaman-curry-frying-pan-with-spices-cement-floor_1150-20777.jpg?w=740&t=st=1704405277~exp=1704405877~hmac=0f0a6503103988ee23389b6b02ad6a5001c5b8243d5c2ee5524ecf0d97c34ac6'},
        { name: 'Egg Masala', price: '$6.99', image:'https://t3.ftcdn.net/jpg/03/00/06/56/240_F_300065634_NFc2jb0k2xMkSyZBdX6laPcwOHLpqRy3.jpg'},
        { name: 'Chicekn Curry', price: '$6.99', image:'https://t4.ftcdn.net/jpg/00/83/06/97/240_F_83069741_iVetS3sMFalKuYI9y103nPAtX5NiUwc2.jpg'},
        { name: 'shish kabab', price: '$6.99', image:'https://img.freepik.com/free-photo/hands-holding-shish-kebab-with-colorful-bell-peppers_141793-2931.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'chicken Kabab', price: '$6.99', image:'https://img.freepik.com/free-photo/side-view-chicken-kebab-lavash-served-with-fresh-herbs-onion-adjika-sauce_141793-2957.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Butter Chicken Curry', price: '$6.99', image:'https://as1.ftcdn.net/v2/jpg/01/42/27/16/1000_F_142271660_UxH5v5ibDYrqI5Hj7F6UdOD0MnMHuDjF.jpg'},
        { name: 'Chicken tikka Masala', price: '$6.99', image:'https://t3.ftcdn.net/jpg/02/29/39/34/240_F_229393457_LGaJHVGBn04k84lX5tuJ9bi1FQhffUxq.jpg'},
        { name: 'Arabic shaurma', price: '$6.99', image:'https://img.freepik.com/free-photo/arabic-shaurma-with-sauce-wooden-board_114579-3164.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Chicken Tandoor', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCU_26_nWF5ONmrSwVR1W-uRROscazcVYMeTt2R-GYH4RWSSs0zALUVLfVZ-Dira5eIdc&usqp=CAU'},
        { name: 'Chicken Curry', price: '$6.99', image:'https://i0.wp.com/www.valerieskeepers.com/wp-content/uploads/2015/03/Indian-Chicken-curry-2.jpg'},
      ],
    },
    {
      name:'Thali - Let the thali wars begin!',
      items:[
        
        { name: 'Chapati Bhaji', price: '$6.99', image:'https://img.freepik.com/free-photo/indian-delicious-roti-with-copy-space_23-2149073355.jpg?w=360&t=st=1704407317~exp=1704407917~hmac=3bab47c823a4333d1e52dc296745c567ee6dc8d4cadeb6a47c4dfb3611e4c326'},
        { name: 'Kerala Thali', price: '$6.99', image:'https://static.toiimg.com/thumb/imgsize-23456,msid-79065076,width-600,resizemode-4/79065076.jpg'},
        { name: 'Malvani Veg Thali', price: '$6.99', image:'https://img.freepik.com/free-photo/closeup-shot-indian-tasty-food-called-marwari-veg-thali-wooden-table_181624-58043.jpg?w=740&t=st=1704407018~exp=1704407618~hmac=74944cba9f750b63a0eb38c959278a3b4829a0bcc74204ceaace18fdf21c05e3'},
        { name: 'Mutton Thali', price: '$6.99', image:'https://i.pinimg.com/736x/d9/02/53/d9025361cf334e7a1e3bf185e07557c1.jpg'},
        { name: 'Butter Chicken Thali', price: '$6.99', image:'https://img.freepik.com/premium-photo/indian-gavkari-chicken-thali-food-platter-consists-variety-veggieschicken-meat-lentilsrice-sweet-dish-snacks-etc-selective-focus_726363-583.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=ais'},
        { name: 'Special Thali', price: '$6.99', image:'https://img.freepik.com/premium-photo/indian-mini-meal-parcel-platter-combo-thali-with-chole-masala-roti-dal-tarka-jeera-rice-salad_466689-87300.jpg?size=626&ext=jpg'},
        { name: 'Punjabi Thali', price: '$6.99', image:'https://en-media.thebetterindia.com/uploads/2016/08/bihari-litti-sabzi.jpg'},
        { name: 'Veg Thali', price: '$6.99', image:'https://static.toiimg.com/photo/61275846.cms'},
        { name: 'Maharastrian Thali', price: '$6.99', image:'https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-85130749/85130749.jpg'},
        { name: 'Big Meal Thali', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SHLyad_FvJ3Ew-4LKXh9bhLXiLxbekr2_w&usqp=CAU'},
        { name: 'North Indian Thali', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3tUtTVdQXUaoFtHWA3GtCYvKBS54Zd_7PajP9wsACKKozQr3cuMtipnBSn294g0sCyM&usqp=CAU'},
        { name: 'Diet Balanced Thali', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AUG6_7x8NZCvj7pU0VnI95CkHJiYesPBCF237k-DxnYUO-tp3F89Bh17HnDLlrGbZBs&usqp=CAU'},
      ]
    },
    {
      name:'Tandoori - golden circles of joy!',
      items:[
        { name: 'Paratha', price: '$6.99', image:'https://img.freepik.com/free-photo/close-up-bread-cooked-indian-style_23-2148294972.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Roti', price: '$6.99', image:'https://img.freepik.com/free-photo/delicious-arrangement-traditional-roti_23-2149034001.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Ghee Naan', price: '$6.99', image:'https://img.freepik.com/free-photo/pakistani-food-cloth-flat-lay_23-2148825098.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Aloo paratha', price: '$6.99', image:'https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76172.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Fulka', price: '$6.99', image:'https://ministryofcurry.com/wp-content/uploads/2020/01/roti-1-scaled.jpg'},
        { name: 'Naan', price: '$6.99', image:'https://as1.ftcdn.net/v2/jpg/06/46/02/00/1000_F_646020073_55VM4CJC0fAK4LpY1qHjgkrmyF11VTWW.jpg'},
        { name: 'Roti Paratha', price: '$6.99', image:'https://www.rotinrice.com/wp-content/uploads/2011/04/RotiCanai-1.jpg'},
        { name: 'Makki Roti', price: '$6.99', image:'https://static.toiimg.com/thumb/56097918.cms?width=1200&height=900'},
        { name: 'Tandoori Roti', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlL8hUv_1-UEYlOy_gqEcEh81uU2Ss6hcocQ&usqp=CAU'},
        { name: 'Palak Missi Roti', price: '$6.99', image:'https://i0.wp.com/onewholesomemeal.com/wp-content/uploads/2020/04/IMG_4649-2455.jpg?fit=864%2C1080&ssl=1'},
        { name: 'Tandoor Roti', price: '$6.99', image:'https://www.cookingcarnival.com/wp-content/uploads/2020/05/Tandoori-roti-7.jpg'},
        { name: 'Kulcha Paratha', price: '$6.99', image:'https://i0.wp.com/eatwkriss.com/wp-content/uploads/2021/04/roti-canai-2.jpg?w=1000&ssl=1'},
        { name: 'Naan', price: '$6.99', image:'https://rainbowplantlife.com/wp-content/uploads/2021/09/updated-naan-photo-for-cover-image-1-of-1-1.jpg'},
        { name: 'Onion Naan', price: '$6.99', image:'https://www.kitchensanctuary.com/wp-content/uploads/2021/03/Garlic-Naan-square-FS-42-500x375.jpg'},
        { name: 'Garlic Naan', price: '$6.99', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Zh2zjHo9sCwle5c73o5m6Gq1bF3eOnQzKw&usqp=CAU'},
        { name: 'Paneer Paratha', price: '$6.99', image:'https://i.ndtvimg.com/i/2018-05/aloo-ka-paratha_650x400_61525766113.jpg'},
      ],
    },
    {
      name: 'Rice,Biryani - it has its own fan club!',
      items: [
        { name: 'Plain Rice', price: '$6.99', image:'https://t4.ftcdn.net/jpg/02/14/62/13/240_F_214621356_X8scxpnwYwR3Je01CvH4YtMxF1a2b7Jz.jpg'},
        { name: 'Jeera Rice', price: '$6.99', image:'https://t4.ftcdn.net/jpg/02/27/94/25/240_F_227942515_opgu7LNd0VI4CX7ddZ09XJ9bRLUc8kOn.jpg'},
        { name: 'Spicy Rice', price: '$6.99', image:'https://img.freepik.com/premium-photo/brow-rice-spicy-asian-food-with-vegetable-chopstic-wooden_37803-672.jpg?w=740'},
        { name: 'Ghee Rice', price: '$6.99', image:'https://img.freepik.com/premium-photo/traditional-pilaf-with-meat-boiled-fruits_236836-1524.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Fried Rice', price: '$6.99', image:'https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=ais'},
        { name: 'Veg Biryani', price: '$6.99', image:'https://img.freepik.com/premium-photo/indian-vegetable-pulav-biryani-made-using-basmati-rice-served-terracotta-bowl-selective-focus_466689-55615.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Tomato Rice', price: '$6.99', image:'https://t3.ftcdn.net/jpg/05/96/03/14/240_F_596031485_M7iKECYGz6REI6ajfjTFMGK43rT50yCv.jpg'},
        { name: 'Veg Pulav', price: '$6.99', image:'https://t4.ftcdn.net/jpg/06/78/47/65/240_F_678476549_MlaXDVL3vNl4LYevUkzNv2mxq3Hk6iO6.jpg'},
        { name: 'Tamraind Rice', price: '$6.99', image:'https://as2.ftcdn.net/v2/jpg/05/07/96/53/1000_F_507965361_vZNtYoglr9IyJkN4EpK9i4ydqOpSCYLc.jpg'},
        { name: 'Veg Pulav', price: '$6.99', image:'https://img.freepik.com/premium-photo/tawa-pulao-pulav-pilaf-pilau-is-indian-street-food-made-using-basmati-rice-vegetables-spices-selective-focus_466689-70778.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=sph'},
        { name: 'Friedd Onion Rice', price: '$6.99', image:'https://cdn.pixabay.com/photo/2016/01/15/10/56/biryani-1141444_1280.jpg'},
        { name: 'Chicken Biryani', price: '$6.99', image:'https://img.freepik.com/premium-photo/biryani-with-chicken-potatoes-any-many-other-spices_162831-22.jpg?w=740'},
        { name: 'Chicken Rice', price: '$6.99', image:'https://img.freepik.com/free-photo/side-view-multi-colored-rice-with-grilled-chicken-wing-pumpkin-seeds-top_141793-5026.jpg?w=740&t=st=1704430308~exp=1704430908~hmac=e676d4754de55e0e989294336af9a787c9a3c69478249e21498c766bd3f7f8cb'},
        { name: 'Egg Biryani', price: '$6.99', image:'https://c.ndtvimg.com/2020-01/n54baas8_egg-biryani_625x300_24_January_20.jpg'},
        { name: 'Kachchi Chicken Biryani', price: '$6.99', image:'https://t3.ftcdn.net/jpg/04/51/16/64/240_F_451166450_ptaMRfy9nop3rq82IBYnAozMrdn1BeTA.jpg'},
        { name: 'Chicken Biryani', price: '$6.99', image:'https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52414.jpg?size=626&ext=jpg&ga=GA1.1.428851822.1688816699&semt=ais'},
        { name: 'Chicken Biryani', price: '$6.99', image:'https://as2.ftcdn.net/v2/jpg/05/07/96/55/1000_F_507965503_r5uh4RznaAWwL3JaWSteNXfnBTCIVpJs.jpg'},
        { name: 'Brown Rice', price: '$6.99', image:'https://cdn.pixabay.com/photo/2016/03/05/22/29/asian-1239294_640.jpg'},
        { name: 'Vegge Rice', price: '$6.99', image:'https://media.istockphoto.com/id/1188150412/photo/fried-rice-with-vegetables-asian-food.jpg?s=612x612&w=0&k=20&c=lzMMdLpiLbNS05AhvdBshQ4HlOeATUZp7htZIz4TFmY='},
        { name: 'Paneer Pulav', price: '$6.99', image:'https://media.istockphoto.com/id/1700258788/photo/paneer-pulao-served-with-raita-and-onion-lemon.jpg?s=612x612&w=0&k=20&c=hgyNICoa6ivPYlAseZbu_HuNy8wQUoxlnoxgIV15V1c='},
      ],
    },
    {
      name:'Dessarts - cherry on top of a great meal!',
      items:[
        { name: 'Kulfi', price: '$6.99', image:'https://i.pinimg.com/236x/94/ed/31/94ed3133c54e704652636ec3adee45d0.jpg'},
        { name: 'Baozi bun', price: '$6.99', image:'https://img.freepik.com/premium-photo/baozi-chinese-steamed-buns-is-type-yeastleavened-filled-bun-various-chinese-cuisines_464898-5134.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Sweet Barfi', price: '$6.99', image:'https://img.freepik.com/premium-photo/pakistani-sweets-food-photography_849906-16532.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Colorful Mochi', price: '$6.99', image:'https://img.freepik.com/premium-photo/delicious-sweet-colorful-mochi-desserts-ice-cream-with-rice-dough-toppings-dark-concrete-background_73989-47043.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Cup cakes', price: '$6.99', image:'https://img.freepik.com/premium-photo/photo-moon-cakes-wooden-table_795610-1298.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'coconut balls', price: '$6.99', image:'https://img.freepik.com/free-photo/homemade-coconut-balls-decorated-with-little-pink-flowers_501050-29.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Mithai', price: '$6.99', image:'https://img.freepik.com/premium-photo/indian-assorted-sweet-mithai-barfi-group_466689-85117.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Halwa Barfi', price: '$6.99', image:'https://img.freepik.com/premium-photo/singhara-barfi-singhada-burfi-halwa-made-using-water-chestnut-flour-fasting-upwas-food_466689-87931.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Donuts', price: '$6.99', image:'https://img.freepik.com/free-photo/delicious-donuts-with-topping-arrangement_23-2150705323.jpg?ga=GA1.1.428851822.1688816699'},
        { name: 'Jalebi', price: '$6.99', image:'https://cdn.pixabay.com/photo/2015/06/23/05/23/fresh-jalebi-818316_640.jpg'},
        { name: 'RasMalai', price: '$6.99', image:'https://i.pinimg.com/236x/bc/cb/df/bccbdfd18165cc1242e25edfb593aeab.jpg'},
        { name: 'RasGulla', price: '$6.99', image:'https://i.pinimg.com/236x/ad/94/41/ad94413b5c3610fe0a2576ecc1853eed.jpg'},
        { name: 'Gulam Jamun', price: '$6.99', image:'https://i.pinimg.com/236x/25/f0/30/25f030dbc6a7c7d7b7cc238f7baf0379.jpg'},
        { name: 'Bondi ball', price: '$6.99', image:'https://i.pinimg.com/236x/30/2d/b2/302db249ff9043d05839e33b8609ece2.jpg'},
        { name: 'Modak', price: '$6.99', image:'https://i.pinimg.com/236x/ee/e6/86/eee6868430aae38c50bea803038a290d.jpg'},
        { name: 'Shevaya kheer', price: '$6.99', image:'https://i.pinimg.com/236x/71/41/c9/7141c9d283d0da8d60968e9c197b58fd.jpg'},
      ],
    },
  ];
  
  export default menuData;
  