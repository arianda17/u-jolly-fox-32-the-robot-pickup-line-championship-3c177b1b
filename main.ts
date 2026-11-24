const fs = require('fs');

const LINE =
  'Are you a capacitor? Because I\'ve been charging up all day and I\'m about to spark.';

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', LINE + '\n');
process.stdout.write(LINE + '\n');