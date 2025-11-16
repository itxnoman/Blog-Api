const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

 
app.use('/api/blogs', blogRoutes);


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(' MongoDB connected');
  app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
})
.catch(err => console.error(' MongoDB error:', err));
