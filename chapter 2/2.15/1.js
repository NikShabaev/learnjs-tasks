function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // без else
  return confirm('Родители разрешили?');
}

// Обе функции работают одинаково


