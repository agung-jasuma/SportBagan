# Deploy ke Vercel (dengan hak akses admin)
1. Deploy folder ini (CLI: `vercel --prod`, atau import dari GitHub). Framework: Other.
2. Di dashboard Vercel > Storage / Marketplace: tambahkan **Upstash Redis** dan hubungkan ke project
   (env UPSTASH_REDIS_REST_URL / _TOKEN atau KV_REST_API_URL / _TOKEN terisi otomatis).
3. Settings > Environment Variables, tambahkan:
   - ADMIN_PASSWORD = kata sandi admin Anda (min. 6 karakter)
   - AUTH_SECRET    = teks acak panjang (mis. 40 karakter bebas)
4. Redeploy. Semua pengunjung = Mode pantau; klik "Masuk admin" untuk mengubah data.
Batas: data lomba (termasuk foto) disimpan dalam satu entri; jaga total di bawah ~1 MB
(foto peserta otomatis dikecilkan; hindari terlalu banyak foto latar besar).
