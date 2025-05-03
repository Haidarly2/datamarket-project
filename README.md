# DataMart Frontend

Ini adalah project frontend untuk DataMarket — sebuah aplikasi pembelian paket data menggunakan React, MUI, dan json-server sebagai mock API.

## 🚀 Fitur Utama

- Halaman login sederhana
- Beranda dengan daftar paket populer
- Halaman customer dengan daftar provider
- Checkout flow lengkap (checkout → pembayaran → konfirmasi → sukses)
- Context API untuk state global (auth, checkout, payment)
- API mock dengan json-server

## 🛠️ Teknologi

- React + Vite
- MUI (Material UI)
- React Router v6
- Axios
- json-server (mock API)

## 📁 Struktur Proyek

frontend-datamarket/
<br>├── public/
<br>├── src/
<br>│ ├── components/
<br>│ ├── context/
<br>│ ├── pages/
<br>│ ├── services/
<br>│ └── App.js
<br>├── mock-api/
<br>│ └── db.json


## 📦 Instalasi & Menjalankan Aplikasi

1. Clone repo ini:

```bash
git clone https://github.com/Haidarly2/datamarket-project.git
cd datamarket
```

2. Install Dependencies dan MUI
```bash
npm install
npm install -g json-server
npm install @mui/material @emotion/react @emotion/styled
npm i iconsax-reactjs
npm install react-router-dom
npm install axios
```

3. Jalankan json-server
```bash
cd mock-api
npx json-server --watch db.json --port 3001
```

4. Jalankan react
```bash
cd frontend-datamarket
npm start
```

5. Akses Browser di lokal
```bash
http://localhost:3000
```

## 🧪 Prototyping / Penjelasan

Demo alur aplikasi
1. Masuk Halaman Home
2. Silahkan pilih beli paket atau masuk login (untuk beli paket tetap butuh login)
3. Dihalaman login masukkan email dan pass berikut
    - admin@datamart.com
    - 123456
4. Silahkan pilih paket jika sudah login
5. Didalam halaman checkout masukkan nomor telepon tujuan pengisian dan bisa tambah add-ons jika ingin
6. Selanjutnya di halaman payment silahkan pilih metode pembayaran yang diinginkan
7. Selanjutnya memastikan bahwa pesanan sudah sesuai dan jika sesuai langsung bayar
8. Pembelian berhasil

## Tambahan

- Link Hasil pengerjaan Figma : [Link Figma](https://www.figma.com/design/Hzjc6lWI6o0VXBC4u4VtI3/DataMarket?node-id=0-1&t=jSHL55g0j2IGwKGg-1)

- Link Prototype Figma : [Link Prototype](https://www.figma.com/proto/Hzjc6lWI6o0VXBC4u4VtI3/DataMarket?node-id=15-363&t=aDT1iCb8mEfLslTG-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A900)