# ⚡ Realtime Chat App with AWS AppSync, DynamoDB & GraphQL

A fully serverless, production-grade **real-time chat application** that leverages **AWS AppSync**, **GraphQL subscriptions**, and **DynamoDB** to deliver low-latency two-way messaging with live updates via WebSockets. Built from scratch with custom schema design, resolver mapping, and frontend WebSocket integration — all deployed via Serverless Framework.

---

## 🚀 Key Features

✅ **Live Messaging via GraphQL Subscriptions**  
✅ **AWS AppSync WebSocket Integration**  
✅ **DynamoDB-backed Storage with VTL Mappings**  
✅ **Custom GraphQL API Schema & Mutations**  
✅ **Secure API Key Auth**  
✅ **Modular Webpack Build + Hot Reloading Dev Server**  
✅ **Browser-Based JS Client with Real-Time Output**  

---

## 🧱 Tech Stack

| Layer         | Tools / Services                                |
|---------------|-------------------------------------------------|
| Frontend      | JavaScript (ES6+), Webpack, Babel               |
| API Gateway   | AWS AppSync with GraphQL + Subscriptions        |
| Backend DB    | Amazon DynamoDB                                 |
| Live Updates  | WebSockets via AppSync                          |
| Infra as Code | Serverless Framework                            |
| Build Tools   | Webpack, Babel, Node.js                         |

---

## 🧠 What This Project Demonstrates

This project reflects **hands-on experience in cloud-native, real-time architecture** and full-stack serverless development:

- ✅ Designing and deploying a real-time **GraphQL API** using AWS AppSync.
- ✅ Building scalable backend logic with **DynamoDB resolvers** and custom VTL templates.
- ✅ Setting up a **live frontend subscription** over WebSocket that listens for messages directed to specific users.
- ✅ Using `webpack-dev-server` and Babel for cross-browser compatible development.
- ✅ Handling edge cases like invalid resolvers, identity injection, and subscription filtering.

---

## 🧩 How It Works


1. **Mutation:** A user sends a message via `message(to, body)`.
2. **Resolver:** The message is stored in DynamoDB with a unique ID and timestamp.
3. **Subscription:** The recipient listens via `subscription inbox(to)` and receives the message live in-browser.

---

## 📂 Project Structure

realtime-chat/
├── src/ # Frontend client (JS)
├── schema/ # GraphQL schema
├── serverless/ # Infrastructure deployment
├── serverless.yml # AppSync + DynamoDB config
├── webpack.config.js # Webpack bundler for browser
└── README.md # You are here!

---

## 🧪 Getting Started

**Install dependencies:**
```bash
npm install
