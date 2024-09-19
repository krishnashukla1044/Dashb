const bcrypt = require('bcryptjs');

const testPassword = 'S@!23';
bcrypt.hash(testPassword, 10, (err, hash) => {
  if (err) throw err;
  console.log('Generated hash:', hash);
});