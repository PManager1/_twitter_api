var stdin = process.stdin; 

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk) {
  process.stdout.write('data: ' + chunk);
});

stdin.on('end', function () {
  process.stdout.write('end');
});




// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// process.stdin.on('data', function (chunk) {
//   process.stdout.write('data: ' + chunk);
// });

// process.stdin.on('end', function () {
//   process.stdout.write('end');
// });