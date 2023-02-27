{
  let i = 0;
  while (++i < 5) alert(i);
}
//           ++i            alert(i)
//      1           1          1
//      2           2          2
//      3           3          3
//      4           4          4
//      5           5 


{
  let i = 0;
  while (i++ < 5) alert(i);
}
//           i++            alert(i)
//      1           0          1
//      2           1          2
//      3           2          3
//      4           3          4
//      5           4          5
//      6           5 