# ddosxnet

**ddosxnet** adalah module Node.js ringan untuk melakukan simulasi trafik load testing dengan konsep DDoS pada server milik sendiri. Module ini dirancang untuk membantu Anda menguji kekuatan dan ketahanan server Anda terhadap lonjakan trafik secara bersamaan. 

> **Peringatan:**  
> Module ini hanya diperuntukkan bagi pengujian server yang Anda miliki atau server yang telah mendapatkan izin eksplisit untuk dites. Penggunaan module ini untuk menyerang server tanpa izin adalah tindakan ilegal dan tidak etis.

## Fitur

- **Simulasi Trafik Tinggi:**  
  Mengirimkan sejumlah besar permintaan HTTP GET secara bersamaan ke server target.

- **Konfigurasi Kustom:**  
  Pengguna dapat menentukan jumlah request yang dikirim secara paralel (concurrency) dan total request yang ingin dilakukan.

- **Output Berwarna:**  
  Menggunakan package [colors](https://www.npmjs.com/package/colors) untuk mempercantik tampilan output di console dengan teks berwarna dan bold, sehingga lebih mudah dibaca.

- **Mudah Digunakan:**  
  Cukup dengan meng-install package dan memanggil fungsi `loadTest`, Anda sudah bisa mulai melakukan load testing pada server Anda.

## Instalasi

### Kloning Repository
Anda dapat mengkloning repository ini dari GitHub:
```bash
const ddos = require('ddosxnet');

ddos.loadTest('http://webanda.com', 500, 10000);
