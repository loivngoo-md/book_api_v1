
const faker = require('@faker-js/faker').faker;
const { MongoClient, ServerApiVersion } = require('mongodb');
const fetch = require("node-fetch")

async function callAPI() {
    const data = await fetch("https://www.googleapis.com/books/v1/volumes?q=habbit&key=AIzaSyDRaRJpE2GteOar1xKpOJv-uVa1CqfAzhI&maxResults=40")
    return await data.json()
}

async function seedDB() {
    // Connection URL
    const uri = "mongodb+srv://loivngoo:EYEYs6RipA8Sp62r@cluster0.1l0dn5b.mongodb.net/book_v1?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    let USERS = [];

    // Array.from({ length: 9979 }).forEach(() => {
    //     USERS.push(createRandomUser());
    // });
    try {

        await client.connect(async err => {
            const collection = client.db("book_v1").collection("books");

            console.log("Connected correctly to server");
            const data = await callAPI()

            const res = data.items.map(value => {
                return {
                    title: value.volumeInfo.title,
                    author: value.volumeInfo.authors ? value.volumeInfo.authors[0] : "N/A",
                    description: value.volumeInfo.description || "",
                    image_path: value.volumeInfo.imageLinks?.thumbnail || "http://books.google.com/books/content?id=L4snAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                    avg_rating: faker.datatype.number(5),
                    type: value.volumeInfo.categories ? value.volumeInfo.categories.toString() : "Self-Help",
                    count_rating: faker.internet.port(),


                }
            })

            console.log(res);

            await collection.insertMany(res);

            console.log("Database seeded! :)");

            // perform actions on the collection object
            client.close();
        });

    } catch (err) {
        console.log(err.stack);
    }
}

function createRandomUser() {
    return {

    };
}


seedDB();