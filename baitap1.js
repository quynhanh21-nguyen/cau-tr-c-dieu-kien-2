//Tính giai thừa của một số nguyên dương
/*let a = +prompt("nhap so a");
let giaithua = 1;
for (i=1;i<=a;i++){
    giaithua = i*giaithua;
}
console.log(giaithua);*/

//In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau
/*for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        document.write("* ");

    } document.write("<br/>");
}
document.write("<br/>");
for (i = 5; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
        document.write("* ");

    } document.write("<br/>");
}
document.write("<br/>");*/
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 5; j++) {
        if (j <= 5 - i) {
            document.write("1 ");
        } else {
            document.write(" *");
        }
    } document.write("<br/>");
}

