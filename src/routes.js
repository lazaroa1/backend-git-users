import { Router } from "express";
import UsersController from "./Controller/UserController.js";

const routes = Router();

routes.get("/users", UsersController.getUsers);

routes.get("/user/:userName", UsersController.getUser);

routes.get("/user/repositories/:userName", UsersController.getRepositories);

export default routes;
