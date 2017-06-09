const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/index.html`);
const stats = fs.readFileSync(`${__dirname}/../client/stats.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getStats = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(stats);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getStats = getStats;