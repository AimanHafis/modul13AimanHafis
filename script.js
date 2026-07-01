const deskripsi = document.getElementById("deskripsi");
const btnUbah = document.getElementById("btnUbah");
const teksAsli = deskripsi.textContent;
let jumlahKlik = 0;

btnUbah.addEventListener("click", function() {
  jumlahKlik++;
  console.log("Tombol sudah diklik sebanyak " + jumlahKlik + " kali.");

  if (deskripsi.textContent === teksAsli) {
    deskripsi.textContent = "Deskripsi berhasil diubah menggunakan JavaScript.";
    btnUbah.textContent = "Kembalikan Deskripsi";
  } else {
    deskripsi.textContent = teksAsli;
    btnUbah.textContent = "Ubah Deskripsi";
  }
});
