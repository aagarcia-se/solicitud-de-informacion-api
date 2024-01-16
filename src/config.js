import { config } from "dotenv";

config();

export const PORT        = process.env.PORT || 3000;
export const DB_HOST     = process.env.DB_HOST || "bll49o2cjyg7d0k84tzn-mysql.services.clever-cloud.com";
export const DB_USER     = process.env.DB_USER || "uadndhe4yj3ftgua";
export const DB_PASSWORD = process.env.DB_PASSWORD || "BfZP0zOyb2K96kUEicdK";
export const DB_PORT     = process.env.DB_PORT || 3306;
export const DB_DATABASE = process.env.DB_DATABASE || "bll49o2cjyg7d0k84tzn";

