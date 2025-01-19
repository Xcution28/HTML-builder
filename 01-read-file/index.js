const fs= require('fs');
const path = require('path');

const file_path = path.join(__dirname, 'text.txt');
const read_steam = fs.createReadStream(file_path, { encoding: 'utf8' });

read_steam.pipe(process.stdout);
read_steam.on('error', (error) => {
  console.error('Произошла ошибка при чтении файла', error);
});
