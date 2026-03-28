## Setup
1. Copy `.env.example` to `.env` and fill in your DB credentials
2. Run schema: `mysql -u root -p < server/db/schema.sql`
3. cd server and then npm install
4. npm start

It uses express, mysql2, dotenv (to safely read from the env file), cors


to run both:
cd server
node index.js

cd client
npm start