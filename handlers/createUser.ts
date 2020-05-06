import { createUser } from "../services/users.ts";

export default async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }

  const {
    value: { name, role, jiraAdmin },
  } = await request.body();

  if (!name || !role) {
    response.status = 422;
    response.body = { msg: "Incorrect User data. Name and Role are required" };
    return;
  }

  const userId = await createUser({ name, role, jiraAdmin });

  response.status = 200;
  response.body = { msg: "User created", userId };
  return;
};
