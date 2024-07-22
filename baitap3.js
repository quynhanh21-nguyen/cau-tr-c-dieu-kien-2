let n = +prompt("nhap so n");
let count = 0;
let uoc = 0;
for (i = 2; i < 1000; i++) {
    if (count < n) {
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                uoc = uoc + 1;
            }
        }
        if (uoc == 0) {
            console.log(i);
            count = count + 1;
        }
        uoc = 0;
    } else { break; }
}