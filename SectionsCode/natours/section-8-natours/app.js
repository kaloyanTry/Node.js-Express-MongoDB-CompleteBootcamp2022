const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); //middleware = between request and response = .use

app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  console.log('Hello from the middleware 👏');
  next(); // :working with static files
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2) Routs Handler functions: in separate file.

// 3) Routers: in separate file.

// Mounting Middleware:
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;

// Old way without refactoring code:
// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// 4) Start server:

///////////////////////////////////////////////
// 3. Row code, without refactoring:
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// app.get('/api/v1/tours', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: { tours },
//   });
// });

// app.get('/api/v1/tours/:id', (req, res) => {
//   const id = req.params.id * 1;
//   const tour = tours.find((el) => el.id === id);
//   if (!tour) {
//     res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }

//   res.status(200).json({
//     status: 'success',
//     data: { tour },
//   });
// });

// app.post('/api/v1/tours', (req, res) => {
//   const newId = tours[tours.length - 1].id + 1;
//   const newTour = Object.assign({ id: newId }, req.body);
//   tours.push(newTour);

//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: 'success',
//         data: { tour: newTour },
//       });
//     }
//   );
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });

//////////////////////////////////////
//// 2. API Handling Get requests:
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// app.get('/api/v1/tours', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: { tours },
//   });
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
//////////////////////////////////////////
//// 1. Creating simple basic routing API:
// app.get('/', (req, res) => {
// Route handler: (req, res) =>{} calback function
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });
// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });
// const port = 3000;
// app.listen(port, () => {
//   console.log(`App running on port ${port}...`);
// });
///////////////////////////////////////
