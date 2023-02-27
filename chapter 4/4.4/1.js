function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // Каким будет результат?

// Результатом будет ошибка.
// Потому что правила определяющие значение this, никак не смотрит на объявление объекта.