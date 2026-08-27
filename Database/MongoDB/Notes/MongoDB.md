# MongoDB

## The Shell

- mongosh //to start
- use college //to create & use a new database called "college"

## Shortcuts

- ctrl+l //clear
- exit
- help for all command details

## BSON Data

- Binary JSON

- BSON (Binary JSON) is a binary-encoded data format used to store and transfer structured data and documents, primarily utilized by the MongoDB Database. It extends the familiar JSON model by adding support for extra data types and optimizing for fast computer parsing and scanning


## Collections

- Documents: Mongo stores data in form of documents (BSON docs)

- Collection: MongoDB stores documents in collections.

## INSERT in DB

### insertOne

```mongodb

show collection // similar to SHOW TABLES

db.student.insertOne({name: "adam", marks:80})  //Inserts a single document into a collection

db.student.find() //Find the data of the collection
```
- returns a document that includes the newly inserted document's _id field value. 

<i>If a collection does not exist, MongoDB creates the collection when you first store data for that collection</i>


### inserMany (array of documents)

- db.collection.insertMany() can insert multiple documents into a collection. Pass an array of documents to the method.

```mongodb
db.student.insertMany([{name:"Taylor", marks: 65}, {name:"Arianna", city:"NY"}])

```


## FIND in DB 


```mongodb
db.collection.find() //returns everything


// For specific queries

db.collection.find({key:value}) //returns cursor(array) reference to original
db.collection.findOne({key:value}) //returns document

db.student.find({name: "Ariana", city: "NY"})

```


### Query Operators

1. Find students where marks > 75

- db.student.find( {marks: {$gt:75}})

2. Find students who live in NY or Bay Lands
- db.student.find({city: {$in: ["NY", "Bay Lands"]}})

3. Find students who scored > 75 or live in "NY"
- db.student.find({$or: [{marks: {$gt:75}}, {city:"Delhi"}] })


- $eq:

Matches values equal to a specified value.

- $gt:

Matches values greater than a specified value.

- $gte:

Matches values greater than or equal to a specified value.

- $in:

Matches any values specified in an array.

- $lt:

Matches values less than a specified value.

- $lte:

Matches values less than or equal to a specified value.

- $ne:

Matches all values not equal to a specified value.

- $nin:

Matches if the value is not equal to any of a given list of values.

- $and, $nor, $not, $or

#### Fields

- $inc

Increments the value of the field by the specified amount.
```js
Company.updateMany({country: "USA"}, {$inc: {employees: 10000}})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

```
- $min

Only updates the field if the specified value is less than the existing field value.

- $max

Only updates the field if the specified value is greater than the existing field value.

- $mul

Multiplies the value of the field by the specified amount.

- $rename

Renames a field.

- $set

Sets the value of a field in a document.

- $setOnInsert

Sets the value of a field if an update results in an insert of a document. Has no effect on update operations that modify existing documents.

- $unset

Removes the specified field from a document.


## UPDATE in DB
an Update operation consists of adding, removing, or modifying fields in one or more documents

- db.collection.updateOne(<filter>, <update>, <options>)
<br>
db.student.updateOne({name:"Taylor"}, {$set: {marks: 99}})
Updates at most a single document that match a specified filter even though multiple documents may match the specified filter.



- db.collection.updateMany()
<br>
db.student.updateMany({marks: {$gt: 85}}, {$set: {city: "Bay Lands"}})

Update all documents that match a specified filter.

- db.collection.replaceOne()
<br>
db.student.replaceOne({name: "Steve"}, {name: "Casper", marks: 97, city: "NY"})
Replaces at most a single document that match a specified filter even though multiple documents may match the specified filter. Id remains the same.

### Update Operators

- $addFields //To add new field(key:value)
- $set //Adds new fields to documents. $set outputs documents that contain all existing fields from the input documents and newly added fields.

In Maximum cases we use set
- $project
- $unset
- $replaceRoot
- $replaceWith



## Nesting

- db.student.insertOne({name: "Eugen", performance: {marks:91, grade: "A"}})

- db.student.find({"performance.marks": 91})


## DELETE in DB

- deleteOne
<br>
db.collection.deleteOne(<filter>, <option>)
db.student.deleteOne({city: "Bay Lands"})

- deleteMany
db.student.deleteMany({marks: {$lt: 98}})
db.student.deleteMany({}) //Delete all

- db.dropDatabase()