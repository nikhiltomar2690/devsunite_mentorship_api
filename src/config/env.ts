import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.string().default("development"),

  PORT: z.coerce.number().int().positive(),

  DATABASE_URL: z.string().min(1, "DATABASE URL is required"),

  JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),

  REDIS_URL: z.string().min(1),

  RAZORPAY_KEY_ID: z.string().min(1),
  RAZORPAY_KEY_SECRET: z.string().min(1),

  ZEPTO_API_KEY: z.string().min(1),
  ZEPTO_FROM_EMAIL: z.string().min(1),

  TWILIO_SID: z.string().min(1),
  TWILIO_AUTH_TOKEN: z.string().min(1),
  TWILIO_WHATSAPP_NUMBER: z.string().min(1),

  FIREBASE_PROJECT_ID: z.string().min(1),
  FIREBASE_CLIENT_EMAIL: z.string().email(),
  FIREBASE_PRIVATE_KEY: z.string().min(1),
});

const _env = envSchema.safeParse(process.env);

if(!_env.success){
    console.error("Invalid env variables");
    console.error(_env.error.format());
    process.exit(1);
}

const env = _env.data;


export const ENV = {
  NODE_ENV: env.NODE_ENV,
  PORT: env.PORT,

  DATABASE_URL: env.DATABASE_URL,
  JWT_SECRET: env.JWT_SECRET,

  REDIS_URL: env.REDIS_URL,

  RAZORPAY: {
    KEY_ID: env.RAZORPAY_KEY_ID,
    KEY_SECRET: env.RAZORPAY_KEY_SECRET,
  },

  EMAIL: {
    API_KEY: env.ZEPTO_API_KEY,
    FROM: env.ZEPTO_FROM_EMAIL,
  },

  TWILIO: {
    SID: env.TWILIO_SID,
    AUTH_TOKEN: env.TWILIO_AUTH_TOKEN,
    WHATSAPP_NUMBER: env.TWILIO_WHATSAPP_NUMBER,
  },

  FIREBASE: {
    PROJECT_ID: env.FIREBASE_PROJECT_ID,
    CLIENT_EMAIL: env.FIREBASE_CLIENT_EMAIL,
    PRIVATE_KEY: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  },
} as const;