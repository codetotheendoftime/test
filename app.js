const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
// Thiết lập Pug làm template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Thiết lập thư mục public để phục vụ các tệp tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa route cho trang chủ
app.get('/', (req, res) => {
  res.render('index', { title: 'Hello, Pug!', message: 'Welcome to Pug with Node.js!' });
});

// Lắng nghe trên cổng đã chỉ định
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
