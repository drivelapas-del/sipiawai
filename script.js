const iframe = document.getElementById("appFrame");
const loading = document.getElementById("loading");
const errorBox = document.getElementById("error");

// Timeout deteksi gagal load (15 detik)
const LOAD_TIMEOUT = 15000;
let loadTimer = setTimeout(() => {
  showError();
}, LOAD_TIMEOUT);

// Jika iframe berhasil dimuat
iframe.onload = () => {
  clearTimeout(loadTimer);
  loading.style.display = "none";
  errorBox.classList.add("hidden");
  iframe.style.display = "block";
};

// Jika iframe error (browser tertentu)
iframe.onerror = () => {
  showError();
};

// Jika koneksi terputus
window.addEventListener("offline", () => {
  showError();
});

function showError() {
  loading.style.display = "none";
  iframe.style.display = "none";
  errorBox.classList.remove("hidden");
}
