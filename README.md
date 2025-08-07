# 🎬 Vue Movie Watchlist App

Aplikasi web sederhana untuk mencatat film yang ingin tonton (watchlist) dan menandai film yang sudah kamu tonton (watched). Dibuat menggunakan Vue 3, Pinia, Vue Router, dan Tailwind CSS.

---

## ✨ Fitur Utama

- 🔐 Login & Register
- 🎥 Tambah film ke **watchlist**
- ✅ Pindahkan film ke **watched** jika sudah ditonton
- 🛠 Edit dan hapus film
- 🔍 Cari film berdasarkan judul
- 📄 Pagination responsif
- 👤 Manajemen profil dan ganti password
- 📱 UI responsif dengan dark theme

---

## 🖼️ UI/UX Design Credit

Desain UI/UX aplikasi ini terinspirasi dari karya berikut:

- **🎨 [Movie Streaming Mobile App Design by Sajon](https://dribbble.com/shots/15395774-Movie-Streaming-Mobile-App-Design)**  
  🔗 Source: Dribbble  
  ✏️ Desainer: Sajon  
  📄 _Desain digunakan hanya sebagai referensi tampilan dan tata letak untuk tujuan pembelajaran._

---

## 🛣️ Routing & Halaman

| Path               | Nama Route           | Komponen                 | Akses   |
| ------------------ | -------------------- | ------------------------ | ------- |
| `/`                | Home                 | `Home.vue`               | Private |
| `/login`           | Login                | `Login.vue`              | Public  |
| `/register`        | Register             | `Register.vue`           | Public  |
| `/watchlist`       | Watchlist Movie      | `Watchlist.vue`          | Private |
| `/watched`         | Watched Movie        | `Watched.vue`            | Private |
| `/movies`          | Search Movies        | `Movies.vue`             | Private |
| `/movie-detail`    | Movie Detail         | `MovieDetail.vue`        | Private |
| `/profile`         | User Profile         | `UserProfile.vue`        | Private |
| `/change-password` | User Change Password | `UserChangePassword.vue` | Private |

---

## ▶️ Menjalankan Proyek

```bash
# Install dependencies
npm install

# Konfigurasi Environment (.env)
VITE_API_URL=http://localhost:3000

# Jalankan development server
npm run dev
```

## 🖼️ UI/UX Design Credit

Desain UI/UX aplikasi ini terinspirasi dari karya berikut:

**🎨 [Movie Watchlist Project by Michael Epelboim](https://www.figma.com/community/file/1121715218417063090/movie-watchlist-project)**
