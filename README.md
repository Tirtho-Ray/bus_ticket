# Bus Ticket Booking Application

A simple bus ticket booking application built with Node.js, MongoDB, and Stripe.

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
```
#//1️⃣ Using Git
git clone <[repo-url](https://github.com/Tirtho-Ray/bus_ticket)>
cd <your-project-directory>

#//2️⃣ Using Docker 
Pull the latest Docker image:
docker pull tirtho10/bus_ticket_booking:latest
Run the container with your environment variables:
docker run -p 8080:8080 --env-file .env tirtho10/bus_ticket_booking:latest

Features

User authentication using JWT (access & refresh tokens)
Password hashing with bcrypt
Stripe payment integration
MongoDB database support
Dockerized for easy deployment
