import {createLogger,transports,format} from "winston";

export const logger=createLogger({
    transports:[
        new transports.File({
        dirname:"logs",
        filename:"error.log",
        level:"error"
        }),
        new transports.File({
            dirname:"logs",
            filename:"info.log",
            level:"info"
        }),
        new transports.File({
            dirname:"logs",
            filename:"warn.log",
            level:"warn"
        })
    ],
    format:format.combine(
        format.timestamp(),
        format.printf(({timestamp,level,message})=>{
            return `created at [${timestamp}] level: ${level}  message: ${message}`;
        })
    )
});

