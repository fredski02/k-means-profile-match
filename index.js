const kmeans = require('kmeansjs');
// http://stevemacn.github.io/tutorials/docs/cmeans.html
// https://medium.datadriveninvestor.com/applying-machine-learning-to-find-love-3558dafcc4a1

const profiles = require('./profiles.json');
const clusters = Math.floor(profiles.length / 2);

vectoredProfileData = profiles.map((profile) => {
  const { data } = profile;
  const vector = [];
  for (const [key, value] of Object.entries(data)) {
    vector.push(value);
  }
  return vector;
});
console.log(profiles.length / 2);
console.log(`clusters = ${clusters}`);

// var vector = [
//   [10, 2, 30],
//   [30, 20, 2],
//   [30, 30, 3],
//   [10, 10, 1],
//   [20, 1, 30],
//   [1, 25, 30],
// ];

kmeans(vectoredProfileData, clusters, function (err, res) {
  if (err) throw new Error(err);
  console.log(res);
  //do something with the result
});
