"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const User_1 = require("../model/User");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const getUser = () => {
    const userid = parseInt(prompt("enter the user id"));
    const name = prompt("enter user name");
    const email = prompt("enter email");
    const ph_no = prompt("enter ph_no");
    const user = new User_1.User(userid, name, email, ph_no);
    return user;
};
exports.getUser = getUser;
