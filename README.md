# Bus Ticket Booking Application

A simple bus ticket booking application built with **Node.js**, **MongoDB**, and **Stripe**.

---

## Table of Contents

- [Environment Variables](#environment-variables)  
- [Installation](#installation)  
- [Features](#features)  
- [License](#license)  

---

## Environment Variables

Create a `.env` file in the root directory and add the following:

```env
DE_ENV=development
PORT=8080
DB_URL=mongodb+srv://<your_mongo_connection_string>

# Bcrypt Salt Rounds
BCRYPT_SALT_ROUNDS=6

# JWT Secrets and Expiry
JWT_ACCESS_SECRET=<access_secret>
JWT_ACCESS_EXPIRES_IN=5d
JWT_REFRESH_SECRET=<refresh_secret>
JWT_REFRESH_EXPIRES_IN=1y

# Stripe Keys
STRIPE_PUBLISHABLE_KEY=<your_stripe_publishable_key>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
Installation

1️⃣ Using Git
Clone the repository and install dependencies:
git clone https://github.com/Tirtho-Ray/bus_ticket.git
cd bus_ticket
yarn install        # or npm install
yarn dev            # or npm run start/dev
Your application will run at:

http://localhost:8080
2️⃣ Using Docker
Pull the latest Docker image:
->docker pull tirtho10/bus_ticket_booking:latest
Run the container with your environment variables:
->docker run -p 8080:8080 --env-file .env tirtho10/bus_ticket_booking:latest
-p 8080:8080 → maps container port 8080 to your local port 8080

--env-file .env → loads environment variables from your .env file

Your application will now be accessible at:

http://localhost:8080


Features
User authentication using JWT (access & refresh tokens)

Password hashing with bcrypt

Stripe payment integration

MongoDB database support

Dockerized for easy deployment

License
This project is licensed under the MIT License.
