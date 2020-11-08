let config;

config = {
  secret: process.env.JWT_SECRET,
  port: 5000,
  databaseURL: process.env.DATABASE_URI,
};

export default { ...config };