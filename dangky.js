var nguoidung1 = [];
function bam() {
  check();
  chay();
}
function check() {
  let ten = $(".input1").val();
  var mk = $(".input2").val();
  var laimk = $(".input3").val();
  if (ten == "" || mk == "" || laimk == "") {
    return "a";
  }
  if (mk != laimk) {
    return "b";
  } else if (localStorage.getItem("nguoidung1") === null) {
    return "c";
    // nếu ko có dữ liệu
  } else {
    //localstorage có dữ liệu
    let nguoidung1 = localStorage.getItem("nguoidung1"); //lấy dữ liệu
    nguoidung1 = JSON.parse(nguoidung1); //chuyển về mảng

    //vòng lặp
    for (element of nguoidung1) {
      if (ten === element.ten) {
        return "d";
      }

      //khi chạy hết vòng lặp mà không trùng thì return true; tức là tendangnhap đó có thể dùng được
      return "c";
    }
  }
}
function chay() {
  let ten = $(".input1").val();
  var mk = $(".input2").val();
  var laimk = $(".input3").val();
  if (check() == "a") {
    const ten = `<p class="ochua">*Bạn chưa nhập đủ thông tin đăng ký<p>`;
    $(".ochua").replaceWith(ten);
  } else if (check() == "b") {
    const ten = `<p class="ochua">*Mật khẩu không trùng khớp<p>`;
    $(".ochua").replaceWith(ten);
  } else if (check() == "c") {
    const tenn = `<p class="ochua">*Tạo tài khoản thành công<p>`;
    $(".ok").attr("href", "dangnhap.html");
    $(".ochua").replaceWith(tenn);
    const luu = {
      ten: ten,
      mk: mk,
    };

    nguoidung1.push(luu);
    localStorage.setItem("nguoidung1", JSON.stringify(nguoidung1));
  } else if (check() == "d") {
    const tenn = `<p class="ochua">*Trùng tên đăng nhập<p>`;
    $(".ochua").replaceWith(tenn);
  }
}
function kocg() {
  if (localStorage.check == 1) {
    $("body").remove();
  }
}
window.onload = function () {
  kocg();
};
