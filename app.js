let history = history.back(); // откатиться по истории назад
history = history.forward(); // пройти по истории вперед

let search = location.search(); // здесь хранятся гет-запросы после знака вопроса
search = location.search.split("&"); // получить массив из запросов
search = location.replace("https://wikipedia.org"); // программно перейти на другую страницу
