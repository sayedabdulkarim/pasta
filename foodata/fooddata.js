//images

//appetizer
import appetizer1 from '../swiggyimg/appetizer1.webp'
import appetizer2 from '../swiggyimg/appetizer2.webp'
import appetizer3 from '../swiggyimg/appetizer3.webp'
import appetizer4 from '../swiggyimg/appetizer4.png'
import appetizer5 from '../swiggyimg/appetizer5.webp'
import appetizer6 from '../swiggyimg/appetizer6.webp'
import appetizer7 from '../swiggyimg/appetizer7.jpg'
import appetizer8 from '../swiggyimg/appetizer8.jpg'
import appetizer9 from '../swiggyimg/appetizer9.jpg'
import appetizer10 from '../swiggyimg/appetizer10.jpg'
import appetizer11 from '../swiggyimg/appetizer11.jpg'
import appetizer12 from '../swiggyimg/appetizer12.jpg'
import appetizer13 from '../swiggyimg/appetizer13.jpg'
import appetizer14 from '../swiggyimg/appetizer14.jpg'
import appetizer15 from '../swiggyimg/appetizer15.jpg'
import appetizer16 from '../swiggyimg/appetizer16.webp'
import appetizer17 from '../swiggyimg/appetizer17.webp'
import appetizer18 from '../swiggyimg/appetizer18.jpg'
import appetizer19 from '../swiggyimg/appetizer19.webp'
import appetizer20 from '../swiggyimg/appetizer20.jpg'
import appetizer21 from '../swiggyimg/appetizer21.jpg'
import appetizer22 from '../swiggyimg/appetizer22.webp'
import appetizer23 from '../swiggyimg/appetizer23.jpg'
import appetizer24 from '../swiggyimg/appetizer24.webp'

//soup
import soup1 from '../swiggyimg/soup1.webp'
import soup2 from '../swiggyimg/soup2.jpg'
import soup3 from '../swiggyimg/soup3.jpeg'
import soup4 from '../swiggyimg/soup4.webp'
import soup5 from '../swiggyimg/soup5.jpg'
import soup6 from '../swiggyimg/soup6.webp'
import soup7 from '../swiggyimg/soup7.jpg'
import soup8 from '../swiggyimg/soup8.jpg'
import soup9 from '../swiggyimg/soup9.jpg'

//pizza
import pizza1 from '../swiggyimg/pizza1.webp'
import pizza2 from '../swiggyimg/pizza2.webp'
import pizza3 from '../swiggyimg/pizza3.webp'
import pizza4 from '../swiggyimg/pizza4.webp'
import pizza5 from '../swiggyimg/pizza5.jpg'
import pizza6 from '../swiggyimg/pizza6.jpg'
import pizza7 from '../swiggyimg/pizza7.jpg'
import pizza8 from '../swiggyimg/pizza8.jpg'
import pizza9 from '../swiggyimg/pizza9.jpg'
import pizza10 from '../swiggyimg/pizza10.jpg'

//pasta
import pasta1 from '../swiggyimg/pasta1.webp'
import pasta2 from '../swiggyimg/pasta2.jpg'
import pasta3 from '../swiggyimg/pasta3.jpg'
import pasta4 from '../swiggyimg/pasta4.jpg'
import pasta5 from '../swiggyimg/pasta5.jpg'
import pasta6 from '../swiggyimg/pasta6.jpg'
import pasta7 from '../swiggyimg/pasta7.webp'
import pasta8 from '../swiggyimg/pasta8.webp'
import pasta9 from '../swiggyimg/pasta9.webp'
import pasta10 from '../swiggyimg/pasta10.jpg'

//grill
import grill1 from '../swiggyimg/grill1.webp'
import grill2 from '../swiggyimg/grill2.webp'
import grill3 from '../swiggyimg/grill3.jpg'
import grill4 from '../swiggyimg/grill4.jpg'
import grill5 from '../swiggyimg/grill5.jpg'
import grill6 from '../swiggyimg/grill6.jpg'

//desert
import desert1 from '../swiggyimg/desert1.jpg'
import desert2 from '../swiggyimg/desert2.webp'
import desert3 from '../swiggyimg/desert3.webp'
import desert4 from '../swiggyimg/desert4.webp'
import desert5 from '../swiggyimg/desert5.jpg'
import desert6 from '../swiggyimg/desert6.webp'
import desert7 from '../swiggyimg/desert7.jpg'
import desert8 from '../swiggyimg/desert8.jpg'
import desert9 from '../swiggyimg/desert9.webp'
import desert10 from '../swiggyimg/desert10.jpg'

//////////////////////////////////////////////////////

//mocktail
import mocktail1 from '../swiggyimg/mocktail1.webp'
import mocktail2 from '../swiggyimg/mocktail2.webp'
import mocktail3 from '../swiggyimg/mocktail3.webp'
import mocktail4 from '../swiggyimg/mocktail4.jpg'
import mocktail5 from '../swiggyimg/mocktail5.jpg'
import mocktail6 from '../swiggyimg/mocktail6.webp'
import mocktail7 from '../swiggyimg/mocktail7.webp'
import mocktail8 from '../swiggyimg/mocktail8.webp'
import mocktail9 from '../swiggyimg/mocktail9.jpg'
import mocktail10 from '../swiggyimg/mocktail10.webp'

//beverage
import beverage1 from '../swiggyimg/beverage1.webp'
import beverage2 from '../swiggyimg/beverage2.webp'
import beverage3 from '../swiggyimg/beverage3.webp'
import beverage4 from '../swiggyimg/beverage4.jpg'
import beverage5 from '../swiggyimg/beverage5.jpg'
import beverage6 from '../swiggyimg/beverage6.webp'
import beverage7 from '../swiggyimg/beverage7.jpg'
import beverage8 from '../swiggyimg/beverage8.webp'

//tea
import coffee1 from '../swiggyimg/coffee1.webp'
import coffee2 from '../swiggyimg/coffee2.jpg'
import coffee3 from '../swiggyimg/coffee3.jpg'
import coffee4 from '../swiggyimg/coffee4.jpg'
import coffee5 from '../swiggyimg/coffee5.jpg'
import coffee6 from '../swiggyimg/coffee6.jpg'
import coffee7 from '../swiggyimg/coffee7.jpg'
import coffee8 from '../swiggyimg/coffee8.jpg'


export const foodData = {
  appetizer: [
    {
      id: 1,
      title: "Garlic Bread",
      price: 175,
      info:
        "Classic garlic & herb buttered bread with cheddar & mozzarella cheese...",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer1}`,
      count: 0,
      total: 0
    },
    {
      id: 2,
      title: "Cheesy Bread",
      price: 220,
      info:
        "Garlic bread topped with cheddar & mozzarella cheese.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer2}`,
      count: 0,
      total: 0
    },
    {
      id: 3,
      title: "Tomato Bruschetta",
      price: 245,
      info:
        "Toasted ciabatta bread slices with garlic, fresh basil, topped with tomato cubes marinated in Italian herbs and olive oil.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer3}`,
      count: 0,
      total: 0
    },
    {
      id: 4,
      title: "Hot Chilli Bread",
      price: 245,
      info:
        "Garlic bread topped with pepper sauce and chilli flakes, smothered with cheese and boosted with jalapeno peppers.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer4}`,
      count: 0,
      total: 0
    },
    {
      id: 5,
      title: "Pesto-Garlic Bread",
      price: 275,
      info:
        "Garlic bread topped with a combination of pesto sauce and cheese.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer5}`,
      count: 0,
      total: 0
    },
    {
      id: 6,
      title: "Cheese Crostini",
      price: 285,
      info:
        "Classic Italian appetizer – slices of baked bread topped with tomato sauce, melted cheese and Italian herbs.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer6}`,
      count: 0,
      total: 0
    },
    {
      id: 7,
      title: "M.O.P.",
      price: 295,
      info:
        "Ciabatta bread covered in tomato sauce and topped with mushroom, onion, peppers and melted cheese.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer7}`,
      count: 0,
      total: 0
    },
    {
      id: 8,
      title: "Garlic Mushrooms",
      price: 290,
      info:
        "Fresh chunky mushrooms sauteed in olive oil with fresh garlic, onion, red chilli and Italian herbs, served with garlic bread.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer8}`,
      count: 0,
      total: 0
    },
    {
      id: 9,
      title: "Veg Calzone",
      price: 325,
      info:
        "Folded calzone stuffed with mixed peppers, broccoli, Italian herbs and cheese, served with Jalapeno dipping sauce.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer9}`,
      count: 0,
      total: 0
    },
    {
      id: 10,
      title: "Crostini Platter",
      price: 345,
      info:
        "Two of each flavour; artichoke, sundried tomato and melted cheese with black olives, on top of sliced, baked, ciabatta bread.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer10}`,
      count: 0,
      total: 0
    },
    {
      id: 11,
      title: "Antipasti Platter",
      price: 695,
      info:
        "Cheese crostini, garlic & chilli sauté mushroom, veg salad, marinated olives, crispy fries.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer11}`,
      count: 0,
      total: 0
    },
    {
      id: 12,
      title: "Crispy Fries",
      price: 195,
      info:
        "Golden crispy fries or herbed potato wedges served with chilli mayonnaise dip.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer12}`,
      count: 0,
      total: 0
    },
    {
      id: 13,
      title: "Jalapeno Cheese",
      price: 295,
      info:
        "Fried crispy croquettes filled with fine chopped broccoli, zucchini, carrot, potato and mixed with cheese. Served with jalapeno cheese sauce..",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer13}`,
      count: 0,
      total: 0
    },
    {
      id: 14,
      title: "Garlic Mushrooms",
      price: 325,
      info:
        "Fresh chunky mushrooms sautéed in olive oil with fresh garlic, onion, red chilli flakes and Italian herbs, served with garlic bread..",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer14}`,
      count: 0,
      total: 0
    },
    {
      id: 15,
      title: "Spaghetti Omelette",
      price: 295,
      info:
        "Scrambled egg and spaghetti mixed with cheese, tossed in Chef’s special garlic and onion recipe. Served hot with our in-house tomato dipping sauce.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer15}`,
      count: 0,
      total: 0
    },
    {
      id: 16,
      title: "Chicken Bruschetta",
      price: 349,
      info:
        "Toasted ciabatta bread loaded with olive oil tossed chicken, mixed peppers, fresh basil and Italian herbs.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer16}`,
      count: 0,
      total: 0
    },
    {
      id: 17,
      title: "C.O.P.",
      price: 235,
      info:
        "Ciabatta bread covered in tomato sauce and topped with chicken, onion, peppers and melted cheese.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer17}`,
      count: 0,
      total: 0
    },
    {
      id: 18,
      title: "Barbeque Chicken Wings",
      price: 345,
      info:
        "Tender, marinated, chicken wings, deep fried until crispy and glazed with barbeque sauce.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer18}`,
      count: 0,
      total: 0
    },
    {
      id: 19,
      title: "Chicken Calzone",
      price: 345,
      info:
        "Folded calzone stuffed with chunks of chicken, jalapeno, onion, mixed Italian herbs and cheese. Served with Jalapeno dipping sauce.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer19}`,
      count: 0,
      total: 0
    },
    {
      id: 20,
      title: "Antipasti Wings",
      price: 795,
      info:
        "Barbeque chicken wings, fried calamari, chilli garlic sautéed chicken & mushroom, cheese crostini and marinated olives.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer20}`,
      count: 0,
      total: 0
    },
    {
      id: 21,
      title: "Chicken Wings",
      price: 345,
      info:
        "Barbeque Chicken Wings - Tender, marinated chicken wings deep fried until crispy and glazed with barbeque sauce..",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer21}`,
      count: 0,
      total: 0
    },
    {
      id: 22,
      title: "Peri-Peri Wings",
      price: 375,
      info:
        "Peri-Peri Chicken Wings - Tender, marinated chicken wings deep fried until crispy and glazed with peri-peri sauce.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer22}`,
      count: 0,
      total: 0
    },
    {
      id: 23,
      title: "Butter Chilli Prawns",
      price: 395,
      info:
        "Prawns tossed in butter with garlic, chilli and herbs, glazed with honey lemon dip. Served with garlic bread.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer23}`,
      count: 0,
      total: 0
    },
    {
      id: 24,
      title: "Pesce É Calamari",
      price: 355,
      info:
        "Crispy fried basa fillet strips and calamari rings served with chilli mayonnaise.",
      inCart: false,
      type: 'appetizer',
      image: `${appetizer24}`,
      count: 0,
      total: 0
    }
  ],
  soup: [
    {
      id: 25,
      title: "Ginger Garlic Soup",
      price: 195,
      info:
        "Crispy fried basa fillet strips and calamari rings served with chilli mayonnaise.",
      inCart: false,
      type: 'soup',
      image: `${soup1}`,
      count: 0,
      total: 0
    },
    {
      id: 26,
      title: "Mushroom Cream",
      price: 195,
      info:
        "Crispy fried basa fillet strips and calamari rings served with chilli mayonnaise.",
      inCart: false,
      type: 'soup',
      image: `${soup2}`,
      count: 0,
      total: 0
    },
    {
      id: 27,
      title: "Cream Of Broccoli",
      price: 175,
      info:
        "Crispy fried basa fillet strips and calamari rings served with chilli mayonnaise.",
      inCart: false,
      type: 'soup',
      image: `${soup3}`,
      count: 0,
      total: 0
    },
    {
      id: 28,
      title: "Veg Clear Soup",
      price: 145,
      info:
        "Crispy fried basa fillet strips and calamari rings served with chilli mayonnaise.",
      inCart: false,
      type: 'soup',
      image: `${soup4}`,
      count: 0,
      total: 0
    },
    {
      id: 29,
      title: "Tomato Chicken",
      price: 235,
      info:
        "Crispy fried basa fillet strips and calamari rings served with chilli mayonnaise.",
      inCart: false,
      type: 'soup',
      image: `${soup5}`,
      count: 0,
      total: 0
    },
    {
      id: 30,
      title: "Chick nd Mushrum",
      price: 245,
      info:
        "Crispy fried basa fillet strips and calamari rings served with chilli mayonnaise.",
      inCart: false,
      type: 'soup',
      image: `${soup6}`,
      count: 0,
      total: 0
    },
    {
      id: 31,
      title: "Pepper & Chicken Soup",
      price: 215,
      info:
        "Crispy fried basa fillet strips and calamari rings served with chilli mayonnaise.",
      inCart: false,
      type: 'soup',
      image: `${soup7}`,
      count: 0,
      total: 0
    },
    {
      id: 32,
      title: "Schezwan Soup",
      price: 230,
      info:
        "Crispy fried basa fillet strips and calamari rings served with chilli mayonnaise.",
      inCart: false,
      type: 'soup',
      image: `${soup8}`,
      count: 0,
      total: 0
    },
    {
      id: 302,
      title: "Schezwan Chili",
      price: 260,
      info:
        "Crispy fried basa fillet strips and calamari rings served with chilli mayonnaise.",
      inCart: false,
      type: 'soup',
      image: `${soup9}`,
      count: 0,
      total: 0
    }
  ],
  pizza: [
    {
      id: 33,
      title: "Margherita",
      price: 380,
      info:
        "Classic cheese & tomato sauce base pizza, served with chilli mayonnaise.",
      inCart: false,
      type: 'pizza',
      image: `${pizza1}`,
      count: 0,
      total: 0
    },
    {
      id: 34,
      title: "Tuscan Spicy",
      price: 430,
      info:
        "Pizza topped with freshly sliced tomato rings, green peppers, onion, fresh garlic cloves, a touch of chilli and cheese.",
      inCart: false,
      type: 'pizza',
      image: `${pizza2}`,
      count: 0,
      total: 0
    },
    {
      id: 35,
      title: "Chilli Garlic",
      price: 450,
      info:
        "A bold and spicy pizza with zesty red chilli oil, finely chopped green chilli, onion, sliced green pepper and cheese.",
      inCart: false,
      type: 'pizza',
      image: `${pizza3}`,
      count: 0,
      total: 0
    },
    {
      id: 36,
      title: "Rocket",
      price: 480,
      info:
        "A deliciously spicy pizza topped with fresh green peppers, green chillies, jalapeno pepper, cheese and decorated with fresh rocket leaf on top.",
      inCart: false,
      type: 'pizza',
      image: `${pizza4}`,
      count: 0,
      total: 0
    },
    {
      id: 37,
      title: "Diced Hawaiian",
      price: 495,
      info:
        "A classic combination of diced chicken, pineapple, cherry tomatoes & cheese.",
      inCart: false,
      type: 'pizza',
      image: `${pizza5}`,
      count: 0,
      total: 0
    },
    {
      id: 38,
      title: "Chicken Corn",
      price: 510,
      info:
        "Chicken sausage, sweet corn, onions and sliced green peppers on top of cheesy and herby tomato sauce base.",
      inCart: false,
      type: 'pizza',
      image: `${pizza6}`,
      count: 0,
      total: 0
    },
    {
      id: 39,
      title: "Cesena Chicken",
      price: 535,
      info:
        "Our much loved pizza combination of diced chicken, jalapenos, sliced onions a mixed peppers, on top of cheese a tomato sauce.",
      inCart: false,
      type: 'pizza',
      image: `${pizza7}`,
      count: 0,
      total: 0
    },
    {
      id: 40,
      title: "Chicken Delight",
      price: 510,
      info:
        "Non-veg delight with diced chicken, red paprika, onion, green pepper and cheese.",
      inCart: false,
      type: 'pizza',
      image: `${pizza8}`,
      count: 0,
      total: 0
    },
    {
      id: 41,
      title: "Loaded Lamb",
      price: 230,
      info:
        "Minced chicken and tomato sauce based, loaded with lamb pepperoni, onion and green chillies.",
      inCart: false,
      type: 'pizza',
      image: `${pizza9}`,
      count: 0,
      total: 0
    },
    {
      id: 42,
      title: "Palermo Pineapple",
      price: 470,
      info:
        "A succulent bed of tomato sauce covered with cheddar, mozzarella, cherry tomatoes, cottage cheese and fresh pineapple cubes.",
      inCart: false,
      type: 'pizza',
      image: `${pizza10}`,
      count: 0,
      total: 0
    }
  ],
  pasta: [
    {
      id: 43,
      title: "Torino Cal-De-Lite",
      price: 445,
      info:
        "Broccoli, sweet corn, green, red and yellow peppers with black olives tossed with pasta, Italian herbs & fresh parsley (without Sauce).",
      inCart: false,
      type: 'pasta',
      image: `${pasta1}`,
      count: 0,
      total: 0
    },
    {
      id: 44,
      title: "Spinach & Pepper",
      price: 415,
      info:
        "Fresh spinach, black pepper, parmesan cheese and olive oil tossed pasta (without Sauce).",
      inCart: false,
      type: 'pasta',
      image: `${pasta2}`,
      count: 0,
      total: 0
    },
    {
      id: 45,
      title: "Florence Tomato",
      price: 445,
      info:
        "A timeless classic tomato sauce made with fresh tomatoes, onion, garlic, Italian herbs & spices.",
      inCart: false,
      type: 'pasta',
      image: `${pasta3}`,
      count: 0,
      total: 0
    },
    {
      id: 46,
      title: "Rocket Fuel",
      price: 445,
      info:
        "Launch your taste-buds to a higher level with our hottest & tastiest tomato sauce flavoured chopped onion, garlic and green chilli.",
      inCart: false,
      type: 'pasta',
      image: `${pasta4}`,
      count: 0,
      total: 0
    },
    {
      id: 47,
      title: "Paneer Piazza",
      price: 230,
      info:
        "Freshly crumbled paneer, combined with rosemary, fresh basil, garlic and onion in a spicy rich tomato sauce.",
      inCart: false,
      type: 'pasta',
      image: `${pasta5}`,
      count: 0,
      total: 0
    },
    {
      id: 48,
      title: "Pollo Alla Romana",
      price: 475,
      info:
        "Char grilled chicken cuts, jalapeno pepper, fresh garlic, onion and cherry tomatoes tossed in light olive oil. (with touch of Tomato sauce).",
      inCart: false,
      type: 'pasta',
      image: `${pasta6}`,
      count: 0,
      total: 0
    },
    {
      id: 49,
      title: "Chicken Pasta",
      price: 495,
      info:
        "Diced chicken tossed in olive oil, garlic and onion, fresh basil & mixed Italian herbs. (without Sauce)",
      inCart: false,
      type: 'pasta',
      image: `${pasta7}`,
      count: 0,
      total: 0
    },
    {
      id: 50,
      title: "Chicken Carbonara",
      price: 515,
      info:
        "Tender diced chicken and egg yolk well cooked in our much loved white cream sauce.",
      inCart: false,
      type: 'pasta',
      image: `${pasta8}`,
      count: 0,
      total: 0
    },
    {
      id: 51,
      title: "Seafood Pasta",
      price: 655,
      info:
        "Salmon, calamari. shrimps, prawns and basa cooked in a wine and cream sauce.",
      inCart: false,
      type: 'pasta',
      image: `${pasta9}`,
      count: 0,
      total: 0
    },
    {
      id: 52,
      title: "Marinara Sauce",
      price: 655,
      info:
        "Mixed seafood (salmon, calamari, shrimps, prawns, basa) and mushroom cooked in rich tomato sauce.",
      inCart: false,
      type: 'pasta',
      image: `${pasta10}`,
      count: 0,
      total: 0
    }
  ],
  grill: [
    {
      id: 53,
      title: "Florence Tomato",
      price: 535,
      info:
        "Mouth watering marinated char grilled chicken breast or paneer steak with mixed pasta, tossed in our house sauce.",
      inCart: false,
      type: 'grill',
      image: `${grill1}`,
      count: 0,
      total: 0
    },
    {
      id: 54,
      title: "Grilled Basa",
      price: 565,
      info:
        "Grilled basa fish fillet marinated with Italian herbs and olive oil served on bed of sauteed broccoli and green beans.",
      inCart: false,
      type: 'grill',
      image: `${grill2}`,
      count: 0,
      total: 0
    },
    {
      id: 55,
      title: "Crispy Chicken",
      price: 510,
      info:
        "Marinated chicken breast, batter fried until turns golden & crispy, dredged with cheese sauce and served with peri peri dip sauce and fries.",
      inCart: false,
      type: 'grill',
      image: `${grill3}`,
      count: 0,
      total: 0
    },
    {
      id: 56,
      title: "Herb Crusted Fish",
      price: 530,
      info:
        "Batter fried, Italian herbs and olive oil marinated basa fish fillet served with chilli mayonnaise and crispy fries.",
      inCart: false,
      type: 'grill',
      image: `${grill4}`,
      count: 0,
      total: 0
    },
    {
      id: 57,
      title: "Pamphlet Fish",
      price: 530,
      info:
        "Batter fried, Italian herbs and olive oil marinated basa fish fillet served with chilli mayonnaise and crispy fries.",
      inCart: false,
      type: 'grill',
      image: `${grill5}`,
      count: 0,
      total: 0
    },
    {
      id: 58,
      title: "Arabian Chick",
      price: 590,
      info:
        "Batter fried, Italian herbs and olive oil marinated basa fish fillet served with chilli mayonnaise and crispy fries.",
      inCart: false,
      type: 'grill',
      image: `${grill6}`,
      count: 0,
      total: 0
    }
  ],
  desert: [
    {
      id: 63,
      title: "Ice Cream",
      price: 150,
      info:
        "A simple yet elegant vanilla chocolate mousse. Silky smooth and light.",
      inCart: false,
      type: 'desert',
      image: `${desert1}`,
      count: 0,
      total: 0
    },
    {
      id: 64,
      title: "Chocolate Mousse",
      price: 175,
      info:
        "A simple yet elegant dark chocolate mousse. Silky smooth and light.",
      inCart: false,
      type: 'desert',
      image: `${desert2}`,
      count: 0,
      total: 0
    },
    {
      id: 65,
      title: "Choconut Brownie",
      price: 240,
      info:
        "A ﬂat baked dessert made with chocolate and walnuts, served warm with chocolate sauce.",
      inCart: false,
      type: 'desert',
      image: `${desert3}`,
      count: 0,
      total: 0
    },
    {
      id: 66,
      title: "Plain Cheese Cake",
      price: 245,
      info:
        "Shortbread crust and a creamy filling baked cheese cake.",
      inCart: false,
      type: 'desert',
      image: `${desert4}`,
      count: 0,
      total: 0
    },
    {
      id: 67,
      title: "DeathBy Chocolate",
      price: 265,
      info:
        "Popular international sweet chocolate cake served warm with chocolate sauce.",
      inCart: false,
      type: 'desert',
      image: `${desert5}`,
      count: 0,
      total: 0
    },
    {
      id: 68,
      title: "Tiramisu",
      price: 265,
      info:
        "A classic Italian dessert with coffee and liqueur soaked layers of sponge and mascarpone cheese topped with grated chocolate.",
      inCart: false,
      type: 'desert',
      image: `${desert6}`,
      count: 0,
      total: 0
    },
    {
      id: 69,
      title: "Blueberry Cheese Cake",
      price: 295,
      info:
        "Blueberry topped baked cheese cake with a shortbread crust and a creamy filling.",
      inCart: false,
      type: 'desert',
      image: `${desert7}`,
      count: 0,
      total: 0
    },
    {
      id: 70,
      title: "Strawberry Cheese Cake",
      price: 295,
      info:
        "Strawberry topped baked cheese cake with a shortbread crust and a creamy filling.",
      inCart: false,
      type: 'desert',
      image: `${desert8}`,
      count: 0,
      total: 0
    },
    {
      id: 71,
      title: "Pineapple Cheese Cake",
      price: 270,
      info:
        "Pineapple topped baked cheese cake with a shortbread crust and a creamy filling.",
      inCart: false,
      type: 'desert',
      image: `${desert9}`,
      count: 0,
      total: 0
    },
    {
      id: 72,
      title: "Mango Baked Cake",
      price: 230,
      info:
        "Mango topped baked cheese cake with a shortbread crust and a creamy filling.",
      inCart: false,
      type: 'desert',
      image: `${desert10}`,
      count: 0,
      total: 0
    }
  ]
}

export const drinkData = {
  mocktail: [
    {
      id: 73,
      title: "Lychee Wonders",
      price: 195,
      info:
        "Lychee crush and fresh lime juice shaken in ice full shaker and topped with soda and sprite.",
      inCart: false,
      type: 'mocktail',
      image: `${mocktail1}`,      
      count: 0,
      total: 0
    },
    {
      id: 74,
      title: "Basil Iceberg",
      price: 215,
      info:
        "A refreshingly delicious frozen mocktail with lychee and basil to delight your taste buds.",
      inCart: false,
      type: 'mocktail',
      image: `${mocktail2}`,      
      count: 0,
      total: 0
    },
    {
      id: 75,
      title: "Mint Storm",
      price: 230,
      info:
        "An irresistible all time drink that combines fresh mint with orange juice and blue curacao to refresh you thoroughly.",
      inCart: false,
      type: 'mocktail',
      image: `${mocktail3}`,      
      count: 0,
      total: 0
    },
    {
      id: 76,
      title: "Devil Drink",
      price: 210,
      info:
        "Our signature lip smacking delicious drink with hint of tabasco sauce, guava juice and fresh lime juice.",
      inCart: false,
      type: 'mocktail',
      image: `${mocktail4}`,      
      count: 0,
      total: 0
    },
    {
      id: 77,
      title: "Banana Cooler",
      price: 235,
      info:
        "Perfectly refreshing and delicious blend of Coffee, Vanilla ice cream and Banana.",
      inCart: false,
      type: 'mocktail',
      image: `${mocktail5}`,
      count: 0,
      total: 0
    },
    {
      id: 78,
      title: "Virgin Piña Colada",
      price: 265,
      info:
        "This classic tropical mocktail with pineapple, coconut syrup and vanilla icecream to transport you to paradise.",
      inCart: false,
      type: 'mocktail',
      image: `${mocktail6}`,
      count: 0,
      total: 0
    },
    {
      id: 79,
      title: "Twist Of M&M",
      price: 230,
      info:
        "Tempting and refreshing twist of fresh Melon and Mango.",
      inCart: false,
      type: 'mocktail',
      image: `${mocktail7}`,
      count: 0,
      total: 0
    },
    {
      id: 80,
      title: "Nutty Fruity",
      price: 260,
      info:
        "Delightful blend of cranberry, pineapple and peach juice topped with fresh pineapple and icecubes that entices your taste buds and refreshes your senses.",
      inCart: false,
      type: 'mocktail',
      image: `${mocktail8}`,
      count: 0,
      total: 0
    },
    {
      id: 81,
      title: "Blue Ocean",
      price: 270,
      info:
        "A tropical fruity drink made with pineapple, blue curacao, coconut syrup and icecream, one sip will transport you straight to a hammock on a Caribbean beach.",
      inCart: false,
      type: 'mocktail',
      image: `${mocktail9}`,
      count: 0,
      total: 0
    },
    {
      id: 82,
      title: "Blue Curacao",
      price: 225,
      info:
        "A refreshing mocktail with blue curacao syrup, soda & ice.",
      inCart: false,
      type: 'mocktail',
      image: `${mocktail10}`,
      count: 0,
      total: 0
    }
  ],
  beverage: [
    {
      id: 830,
      title: "Coke",
      price: 85,
      info:
        "A refreshing mocktail with blue curacao syrup, soda & ice.",
      inCart: false,
      type: 'beverage',
      image: `${beverage1}`,
      count: 0,
      total: 0
    },
    {
      id: 840,
      title: "Sprite",
      price: 85,
      info:
        "A refreshing mocktail with blue curacao syrup, soda & ice.",
      inCart: false,
      type: 'beverage',
      image: `${beverage2}`,
      count: 0,
      total: 0
    },
    {
      id: 85,
      title: "Diet Coke",
      price: 95,
      info:
        "A refreshing mocktail with blue curacao syrup, soda & ice.",
      inCart: false,
      type: 'beverage',
      image: `${beverage3}`,
      count: 0,
      total: 0
    },
    {
      id: 86,
      title: "Kinley",
      price: 20,
      info:
        "A refreshing mocktail with blue curacao syrup, soda & ice.",
      inCart: false,
      type: 'beverage',
      image: `${beverage4}`,
      count: 0,
      total: 0
    },
    {
      id: 87,
      title: "Red Bull",
      price: 95,
      info:
        "A refreshing mocktail with blue curacao syrup, soda & ice.",
      inCart: false,
      type: 'beverage',
      image: `${beverage5}`,
      count: 0,
      total: 0
    },
    {
      id: 88,
      title: "Lime Soda",
      price: 135,
      info:
        "A refreshing mocktail with blue curacao syrup, soda & ice.",
      inCart: false,
      type: 'beverage',
      image: `${beverage6}`,
      count: 0,
      total: 0
    },
    {
      id: 89,
      title: "Water",
      price: 50,
      info:
        "A refreshing mocktail with blue curacao syrup, soda & ice.",
      inCart: false,
      type: 'beverage',
      image: `${beverage7}`,
      count: 0,
      total: 0
    },
    {
      id: 90,
      title: "Juice",
      price: 90,
      info:
        "A refreshing mocktail with blue curacao syrup, soda & ice.",
      inCart: false,
      type: 'beverage',
      image: `${beverage8}`,
      count: 0,
      total: 0
    }
  ],
  tea: [
    {
      id: 91,
      title: "Oreo Frappe",
      price: 245,
      info:
        "A refreshing sweet treat made from mocha with coffee and Oreo pieces, hand topped with whipped cream.",
      inCart: false,
      type: 'tea',
      image: `${coffee1}`,
      count: 0,
      total: 0
    },
    {
      id: 92,
      title: "Choco Coffee",
      price: 255,
      info:
        "Espresso mixed with ice cream, cold milk and chocolate syrup, chocolate ice cream on top.",
      inCart: false,
      type: 'tea',
      image: `${coffee2}`,
      count: 0,
      total: 0
    },
    {
      id: 93,
      title: "Vanilla Coffee",
      price: 255,
      info:
        "Espresso mixed with ice cream, cold milk and chocolate syrup, vanilla ice cream on top.",
      inCart: false,
      type: 'tea',
      image: `${coffee3}`,
      count: 0,
      total: 0
    },
    {
      id: 94,
      title: "Espresso",
      price: 95,
      info:
        "Freshly brewed strong black coffee, vanilla ice cream on top.",
      inCart: false,
      type: 'tea',
      image: `${coffee4}`,
      count: 0,
      total: 0
    },
    {
      id: 95,
      title: "Americano",
      price: 90,
      info:
        "Espresso topped up with hot water, vanilla ice cream on top.",
      inCart: false,
      type: 'tea',
      image: `${coffee5}`,
      count: 0,
      total: 0
    },
    {
      id: 96,
      title: "Cappuccino",
      price: 130,
      info:
        "Strong espresso with a thick milk foam on top.",
      inCart: false,
      type: 'tea',
      image: `${coffee6}`,
      count: 0,
      total: 0
    },
    {
      id: 97,
      title: "Mocha",
      price: 90,
      info:
        "A strong cappuccino with chocolate syrup garnished with coco powder.",
      inCart: false,
      type: 'tea',
      image: `${coffee7}`,
      count: 0,
      total: 0
    },
    {
      id: 98,
      title: "Macchiato",
      price: 100,
      info:
        "Freshly brewed Espresso with a dollop of Foam on top",
      inCart: false,
      type: 'tea',
      image: `${coffee8}`,
      count: 0,
      total: 0
    }
  ]
}

//cocktail
import cocktail1 from '../swiggyimg/cocktail1.jpg'
import cocktail2 from '../swiggyimg/cocktail2.jpg'
import cocktail3 from '../swiggyimg/cocktail3.jpg'
import cocktail4 from '../swiggyimg/cocktail4.jpg'
import cocktail5 from '../swiggyimg/cocktail5.jpg'
import cocktail6 from '../swiggyimg/cocktail6.jpg'

//indianwine
import indian1 from '../swiggyimg/indian1.jpg'
import indian2 from '../swiggyimg/indian2.jpg'
import indian3 from '../swiggyimg/indian3.jpg'
import indian4 from '../swiggyimg/indian4.jpg'
import indian5 from '../swiggyimg/indian5.png'
import indian6 from '../swiggyimg/indian6.jpg'
import indian7 from '../swiggyimg/indian7.jpg'

// imported wine
import imported1 from '../swiggyimg/imported1.png'
import imported2 from '../swiggyimg/imported2.jpg'
import imported3 from '../swiggyimg/imported3.jpg'
import imported4 from '../swiggyimg/imported4.webp'
import imported5 from '../swiggyimg/imported5.webp'
import imported6 from '../swiggyimg/imported6.jpg'
import imported7 from '../swiggyimg/imported7.webp'
import imported8 from '../swiggyimg/imported8.jpg'
// import imported5 from '../swiggyimg/imported5.webp'

export const wineData = {
  cocktail: [
    {
      id: 99,
      title: "Red Sangria",
      price: 345,
      info:
        "A refreshing cocktail with a combination of red wine, orange juice, lemon and cut fruits.",
      inCart: false,
      type: 'cocktail',
      image: `${cocktail1}`,
      count: 0,
      total: 0
    },
    {
      id: 100,
      title: "Wine Spritzer",
      price: 345,
      info:
        "A refreshing cocktail with a combination of white wine, soda, lemon and cut fruits.",
      inCart: false,
      type: 'cocktail',
      image: `${cocktail2}`,
      count: 0,
      total: 0
    },
    {
      id: 101,
      title: "Rosé Sangria",
      price: 375,
      info:
        "This Rosé Sangria is the ideal blend of rosé wine, citrus ,strawberry and cranberry.",
      inCart: false,
      type: 'cocktail',
      image: `${cocktail3}`,
      count: 0,
      total: 0
    },
    {
      id: 102,
      title: "Cocktail Punch",
      price: 375,
      info:
        "Light, refreshing, and an easy white wine cocktail accented with peach and cranberry.",
      inCart: false,
      type: 'cocktail',
      image: `${cocktail4}`,
      count: 0,
      total: 0
    },
    {
      id: 103,
      title: "Sangria/White wine",
      price: 195,
      info:
        "Light, refreshing, and an easy white wine cocktail accented, a fabulous way to entertain in style.",
      inCart: false,
      type: 'cocktail',
      image: `${cocktail5}`,
      count: 0,
      total: 0
    },
    {
      id: 1003,
      title: "Sangria Gem",
      price: 215,
      info:
        "Light, refreshing, and an easy white wine cocktail accented, a fabulous way to entertain in style.",
      inCart: false,
      type: 'cocktail',
      image: `${cocktail6}`,
      count: 0,
      total: 0
    }
  ],
  indianWine: [
    {
      id: 109,
      title: "One Tree Hill",
      price: 1295,
      info:
        "Plum and Blackcurrant with whiffs of spicy green pepper.",
      inCart: false,
      type: 'indianwine',
      image: `${indian1}`,
      count: 0,
      total: 0
    },
    {
      id: 110,
      title: "Banyan Cabernet ",
      price: 1795,
      info:
        "A luscious, ruby red, with purple tints wine has mix of sharp eucalyptus, sweet fruit and fragrant oak.",
      inCart: false,
      type: 'indianwine',
      image: `${indian2}`,
      count: 0,
      total: 0
    },
    {
      id: 111,
      title: "Banyan Shiraz",
      price: 1795,
      info:
        "The shiraz packs a punch with its fruity,velvety tannins, and leaves your palate dry.",
      inCart: false,
      type: 'indianwine',
      image: `${indian3}`,
      count: 0,
      total: 0
    },
    {
      id: 112,
      title: "Fratelli Classic ",
      price: 1895,
      info:
        "This merlot based blend has notes of plum, chocolate and coffee along with a hint of spice.",
      inCart: false,
      type: 'indianwine',
      image: `${indian4}`,
      count: 0,
      total: 0
    },
    {
      id: 113,
      title: "Fratelli Sangiovese ",
      price: 1795,
      info:
        "The wine has a light but elegant oaky nose while the palate offers a perfect fusion of acidity.",
      inCart: false,
      type: 'indianwine',
      image: `${indian5}`,
      count: 0,
      total: 0
    },
    {
      id: 114,
      title: "Fratelli Cabernet ",
      price: 2100,
      info:
        "The wine offers a distinctive note of tobacco and plum on the nose, subtle nuances of black olives.",
      inCart: false,
      type: 'indianwine',
      image: `${indian6}`,
      count: 0,
      total: 0
    },
    {
      id: 115,
      title: "Bellissima",
      price: 995,
      info:
        "Bellissima means Beautiful in Italian. The wine is sweet and velvety soft. And its finish is smooth.",
      inCart: false,
      type: 'indianwine',
      image: `${indian7}`,
      count: 0,
      total: 0
    }
  ],
  importedWine: [
    {
      id: 117,
      title: "Sollazo Bianco",
      price: 1990,
      info:
        "A more easy drinking style Italian white wine.Big mouthfuls of fresh, zesty, white fruit with a very crisp and vibrant finish.",
      inCart: false,
      type: 'importedwine',
      image: `${imported1}`,
      count: 0,
      total: 0
    },
    {
      id: 118,
      title: "Rosso D'Italia",
      price: 1890,
      info:
        "A fruit laden wine with a big mouthful of texture and flavour. Very easy drinking and delicious.",
      inCart: false,
      type: 'importedwine',
      image: `${imported2}`,
      count: 0,
      total: 0
    },
    {
      id: 119,
      title: "IL Casone",
      price: 2200,
      info:
        "Delicate and slightly spicy bouquet with hint of tropical fruit on the finish",
      inCart: false,
      type: 'importedwine',
      image: `${imported3}`,
      count: 0,
      total: 0
    },
    {
      id: 120,
      title: "Borgo Antico",
      price: 2350,
      info:
        "A tasting of chianti is characterized by red and black cherry characters,along with savory notes,wild herbs.",
      inCart: false,
      type: 'importedwine',
      image: `${imported4}`,
      count: 0,
      total: 0
    },
    {
      id: 121,
      title: "Terroir Littoral",
      price: 2800,
      info:
        "This wine has an intense nose with notes of red summer-fruit .",
      inCart: false,
      type: 'importedwine',
      image: `${imported5}`,
      count: 0,
      total: 0
    },
    {
      id: 122,
      title: "Moulin Gassac",
      price: 2400,
      info:
        "On the complex nose the wine delivers scents of pears, apple, citrus and wild flowers .",
      inCart: false,
      type: 'importedwine',
      image: `${imported6}`,
      count: 0,
      total: 0
    },
    {
      id: 123,
      title: "Conosur",
      price: 2100,
      info:
        "Bright yellow with beautiful golden hues, this is an exuberant Chardonnay.",
      inCart: false,
      type: 'importedwine',
      image: `${imported7}`,
      count: 0,
      total: 0
    },
    {
      id: 124,
      title: "Pinot Noir",
      price: 2150,
      info:
        "Freshly brewed Espresso with a dollop of Foam on top",
      inCart: false,
      type: 'importedwine',
      image: `${imported8}`,
      count: 0,
      total: 0
    }
  ]
}