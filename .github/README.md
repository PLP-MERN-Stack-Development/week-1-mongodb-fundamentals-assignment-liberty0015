📚 PLP Bookstore - MongoDB Assignment
bash
┌───────────────────────────────────────┐
│  ___  ___ _ __   ___  _ __ ___   ___  │
│ / __|/ _ \ '_ \ / _ \| '_ ` _ \ / _ \ │
│ \__ \  __/ |_) | (_) | | | | | |  __/ │
│ |___/\___| .__/ \___/|_| |_| |_|\___| │
│          |_|                          │
└───────────────────────────────────────┘

Welcome to the **PLP Bookstore MongoDB assignment**! This project helps you learn core MongoDB concepts including setup, CRUD operations, and advanced data analysis using aggregation pipelines.

> 🚀 **Goal:** Learn how to use MongoDB to build and manage a real-world bookstore database.

---

🚀 Quick Start Guide
📋 Prerequisites
Node.js (v16+)

MongoDB (Local or Atlas)

bash
# Check installations
node --version
mongod --version
🔧 Setup
bash
# Clone repo (if applicable)
git clone https://github.com/PLP-MERN-Stack-Development/week-1-mongodb-fundamentals-assignment-liberty0015.git
cd week-1-mongodb-fundamentals-assignment-liberty0015

# Install dependencies
npm install
🎮 Interactive Script Runner
bash
# Run with animated progress
node --loader ts-node/esm ./scripts/run-with-animation.ts
(Watch the books fly into your database! 📖➡️🗄️)

📂 File Structure
.
├── 📁 data/
│   └── 📄 books.json          # Sample dataset
├── 📁 scripts/
│   ├── 📄 insert_books.js     # Main insertion script
│   └── 📄 animate.js          # Cool ASCII animation
├── 📄 package.json
└── 📄 README.md
🛠️ How to Use
1️⃣ Initialize Database
bash
# Start MongoDB service (if local)
sudo systemctl start mongod

# Run the interactive setup
npm run setup
(Follow the on-screen wizard 🧙‍♂️)

2️⃣ Insert Sample Data
bash
# Standard version
node scripts/insert_books.js

# Fun animated version ✨
npm run insert-books
3️⃣ Run Queries
bash
# Launch MongoDB shell
mongosh

# In mongo shell:
use plp_bookstore
db.books.find({genre: "Fantasy"})
🎓 Assignment Tasks Checklist
✅ Task 1: Database setup
✅ Task 2: CRUD operations
✅ Task 3: Advanced queries
✅ Task 4: Aggregation pipelines

🌟 Bonus Features
bash
# Generate a visual report
npm run report
(Creates a nice chart of book stats 📊)

🆘 Troubleshooting
bash
# If you get connection errors:
npm run fix-connection

# Reset everything:
npm run nuclear-reset
diff
+ Pro Tip: Run 'npm start' for the full interactive experience!