const produkList = [
  { nama: "Lip Gloss Cherry", harga: 50000, diskon: 10 },
  { nama: "Blush On Rosy", harga: 75000, diskon: 20 },
  { nama: "Eyeshadow Palette", harga: 150000, diskon: 15 },
];

function tampilkanProduk() {
  const container = document.getElementById("produk-list");
  container.innerHTML = "";

  produkList.forEach(p => {
    const hargaDiskon = p.harga - (p.harga * p.diskon / 100);
    container.innerHTML += `
      <div class="produk">
        <h3>${p.nama}</h3>
        <p><del>Rp${p.harga}</del> Rp${hargaDiskon}</p>
        <p style="color: #e91e63;">Diskon ${p.diskon}%</p>
      </div>
    `;
  });
}

function toggleForm() {
  const form = document.getElementById("form-daftar");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

function submitForm(event) {
  event.preventDefault();
  alert("Terima kasih telah mendaftar sebagai member!");
  document.getElementById("form-daftar").style.display = "none";
}

tampilkanProduk();
