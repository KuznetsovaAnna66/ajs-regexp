export default class Validator {
  static validateUsername(name) {
    return (
      /^[a-z0-9-_]+$/i.test(name) && // Проверка на разрешенные символы
      !/^[0-9-_]|[0-9-_]$/.test(name) && // Проверка на начало и конец name
      !/\d{4,}/.test(name)
    ); // Проверка на наличие более трех подряд идущих цифр
  }
}
