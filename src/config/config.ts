import dotenv from 'dotenv';

dotenv.config();

const {
    TOKEN,
    LORITTA_ID,
    LORITTA_TOKEN,
    OWNER_ID,
    GUILD_ID
} = process.env;

export const config = {
    TOKEN, 
    LORITTA_ID,
    LORITTA_TOKEN,
    OWNER_ID,
    GUILD_ID,
}