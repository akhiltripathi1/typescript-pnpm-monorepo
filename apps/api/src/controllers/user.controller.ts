import type { Request, Response } from "express";

import type { User, CreateUserInput } from "@repo/shared";

import { successResponse } from "@repo/utils";

const users: User[] = [
  {
    id: "1",
    name: "Anish Tiwari",
    email: "anish@example.com"
  }
];

export function getUsers(_req: Request, res: Response) {
  res.json(
    successResponse(users, "Users fetched successfully")
  );
}

export function createUser(req: Request<{}, {}, CreateUserInput>,res: Response) {
  const { name, email } = req.body;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !email.trim()
  ) {
    res.status(400).json({
      success: false,
      message: "Name and email are required"
    });
    return;
  }

  const user: User = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: email.trim()
  };

  users.push(user);

  res.status(201).json(
    successResponse(user, "User created successfully")
  );
}