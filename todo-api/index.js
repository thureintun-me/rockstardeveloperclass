const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const client = new MongoClient("mongodb://localhost:27017/");
const db = client.db("todo");
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/tasks", async function (req, res) {
  const data = await db.collection("tasks").find().toArray();
  console.log("Data", data);
  return res.json(data);
});

app.get("/tasks/:id", async function (req, res) {
  const { id } = req.params;
  const data = await db.collection("tasks").findOne({ _id: new ObjectId(id) });
  return res.json(data);
});

app.delete("/tasks/:id", async function (req, res) {
  const { id } = req.params;
  const data = await db
    .collection("tasks")
    .deleteOne({ _id: new ObjectId(id) });
  return res.json(data);
});

app.post("/tasks", async (req, res) => {
  const { name } = req.body;
  console.log("name", name);
  if (!name) return res.status(400).json({ msg: "name required" });

  const result = await db.collection("tasks").insertOne({
    name: name,
    done: false,
  });

  return res.json({
    name: name,
    id: result.insertedId,
    done: false,
  });
});

app.listen("8080", () => {
  console.log("Todo api on port 8888");
});
