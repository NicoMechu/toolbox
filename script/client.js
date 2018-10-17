const req = require('request-promise');
// Get arguments
const args = process.argv.slice(2);

// Check args are valid
if(args.length === 0){
  console.error('\x1b[31m','Error: Missing argument')
  process.exit(1);
}else if(args.length > 1){
  console.error('\x1b[31m', 'Error: Wrong number of arguments, only one accepted')
  process.exit(1);
}

const host = 'http://localhost:5000'
const data = args[0]

var options = {
    method: 'POST',
    uri: host + '/echo',
    body: { echo: data },
    json: true
};
 
// Display data send   
console.log("\x1b[37m",'\nData send:')
console.log("\x1b[36m", data)
console.log("\x1b[37m", '--------------------------' )

req(options)
  .then(function (parsedBody) {
      // Display Api response  
      console.log("\x1b[37m", '\nData received:')
      console.log('\x1b[32m', parsedBody.response)
      console.log("\x1b[37m", ' ' )
  })
  .catch(function (err) {
      // Display error  
      console.error('\x1b[31m', err.message)
      console.log("\x1b[37m", ' ' )
      process.exit(1);
  });
