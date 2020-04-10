import { Model, Modifiers } from "objection";

export default class User extends Model {
  id!: number;
  email!: string;
  password!: string;
  firstName?: string;
  lastName?: string;
  username!: string;
  image?: string;
  role!: number;

  static tableName = "user";

  static jsonSchema = {
    type: "object",
    required: ["email", "username", "role"],

    properties: {
      id: { type: "integer" },
      email: { type: "string", minLength: 1, maxLength: 255 },
      password: { type: "string", minLength: 1, maxLength: 255 },
      firstName: { type: "string", minLength: 1, maxLength: 255 },
      lastName: { type: "string", minLength: 1, maxLength: 255 },
      username: { type: "string", minLength: 1, maxLength: 255 },
      image: { type: "string" },
      role: { type: "integer" },
    },
  };
}
