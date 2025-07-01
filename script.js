const produkList = [
  { nama: "Lipstik Matte", harga: 75000, diskon: 20 },
  { nama: "Foundation Glow", harga: 120000, diskon: 10 },
  { nama: "Eyeliner Hitam", harga: 50000, diskon: 0 },
  { nama: "Maskara Volume", harga: 95000, diskon: 15 },
];

function tampilkanProduk(filter = "") {
  const container = document.getElementById("produk-list");
  container.innerHTML = "";

  produkList
    .filter(p => p.nama.toLowerCase().includes(filter.toLowerCase()))
    .forEach((p) => {
      const diskonHarga = p.harga - (p.harga * p.diskon / 100);
      container.innerHTML += `
        <div class="produk">
          <h3>${p.nama}</h3>
          <p>Harga: <del>Rp${p.harga}</del> Rp${diskonHarga}</p>
          ${p.diskon > 0 ? `<span style="color:red;">Diskon ${p.diskon}%!</span>` : ''}
        </div>
      `;
    });
}

function showForm() {
  const form = document.getElementById("form-daftar");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

function submitForm(event) {
  event.preventDefault();
  alert("Terima kasih sudah mendaftar!");
  document.getElementById("form-daftar").style.display = "none";
}

document.getElementById("search").addEventListener("input", (e) => {
  tampilkanProduk(e.target.value);
});

tampilkanProduk();
