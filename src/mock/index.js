import Mock from "mockjs";
import * as users from "./userData";

//users
Mock.mock('/api/index', "post", () => {
    return users.UserData;
});