import { daftarProyek 

} from "./app.js";

// ===================================
// BAGIAN 1: MEMILIH ELEMEN HALAMAN
// ===================================

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const filter = document.querySelector("#filter");

const form = document.querySelector("#form-kontak");
const tombolKirim = document.querySelector("#tombol-kirim");
const statusForm = document.querySelector("#status-form");


// ===================================
// BAGIAN 2: MEMBUAT KARTU PROYEK
// ===================================

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("h3");
  judul.textContent = proyek.judul;

  const tahun = document.createElement("p");
  tahun.textContent = `Tahun: ${proyek.tahun}`;

  const status = document.createElement("p");
  status.textContent = proyek.selesai
    ? "Status: Selesai"
    : "Status: Dalam pengerjaan";

  li.append(judul, tahun, status);

  return li;
}


// ===================================
// BAGIAN 3: RENDER DAFTAR PROYEK
// ===================================

function renderProyek(daftar) {
  // Kosongkan wadah sebelum menggambar ulang
  wadah.textContent = "";

  // Tangani keadaan daftar kosong
  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }

  pesanKosong.hidden = true;

  const fragmen = document.createDocumentFragment();

  daftar.forEach((proyek) => {
    fragmen.append(buatKartu(proyek));
  });

  wadah.append(fragmen);
}

// Tampilkan seluruh proyek
renderProyek(daftarProyek);


// ===================================
// BAGIAN 4: FILTER DENGAN SATU LISTENER
// ===================================

filter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");

  if (!tombol || !filter.contains(tombol)) {
    return;
  }

  const kategori = tombol.dataset.kategori;

  const hasilFilter = kategori === "semua"
    ? daftarProyek
    : daftarProyek.filter(
        (proyek) => proyek.kategori === kategori
      );

  filter.querySelectorAll("button").forEach((item) => {
    item.classList.toggle("aktif", item === tombol);
  });

  renderProyek(hasilFilter);
});


// ===================================
// BAGIAN 5: VALIDASI FORMULIR
// ===================================

const aturanKolom = {
  nama: {
    pesan: "Nama lengkap wajib diisi."
  },
  email: {
    pesan: "Masukkan alamat email yang valid."
  },
  nim: {
    pesan: "NIM harus terdiri dari tepat 8 digit angka."
  },
  pesan: {
    pesan: "Pesan wajib diisi."
  }
};

const kolomForm = Array.from(
  form.querySelectorAll("input, textarea")
);

let sudahSubmit = false;


// Memeriksa satu kolom
function validasiKolom(kolom) {
  const nilai = kolom.value.trim();
  let pesan = "";

  if (nilai === "") {
    pesan = aturanKolom[kolom.name].pesan;
  } else if (
    kolom.name === "email" &&
    !kolom.checkValidity()
  ) {
    pesan = "Masukkan alamat email yang valid.";
  } else if (
    kolom.name === "nim" &&
    !/^[0-9]{8}$/.test(nilai)
  ) {
    pesan = "NIM harus terdiri dari tepat 8 digit angka.";
  }

  const tempatPesan = document.querySelector(
    `#galat-${kolom.name}`
  );

  tempatPesan.textContent = pesan;

  if (pesan) {
    kolom.setAttribute("aria-invalid", "true");
  } else {
    kolom.removeAttribute("aria-invalid");
  }

  return pesan === "";
}


// Memeriksa semua kolom
function semuaKolomValid() {
  return kolomForm.every((kolom) => {
    return validasiKolom(kolom);
  });
}


// Memperbarui tombol Kirim
function perbaruiTombol() {
  const valid = kolomForm.every((kolom) => {
    return kolom.value.trim() !== "" &&
      kolom.checkValidity() &&
      (kolom.name !== "nim" ||
        /^[0-9]{8}$/.test(kolom.value.trim()));
  });

  tombolKirim.disabled = sudahSubmit && !valid;
}


// Pesan berubah saat pengguna mengetik
kolomForm.forEach((kolom) => {
  kolom.addEventListener("input", () => {
    if (sudahSubmit || kolom.value.trim() !== "") {
      validasiKolom(kolom);
    }

    statusForm.textContent = "";
    perbaruiTombol();
  });

  kolom.addEventListener("blur", () => {
    validasiKolom(kolom);
  });
});


// Menghentikan pengiriman bawaan form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  sudahSubmit = true;

  const valid = semuaKolomValid();

  perbaruiTombol();

  if (!valid) {
    statusForm.textContent =
      "Periksa kembali kolom yang masih salah.";

    const kolomSalah = kolomForm.find((kolom) => {
      return kolom.getAttribute("aria-invalid") === "true";
    });

    if (kolomSalah) {
      kolomSalah.focus();
    }

    return;
  }

  statusForm.textContent =
    "Validasi berhasil. Form siap diproses.";

  // Belum mengirim data ke server.
});
