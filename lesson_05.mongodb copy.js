use("lesson_05_cohort_86");

// Создаем коллекцию animal c 6 новыми документами
// db.animal.insertMany([
//   { kind: "tiger", weight: 300, name: "Alan", predatory: true },
//   { kind: "penguin", weight: 2, name: "Kovalsky", predatory: true },
//   { kind: "chicken", weight: 1, name: "Cipa", predatory: false },
//   { kind: "shark", weight: 400, name: "Sharp", predatory: false },
//   { kind: "shark", weight: 450, name: "John", predatory: false },
//   { kind: "panda", weight: 200, name: "Po", predatory: false },
// ]);

// UPDATE

// 1. $set
// - изменим predotary у всех акул на true
// db.animal.updateMany({ kind: "shark" }, { $set: { predatory: true } });

// 2. $inc - увеличивает значения на указанную величину
// db.animal.updateMany({}, { $inc: { weight: 3 } });

// 3. $rename - переименовывает ключи
// db.animal.updateMany({}, { $rename: { weight: "weightKg" } });

// 4. Добавление нового св-ва с помощью $set
// db.animal.updateMany(
//   { predatory: true },
//   { $set: { food: ["fish", "squid"] } }
// );

// 5. $push - добавляет в массив новый элемент
// db.animal.updateOne(
//   { kind: "tiger", name: "Alan" },
//   {
//     $push: { food: "wolf" },
//   }
// );

// 6. $unset - удаление св-ва и значения обьекта
// db.animal.updateOne(
//   { kind: "chicken", name: "Cipa" },
//   { $unset: { predatory: "" } },
// );

// 7. Изменение по id
// db.animal.updateOne(
//   { _id: ObjectId('6ace6192c7eb3f6b2275d4cd') },
//   { $set: { name: "Kovalsky 007" } }
// );

//////////////////////////////////////////////////////////////////////////
// DELETE
// 1. deleteOne()
// db.animal.deleteOne({ _id: ObjectId('6ace6192c7eb3f6b2275d4ce') });

// 2. deleteMany() - удаление нескольких элементов
// db.animal.insertMany([
//   {
//     kind: "t-rex",
//     weightKg: 1500,
//   },
//   {
//     kind: "t-rex",
//     weightKg: 1800,
//   },
// ]);

// db.animal.deleteMany({ kind: "t-rex" });

// Получение всех животных
// db.animal.find();

///////////////////////////////////////////////////////////////////////////////
// Agregate
// db.kids.insertMany([
//   { name: "John", age: 5, gender: "boy" },
//   { name: "Anna", age: 6, gender: "girl" },
//   { name: "Leyla", age: 4, gender: "girl" },
//   { name: "Frieda", age: 3, gender: "boy" },
//   { name: "Bob", age: 5, gender: "boy" },
// ]);

// - поиск среднего возраста мальчиков и девочек
// db.kids.aggregate([
//   {
//     $group: {
//       _id: "$gender",
//       averageAge: {
//         $avg: "$age",
//       },
//     },
//   },
// ]);

// - поиск минимального возраста мальчиков и девочек
// db.kids.aggregate([
//   {
//     $group: {
//       _id: "$gender",
//       minimumAge: {
//         $min: "$age",
//       },
//     },
//   },
// ]);

// - поиск максимального возраста мальчиков и девочек

db.kids.aggregate([
  {
    $group: {
      _id: "$gender",
      maximumAge: {
        $max: "$age",
      },
    },
  },
]);
