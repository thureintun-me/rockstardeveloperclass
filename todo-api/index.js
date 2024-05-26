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

app.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) return res.status(400).json({ msg: "name required" });

  try {
    const result = await db.collection("tasks").updateOne(
      {
        _id: new ObjectId(id),
      },

      {
        $set: {
          name,
        },
      }
    );

    return res.json(result);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.put("/tasks/:id/toggle", async (req, res) => {
  const { id } = req.params;
  const data = await db.collection("tasks").findOne({ _id: new ObjectId(id) });
  const result = await db.collection("tasks").updateOne(
    {
      _id: new ObjectId(id),
    },

    {
      $set: {
        done: !data.done,
      },
    }
  );

  return res.json(result);
});

app.listen("8080", () => {
  console.log("Todo api on port 8888");
});
