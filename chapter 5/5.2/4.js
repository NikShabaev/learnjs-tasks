/*Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2;
}
 */



// Число 0.2 хранится в двоичном представлении, в котором оно является бесконечной дробью.
// Из-за этого оно теряет точность. И при сложении таких чисел не получится ровно 10.
// Следовательно условие цикла никогда не станет истинным.