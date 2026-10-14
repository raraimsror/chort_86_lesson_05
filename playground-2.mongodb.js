//1. Создание базы данных
use("homework_04");

// 2. Создание коллекции
db.drinks.insertMany([
  {
    name: "Vodka",
    price: 12,
    strength: 40,
  },
  {
    name: "Beer",
    price: 3,
    strength: 5,
  },
  {
    name: "Wine",
    price: 15,
    strength: 13,
  },
  {
    name: "Whiskey",
    price: 25,
    strength: 45,
  },
  {
    name: "Rum",
    price: 20,
    strength: 38,
  },
  {
    name: "Tequila",
    price: 22,
    strength: 40,
  },
]);
//2.1 Убедитесь, что в базе данных существует коллекция drinks.
db.drinks.find();

// 3. Самый дорогой напиток
db.drinks.find().sort({ price: -1 }).limit(1);

// 4. Топ 3 самых дешевых напитка
db.drinks.find().sort({ price: 1 }).limit(3);

// 5. Самый крепкий напиток
db.drinks.find().sort({ strength: -1 }).limit(1);
