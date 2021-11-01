const https = require('https');

const items = 10; 

const renderIndex = (req, res, json) => {
  let searchedValue = req.body.searchValue || req.query.searchValue || ''; 
  let page = req.query.page || 1; 

  const indexStart = (page - 1) * items; 
  const indexEnd = page * items;

  const filteredData = global.jsonResponse.filter((x) =>
    x.name.toLowerCase().includes(searchedValue.toLowerCase())
  );

  let stuff = {
    data: filteredData.slice(indexStart, indexEnd), 
    path: 'proveAssignments/03',
    title: 'Lesson 3 Prove Assignment',
    searchedValue: searchedValue,
    page: page,
    numPages: Math.ceil(filteredData.length / items),
  };

  res.render('pages/proveAssignments/pr08', stuff);
};

exports.processJson = (req, res, next) => {
  
  var url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

  https
    .get(url, function (response) {
      var body = '';

      response.on('data', function (chunk) {
        body += chunk;
      });

      response.on('end', function () {
        global.jsonResponse = JSON.parse(body);
        
        renderIndex(req, res, global.jsonResponse);
      });
    })
    .on('error', function (e) {
      console.log('Got an error: ', e);
    });
};

exports.getIndex = (req, res, next) => {
  renderIndex(req, res, global.jsonResponse); 
};