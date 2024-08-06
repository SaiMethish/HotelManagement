"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUser = exports.getUsers = exports.createUser = void 0;
const __1 = require("..");
const User_1 = require("../model/User");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const createUser = () => {
    let userid;
    if (__1.userList.length == 0)
        userid = 1;
    else
        userid = __1.userList.length - 1;
    const name = prompt("enter user name");
    const email = prompt("enter email");
    const ph_no = prompt("enter ph_no");
    const user = new User_1.User(userid, name, email, ph_no);
    __1.userList.push(user);
    return user;
};
exports.createUser = createUser;
const getUsers = () => {
    for (let i of __1.userList)
        console.log(i.toString());
};
exports.getUsers = getUsers;
const getUser = (id) => {
    for (let i of __1.userList) {
        if (i.user_id == id)
            return i;
    }
    return new User_1.User(-1, "", "", "");
};
exports.getUser = getUser;
const deleteUser = (id) => {
    let idx = -1;
    for (let i = 0; i < __1.userList.length; i++) {
        if (__1.userList[i].user_id == id)
            idx = i;
    }
    __1.userList.splice(idx, 1);
};
exports.deleteUser = deleteUser;
