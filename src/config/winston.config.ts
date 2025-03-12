
import { createLogger, format, transports } from 'winston';
import { utilities } from 'nest-winston';

const winstonLogger = createLogger({
	transports: [
		new transports.Console({
			level: 'info',
			format: format.combine(
				format.timestamp(),
				utilities.format.nestLike(),
			),
		}),
		new transports.DailyRotateFile({
			filename: 'logs/errors/error-%DATE%.log', // 日志名称，占位符 %DATE% 取值为 datePattern 值。
			datePattern: 'YYYY-MM-DD', // 日志轮换的频率，此处表示每天。
			zippedArchive: true, // 是否通过压缩的方式归档被轮换的日志文件。
			maxSize: '10m', // 设置日志文件的最大大小，m 表示 mb 。
			maxFiles: '14d', // 保留日志文件的最大天数，此处表示自动删除超过 14 天的日志文件。
			level: 'error', // 日志类型，此处表示只记录错误日志。
			format: format.combine(
				format.timestamp(),
				format.uncolorize(),
			),
		}),
		new transports.DailyRotateFile({
			filename: 'logs/warnings/warning-%DATE%.log',
			datePattern: 'YYYY-MM-DD',
			zippedArchive: true,
			maxSize: '10m',
			maxFiles: '14d',
			level: 'warn',
			format: format.combine(
				format.timestamp(),
				format.uncolorize(),
			),
		}),
		new transports.DailyRotateFile({
			filename: 'logs/app/app-%DATE%.log',
			datePattern: 'YYYY-MM-DD',
			zippedArchive: true,
			maxSize: '10m',
			maxFiles: '14d',
			format: format.combine(
				format.timestamp(),
				format.uncolorize(),
			),
		}),
	],
});

export default winstonLogger;


