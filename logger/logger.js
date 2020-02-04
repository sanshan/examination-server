const { createLogger, format, transports } = require('winston')

const path = require('path')

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.errors({stack: true}),
        format.splat(),
        format.json()
    ),
    defaultMeta: { service: 'Logger service' },
    transports: [
        new transports.File({ filename: path.resolve(__dirname, '../logs/error.log'), level: 'error' }),
        new transports.File({ filename: path.resolve(__dirname, '../logs/combined.log') })
    ],
    exceptionHandlers: [
        new transports.File({ filename: path.resolve(__dirname, '../logs/exceptions.log') })
    ]
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple()
        )
    }))
}

module.exports = logger

