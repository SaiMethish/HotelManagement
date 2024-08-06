"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(u_id, u_name, email, ph_no) {
        this.user_id = u_id;
        this.user_name = u_name;
        this.email = email;
        this.ph_no = ph_no;
    }
    toString() {
        return `user_id: ${this.user_id} user_name: ${this.user_name} email: ${this.email}
        ph_no: ${this.ph_no}`;
    }
}
exports.User = User;
