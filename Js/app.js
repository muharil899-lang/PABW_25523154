const profil = {
  nama: "Muhammad Syahrir",
  peran: "Mahasiswa Informatika yang tertarik pada pengembangan web dan teknologi",
  keahlian: ["HTML", "CSS", "JavaScript"]
};

const jumlahProyek = 3;

console.log(profil);
console.log(jumlahProyek);
console.log(typeof profil.nama);
console.log(typeof jumlahProyek);


// Template literal
const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;

console.log(kalimat);


// Fungsi 1
function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}


// Fungsi 2
const formatKeahlian = (daftar) => daftar.join(" · ");

// Menjalankan kedua fungsi
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// Pengujian dengan data berbeda
console.log(
  buatPerkenalan({
    nama: "Budi",
    peran: "Mahasiswa"
  })
);

console.log(
  buatPerkenalan({
    nama: "Andi",
    peran: "Programmer"
  })
);

console.log(
  formatKeahlian(["Java", "Python", "SQL"])
);

// DATA PROYEK
export const daftarProyek = [
  {
    judul: "Profil Mahasiswa",
    tahun: 2026,
    selesai: true,
    kategori: "web"
  },
  {
    judul: "Praktikum PABW",
    tahun: 2026,
    selesai: true,
    kategori: "web"
  },
  {
    judul: "Proyek Aplikasi",
    tahun: 2026,
    selesai: false,
    kategori: "data"
  }
];


// Menampilkan seluruh data proyek
console.table(daftarProyek);


// FILTER
const proyekSelesai = daftarProyek.filter(
  (proyek) => proyek.selesai
);

console.table(proyekSelesai);


// FIND
const proyekProfil = daftarProyek.find(
  (proyek) => proyek.judul === "Profil Mahasiswa"
);

console.log(proyekProfil);


// MAP
const judulProyek = daftarProyek.map(
  (proyek) => proyek.judul
);

console.table(judulProyek);

const urutProyek = [...daftarProyek].sort(
  (a, b) => a.judul.localeCompare(b.judul)
);

console.table(urutProyek);
console.table(daftarProyek);
console.log(profil.alamat);
console.log(profil.alamat?.kota);

const elemen = document.querySelector("#tidakAda");

console.log(elemen);

// Kasus nilai input berupa teks
const nilaiInput = "10";

console.log(nilaiInput + 1);
console.log(Number(nilaiInput) + 1);