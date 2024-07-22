//Viết chương trình nhập một số nguyên,tìm 20 bội số của số đó, sau đó in kết quả ra màn hình.
/*let a = +prompt("nhap vao so a");
for (i=0; i<20; i++){
    boi = i*a
    console.log(boi);
}*/

//Viết chương trình nhập một câu bất kỳ, đếm số từ và ký tự trong câu đó, và in kết quả ra màn hình.
/*let string = prompt("nhap vao mot cau");
let sub = " ";
let count = 1;
for (i=0; i<string.length; i++){
    if (string.substring(i, i + 1) == sub) {
        count += 1;
    }
}
console.log("Số từ: " + count)
console.log("số ký tự: " + string.length)*/

//Nhập số nguyên n bất kỳ, viết chương trình in các phần tử đầu tiên của dãy Fibonacci từ 0 đến n.
/*let n = +prompt("nhap so n")
let f0=0;
console.log(f0)
let f1=1;
if (n>0){
console.log(f1)}
let fi=1;
for (i=2; i<100; i++){
    fi=f0+f1;
    f0=f1;
    f1=fi;
    if (fi >= n){
        break;
    }
    console.log(fi)}*/

//Nhập số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1)
/*let n = +prompt("nhap so n")
let tong = 0;
for (i=1; i<=n;i++){
    tong = tong + i*(i+1);
}
console.log(tong)*/

//Nhập vào n: Viết chương trình tính kết quả biểu thức S= 1+1/2^3+1/3^3+...+1/n^3
/*let n = +prompt("nhap so n")
let tong = 0;
for (i=1; i<=n;i++){
    tong = tong + 1/(i*i*i);
}console.log(tong);*/

//Nhập vào hai số nguyên dương a và b. Tìm tổng của tất cả các số lẻ và chẵn nằm giữa hai số đó.
let a = +prompt("nhap so a");
let b = +prompt("nhap so b");
let tongChan =0;
let tongLe =0;
for (i=a; i<=b; i++){
if (i%2==0){
    tongChan= tongChan + i;
}else{
    tongLe= tongLe + i;
}
}
console.log("Tổng số chẵn là " + tongChan);
console.log("Tổng số lẻ là " + tongLe);