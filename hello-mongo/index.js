const { MongoClient, ObjectId } = require("mongodb");

const client = new MongoClient("mongodb://localhost");

const tasks = client.db("todo").collection("tasks");

async function getTasks() {
  const data = await tasks.find().toArray();
  console.log(data);
}

async function insertTask(name) {
  const result = await tasks.insertOne({
    name: name,
    done: true,
  });
  console.log("Insert Done....", result);
  process.exit(0);
}

async function deleteTask(id) {
  const result = await tasks.deleteOne({
    _id: ObjectId(id),
  });
  console.log("Result ", result);
}

insertTask("Learn Mongo");
deleteTask("6651b170153810b8c7a57152");
