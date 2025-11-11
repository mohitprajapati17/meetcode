import dotenv from "dotenv";
dotenv.config();


export const env={


    PORT:process.env.PORT || 3000,
    DB_URL:process.env.DB_URL,
    NODE_ENV:process.env.NODE_ENV || "development",
    CLIENT_URL:process.env.CLIENT_URL ,
    INNGEST_EVENT_KEY:process.env.INNGEST_EVENT_KEY,
    STREAM_API_KEY:process.env.STREAM_API_KEY,
    STREAM_API_SECRET:process.env.STREAM_API_SECRET,
    INNGEST_SIGNING_KEY:process.env.INNGEST_SIGNING_KEY,

}