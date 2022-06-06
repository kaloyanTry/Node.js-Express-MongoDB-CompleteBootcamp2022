const fs = require('fs');
const superagent = require('superagent');
//superagent = client-side HTTP request library with many fatures

/////////////////////////////////////////////////////////////////////////////////////////////
// 1. Old way of doing async with calbacks: .get(...data) .then(respoce =>...) .catch(error):

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);

//       fs.writeFile('dog-img.txt', res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log('Random dog image saved to file!');
//       });
//     })
//     .catch((err) => console.log(err.message));
// });
////////////////////////////////////////////////////////////////////////////////////////////////

// 2. A little better way, using Promises:
// const readFilePromise = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not found the file 😰');
//       resolve(data);
//     });
//   });
// };
// const writeFilePromise = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) reject('I could not write the file 😩');
//       resolve('Successfully wrote the file 😁');
//     });
//   });
// };

// readFilePromise(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writeFilePromise('dog-img.txt', res.body.message);
//   })
//   .then(() => {
//     console.log('Random dog image saved to the file');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
////////////////////////////////////////////////////////////////////////////

// // 3. Async/await Modern solution:
const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not found the file 😰');
      resolve(data);
    });
  });
};
const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('I could not write the file 😩');
      resolve('Successfully wrote the file 😁');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePromise(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    writeFilePromise('dog-img.txt', res.body.message);
    console.log('Random dog image saved to file.');
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
getDogPic();
