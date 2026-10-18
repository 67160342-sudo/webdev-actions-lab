const helloBtn = document.getElementById("helloBtn");
const status = document.getElementById("status");

helloBtn.addEventListener("click", function () {
  status.textContent = "Hello! ขอบคุณที่เข้าชมเว็บไซต์ของผม";
});