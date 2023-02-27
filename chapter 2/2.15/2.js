function checkAge(age) {
  if (age > 18) {
    return true;
  }
  else {
    return confirm('Родители разрешили?');
  }
}

// Оператор ?

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

// Оператор ||

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}