/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict'

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 4)

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
}

// Тут начинаем выполнение задач

// Запускаем цикл на вопросы. Если ответы на вопросы удовлетворяют условию, то мы записываем ответы в объект. Если же нет, то мы выводим error,  уменьшаем i на 1. В таком случае если пользователь сразу же неправильно вводит данные, то его i становится равна 0, и ему всё нужно делать заново. Если же он ответит хотя бы на 1 вопрос правильно, а на второй нет, то i будет уменьшаться до 1 до тех пор, пока он правильно не ответит на вопрос

// Первый цикл
for (let i = 0; i < 2; i++) {
  let lastFilm = prompt(
    'Один из последних просмотренных фильмов?',
    'terminator'
  )
  let markLastFilm = prompt('На сколько оцените его?', 5.6)
  if (
    lastFilm !== null &&
    markLastFilm !== null &&
    lastFilm !== '' &&
    markLastFilm !== '' &&
    lastFilm.length < 50
  ) {
    personalMovieDB.movies[lastFilm] = markLastFilm
    console.log(i)
  } else {
    console.log('error')
    i--
  }
}
if (
  personalMovieDB.count === null ||
  isNaN(personalMovieDB.count) ||
  personalMovieDB.count === ''
) {
  alert('Произошла ошибка')
} else if (personalMovieDB.count < 10) {
  alert(
    `Просмотрено довольно мало фильмов: ${personalMovieDB.count} фильма просмотрено`
  )
} else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
  alert(`Вы классический зритель: ${personalMovieDB.count} фильма просмотрено`)
} else if (personalMovieDB.count > 30) {
  alert(`Вы киноман: просмотрено ${personalMovieDB.count} фильмов`)
}

console.log(personalMovieDB.movies)
// Код возьмите из предыдущего домашнего задания
