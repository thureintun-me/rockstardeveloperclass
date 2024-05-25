const express = require("express");
const app = express();

const { MongoClient, ObjectId } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017/");
const db = client.db("travel");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/records", async (req, res) => {
  const data = await db.collection("records").find().toArray();
  return res.status(200).json({
    meta: { total: data.length },
    data,
  });
});

app.get("/api/records/:id", async (req, res) => {
  const id = req.params.id;
  const result = db.collection("records").findOne({
    _id: new ObjectId(id),
  });
  return res.status(200).json(result);
});

app.post("/api/records", async (req, res) => {
  const { name, age } = req.body;
  if (!name) return res.status(400).json({ msg: "name is required" });
  if (!age) return res.status(400).json({ msg: "age is required" });
  const result = await db.collection("records").insertOne({
    name: name,
    age: age,
  });

  return res.status(200).json({
    id: result.insertedId,
    name: name,
    age: age,
  });
});

app.delete("/api/records/:id", async (req, res) => {
  const id = req.params.id;
  const result = await db.collection("records").deleteOne({
    _id: new ObjectId(id),
  });
  return res.sendStatus(204);
});

app.put("/api/records/:id", async (req, res) => {
  const { name, age } = req.body;
  const { id } = req.params;

  const result = await db.collection("records").updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        name: name,
        age: age,
      },
    }
  );

  return res.sendStatus(204);
});

app.listen("8080", () => {
  console.log("Server running at port 8000...");
});
