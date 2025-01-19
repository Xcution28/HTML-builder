const fs = require('fs/promises');
const path = require('path');

const folder_path = path.join(__dirname, 'secret-folder');

fs.readdir(folder_path, { withFileTypes: true })
  .then((files) => {
    files.forEach((file) => {
      if (file.isFile()) {
        const file_path = path.join(folder_path, file.name);

        fs.stat(file_path)
          .then((stats) => {
            const file_name = path.parse(file.name).name;
            const file_extension = path.extname(file.name).slice(1);

            const file_size = (stats.size / 1024).toFixed(3);

            console.log(`${file_name} - ${file_extension} - ${file_size}kb`);
          })
          .catch((error) => {
            console.error(`Ошибка при получении информации о файле ${file.name}:`, error);
          });
      }
    });
  })
  .catch((error) => {
    console.error('Ошибка при чтении папки', error);
  });