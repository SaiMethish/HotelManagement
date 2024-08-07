"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const log = (constructor) => {
    console.log("logging constructor");
    console.log(constructor);
    constructor.prototype.created_date = new Date();
};
let Person = class Person {
    constructor(nameVal) {
        this.name = nameVal;
        console.log(this.name);
    }
};
Person = __decorate([
    log
], Person);
const person = new Person('u');
console.log(person.created_date);
const logExecutionTime = (target, propertyName, descriptor) => {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log("method:" + propertyName + "execution started  at " + args);
        args[0] = 20;
        const result = originalMethod.apply(this, args);
        console.log("method " + propertyName + "execution finished");
        return result;
    };
    return descriptor;
};
class Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    logExecutionTime
], Calculator.prototype, "add", null);
const calculator = new Calculator();
console.log(calculator.add(3, 4));
function enumerable(isEnumerable) {
    return function (target, propertykey, descriptor) {
        descriptor.enumerable = isEnumerable;
    };
}
class Greeter {
    constructor() {
    }
    greet() {
        return "hello greet";
    }
    shout() {
        return "hello shout";
    }
}
__decorate([
    enumerable(true)
], Greeter.prototype, "greet", null);
__decorate([
    enumerable(true)
], Greeter.prototype, "shout", null);
const greeter = new Greeter();
for (const key in greeter) {
    console.log(key);
}
const logger_1 = require("./Logger/logger");
logger_1.logger.info("console message");
logger_1.logger.error("error message");
logger_1.logger.warn("warning message");
