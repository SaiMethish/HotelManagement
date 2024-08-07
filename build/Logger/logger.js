"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
exports.logger = (0, winston_1.createLogger)({
    transports: [
        new winston_1.transports.File({
            dirname: "logs",
            filename: "error.log",
            level: "error"
        }),
        new winston_1.transports.File({
            dirname: "logs",
            filename: "combined.log"
        }),
        new winston_1.transports.File({
            dirname: "logs",
            filename: "warn.log",
            level: "warn"
        })
    ],
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] : ${level}: ${message}`;
    }))
});
