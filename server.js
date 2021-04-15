const mongoose = require("mongoose");
// require("dotenv").config({ path: ".env" });
require("dotenv").config();
const Person = require("./person");

// connect to the database
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));

// Create and Save a Record of a Model
// let person = Person({
//     name: "Dali",
//     age: 28,
//     favoriteFood: ["lasanga", "couscous"],
// });
// person.save((err, data) => {
//     if (err) {
//         console.log(err);
//     } else console.log("person added to database");
// });

//Create Many Records with model.create()

// Person.create(
//     [
//         {
//             name: "Kouloud",
//             age: 31,
//             favoriteFood: ["pizza"],
//         },
//         {
//             name: "Khaled",
//             age: 15,
//             favoriteFood: ["hamburger", "pizza", "spaghetti"],
//         },
//         {
//             name: "Layla",
//             age: 9,
//             favoriteFood: ["candy", "chocolat"],
//         },
//         {
//             name: "Mejdi",
//             age: 23,
//             favoriteFood: ["lablebi"],
//         },
//     ],
//     (err, data) => {
//         if (err) {
//             console.log(err);
//         } else console.log("people added to database");
//     }
// );

//Use model.find() to Search Your Database
// Person.find({ favoriteFood: { $all: ["pizza"] } })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//Use model.findOne() to Return a Single Matching Document from Your Database
// Person.findOne({ name: "Layla" })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });

//Use model.findById() to Search Your Database By _id
// Person.findById({ _id: "6078c43a50e48516cc490504" })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//Perform Classic Updates by Running Find, Edit, then Save
// Person.findById({ _id: "6078be5e3e8c9443fceba39b" }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else data.favoriteFood.push("hamburger");
//     data.save((err, data) => {
//         if (err) {
//             console.log(err);
//         } else console.log(data);
//     });
// });

//Perform New Updates on a Document Using model.findOneAndUpdate()
// Person.findOneAndUpdate(
//     { name: "Khaled" },
//     { age: 20 },
//     { new: true },
//     (err, data) => {
//         if (err) {
//             console.log(err);
//         } else console.log(data);
//     }
// );

//Delete One Document Using model.findByIdAndRemove
// Person.findByIdAndRemove({ _id: "6078c43a50e48516cc490504" }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else console.log('person removed');
// });

//MongoDB and Mongoose - Delete Many Documents with model.remove()
// Person.deleteMany({ name: "Mejdi" }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else console.log("person removed");
// });

// Chain Search Query Helpers to Narrow Search Results
// Person.findOneAndDelete({ favoriteFood: { $all: ["lasanga"] } })
//     .sort({ name: 1 })
//     .limit(2)
//     .select("-age")
//     .exec((err, data) => {
//         if (err) {
//             console.log(err);
//         } else console.log(data);
//     });
