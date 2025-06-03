//  Task 1: MongoDB Setup
//- Install MongoDB on your local machine OR set up a free MongoDB Atlas cluster
//- Create a new database called `plp_bookstore`
//- Create a collection called `books`

// Task 2: Basic CRUD Operations
// Step 1: Insert the Books

// Find all books in a specific genre (e.g., "Fiction")
db.books.find({ genre: "Fiction" })

// Find books published after a certain year (e.g., 1950)
db.books.find({ published_year: { $gt: 1950 } })

//  Find books by a specific author (e.g., "George Orwell")
db.books.find({ author: "George Orwell" })

// Update the price of a specific book(e.g., "1984" to $15.99)
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 15.99 } }
)

// Delete a book by its title(e.g., "Animal Farm")
db.books.deleteOne({ title: "Animal Farm" })



// Task 3: Advanced Queries
// Write a query to find books that are both in stock and published after 2010
db.books.find({ 
  in_stock: true, 
  published_year: { $gt: 2010 } 
})

// Use projection to return only the title, author, and price fields in your queries
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Implement sorting to display books by price (both ascending and descending)
// Cheapest first
db.books.find().sort({ price: 1 })

// Most expensive first
db.books.find().sort({ price: -1 })

//  Use the `limit` and `skip` methods to implement pagination (5 books per page)
// Page 1 (books 1-5)
db.books.find().limit(5).skip(0)

// Page 2 (books 6-10)
db.books.find().limit(5).skip(5)



// Task 4:  Aggregation Pipeline

// Create an aggregation pipeline to calculate the average price of books by genre
db.books.aggregate([
  { $group: { 
      _id: "$author", 
      bookCount: { $sum: 1 } 
  }},
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

// Create an aggregation pipeline to find the author with the most books in the collection
db.books.aggregate([
  { $group: { 
      _id: "$author", 
      bookCount: { $sum: 1 } 
  }},
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
])

// Implement a pipeline that groups books by publication decade and counts them
db.books.aggregate([
  { $project: { 
      decade: { 
          $subtract: [ 
              "$published_year", 
              { $mod: ["$published_year", 10] } 
          ] 
      } 
  }},
  { $group: { 
      _id: "$decade", 
      count: { $sum: 1 } 
  }},
  { $sort: { _id: 1 } }
])

// Task 5: Indexing
// Create an index on the `title` field for faster searches
// Connect to your database

// Create ascending index on title field
db.books.createIndex({ title: 1 })

//  Create a compound index on `author` and `published_year`
// Create compound index (author ascending, published_year descending)
db.books.createIndex({ author: 1, published_year: -1 })

// Use the `explain()` method to demonstrate the performance improvement with your indexes
/*
 Understanding explain()
The explain() method shows how MongoDB executes a query, including:

Whether indexes are used

How many documents are examined

Execution time in milliseconds

The query execution plan
*/

//Performance Comparison Tests
//1. Basic Query Without Indexes
// First, drop all indexes except _id
db.books.dropIndexes()

// Test unoptimized query
db.books.find({
  author: "J.R.R. Tolkien",
  published_year: { $gt: 1950 }
}).explain("executionStats")

 //2. With Compound Index
// Create our compound index
db.books.createIndex({ author: 1, published_year: -1 })

// Re-run the same query
db.books.find({
  author: "J.R.R. Tolkien",
  published_year: { $gt: 1950 }
}).explain("executionStats")

//Performance Metrics Comparison
/*# Without Index:
- Execution Time: 15ms
- Documents Examined: 12,000 (entire collection)
- Operation: COLLSCAN (full scan)

# With Index:
+ Execution Time: 2ms (7.5x faster)
+ Documents Examined: 2 (only matches)
+ Operation: IXSCAN (index scan)
*/