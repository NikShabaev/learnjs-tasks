function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."), // вместо "function() { alert("Вы согласились."); },"
  () => alert("Вы отменили выполнение.") // вместо "function() { alert("Вы отменили выполнение."); }" 
);