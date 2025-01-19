const fs = require('fs');
const path = require('path');
const readline = require('readline');

const file_path = path.join(__dirname, 'text.txt');
const write_steam = fs.createWriteStream(file_path, { flags: 'a' });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Приветики! Напиши что-нибудь и это запишется в файл. Напиши exit или нажми ctrl + C чтобы закончить.');

const setInput = (input) => {
  if (input.toLowerCase() === 'exit') {
    console.log('Пока!');
    write_steam.end();
    rl.close();
    process.exit(0);
  } else {
    write_steam.write(input + '\n');
    console.log('Текст записан в файл');
  }
};

rl.on('line', setInput);

rl.on('SIGINT', () => {
  console.log('\nПока!');
  write_steam.end();
  rl.close();
  process.exit(0);
});