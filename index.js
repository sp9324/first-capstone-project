import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const tasks = [];
const data = {
    items: ["dsa", "startup", "flutter", "neural  networks"]
};

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/tasks", (req, res) => {
    res.render("tasks.ejs", { tasks: tasks });
});

app.get("/dummy", (req, res) => {
    
    res.render("dummy.ejs", data);
});

app.post("/submit", (req, res) => {
    const task = req.body["task"];
    tasks.push(task);
    res.redirect("/");
});

// Clear tasks
app.post("/clear-tasks", (req, res) => {
    tasks.length = 0; // Clears the tasks array
    res.redirect("/tasks"); // Redirect back to the tasks page
});

// Clear dummy list
app.post("/clear-dummy", (req, res) => {
    data.items=[];
    res.redirect("/dummy"); // Redirect back to the dummy page
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});