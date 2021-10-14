const request = require("supertest");
const Task = require("../src/models/task");
const app = require("../src/app");
const { userOne, userOneId, setUpDatabase } = require("../tests/fixtures/db");

beforeEach(setUpDatabase);
test("Should create task for user", async () => {
  const response = await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: "From my test",
      task: "Testing The Name Of The Task",
    })
    .expect(201);

  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull();
  expect(task.completed).toBe(false);
});
