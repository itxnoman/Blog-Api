BLOG API

A simple RESTful Blog API built with Node.js, Express, and MongoDB using Mongoose ORM.



FEATURE :

- Create, Read, Update, Delete (CRUD) blog posts.
- MongoDB + Mongoose for database.
- Environment config via `.env`.


Installation & Setup :

1. Clone the repository

2. Install dependencies
  - npm install


3. Create .env file in root folder

 - PORT=5000
 - MONGO_URI=mongodb://127.0.0.1:27017/blogDB


4. Start the server

 npm run dev

 Or for production:
 
  npm start



API Endpoints

 Base URL: http://localhost:5000/api/blogs


Method	Endpoint	Description

 POST	/	Create a blog
 
 GET	/	Get all blogs

 GET	/:id	Get single blog by ID
 
 PUT	/:id	Update blog by ID
 
 DELETE	/:id	Delete blog by ID



Tech Used :

 Node.js.
 
 Express.js.
 
 MongoDB.
 
 Mongoose.
 
  
