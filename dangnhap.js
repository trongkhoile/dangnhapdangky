window.onload = function () {
  ok();
};
function bam() {
  check();
  chay();
}

function check() {
  let ten = $(".input1").val();
  var mk = $(".input2").val();
  if (ten == "" || mk == "") {
    return "a";
  } else {
    let nguoidung1 = localStorage.getItem("nguoidung1"); //lấy dữ liệu
    nguoidung1 = JSON.parse(nguoidung1); //chuyển về mảng
    for (let i = 0; i < nguoidung1.length; i++) {
      if (ten == nguoidung1[i].ten && mk == nguoidung1[i].mk) {
        localStorage.setItem("index", i);
        localStorage.setItem("check", 1);
        $(".chuyen").attr("href", "thongtinnguoidung.html");
        const tenn = `<p class="ochua">*Đăng nhập thành công<p>`;
        $(".ochua").replaceWith(tenn);
      }
      return "b";
    }
  }
}
function chay() {
  if (check() == "a") {
    const ten = `<p class="ochua">*Điền thiếu thông tin đăng nhập<p>`;
    $(".ochua").replaceWith(ten);
  } else if (check() == "b") {
    const ten = `<p class="ochua">*Sai tên hoặc mật khẩu<p>`;
    $(".ochua").replaceWith(ten);
  }
}
function ok() {
  if (localStorage.check == 1) {
    $("body").remove();
  }
}
