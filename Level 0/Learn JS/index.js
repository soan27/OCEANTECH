let n = 6;
// Tính tổng tất cả các “ ước số” của số nguyên dương n
const sumCommonDivisor = (n) => {
  let sum = 0; // khởi tạo biến sum lưu trữ tổng các ước số
  for (let index = 1; index <= n; index++) {
    // khởi tạo vòng for chạy lần lượt index từ 1 đến n
    if (n % index == 0) {
      // kiểm tra xem nếu n chia hết cho từng biến index thì cộng index vào biến sum
      sum += index;
    }
  }
  console.log("1.Tong uoc so cua so nguyen " + n + " la: ", sum); // in ra kết quả ra màn hình biến sum.
};

sumCommonDivisor(n);

//Tính tích tất cả các “ước số” của số nguyên dương n
const productCommonDivisor = (n) => {
  let product = 1; // khởi tạo biến product lưu trữ tích các ước số
  for (let index = 1; index <= n; index++) {
    // khởi tạo vòng for chạy lần lượt index từ 1 đến n
    if (n % index == 0) {
      // kiểm tra xem nếu n chia hết cho từng biến index thì nhân product với index.
      product *= index;
    }
  }
  console.log("2.Tích ước số của số nguyên " + n + " là: ", product); // in ra kết quả ra màn hình biến product.
};
productCommonDivisor(n);

//Đếm số lượng “ước số” của số nguyên dương n
const countCommonDivisor = (n) => {
  let cnt = 0; // khởi tạo biến cnt lưu kết quả đếm được số là ước của số nguyên n
  for (let index = 1; index <= n; index++) {
    // khởi tạo vòng for chạy lần lượt index từ 1 đến n
    if (n % index == 0) {
      // kiểm tra xem nếu n chia hết cho từng biến index thì tăng biến cnt thêm 1.
      cnt++;
    }
  }
  console.log("3.Số ước số của số nguyên " + n + " là: ", cnt); // in ra màn hình kết quả biến cnt
};

countCommonDivisor(n);
//Liệt kê tất cả các “ước số lẻ” của số nguyên dương n
const listOddCommonDivisor = (n) => {
  console.log("4.Số các ước số lẻ của số nguyên " + n + " là: ");
  for (let index = 1; index <= n; index++) {
    // khởi tạo vòng for chạy lần lượt index từ 1 đến n
    if (n % index == 0 && index % 2 == 1) {
      // kiểm tra xem nếu n chia hết cho từng biến index và index (ước) là số lẻ thì in ra index ra màn hình
      console.log(index);
    }
  }
};
listOddCommonDivisor(n);
// Tính tổng tất cả các “ước số chẵn” của số nguyên dương n
const listEvenCommonDivisor = (n) => {
  console.log("5.Số các ước số chẵn của số nguyên " + n + " là: ");
  for (let index = 1; index <= n; index++) {
    // khởi tạo vòng for chạy lần lượt index từ 1 đến n
    if (n % index == 0 && index % 2 == 0) {
      // kiểm tra xem nếu n chia hết cho từng biến index và index (ước) là số chẵn thì in ra index ra màn hình
      console.log(index);
    }
  }
};
listEvenCommonDivisor(n);
//Tính tích tất cả các “ước số lẻ” của số nguyên dương n
const ProductOddCommonDivisor = (n) => {
  let productOdd = 1; // khởi tạo biến productOdd = 1 (vì là tích) lưu kết tích của là ước lẻ của số nguyên n
  for (let index = 1; index <= n; index++) {
    // khởi tạo vòng for chạy lần lượt index từ 1 đến n
    if (n % index == 0 && index % 2 == 1) {
      // kiểm tra xem nếu n chia hết cho từng biến index và index (ước) là số chẵn thì nhân productOdd với index(ước)
      productOdd *= index;
    }
  }
  console.log("6.Tích các ước số lẻ của số nguyên " + n + " là: ", productOdd);
};
ProductOddCommonDivisor(n);
