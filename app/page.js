"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setPlants([
        {
          id: 1,
          name: "Sirih Cina (Peperomia pellucida)",
          description: "Peperomia pellucida (L.) Kunth, yang dikenal luas di Indonesia sebagai Sirih Cina atau Ketumpang Air, adalah tanaman herba kecil yang sering kali terabaikan dan dianggap sebagai gulma. Namun, di balik penampilannya yang sederhana, tanaman ini menyimpan potensi farmakologis yang luar biasa dan telah lama dimanfaatkan dalam pengobatan tradisional di berbagai belahan dunia.",
          image: "/cengkeh3.jpg",
        },
        {
          id: 2,
          name: "Nama dan Etimologi",
          description:
            "Tanaman ini memiliki banyak sekali sebutan, baik di Indonesia maupun di dunia internasional. \n \n Nama Ilmiah : Peperomia pellucida (L.) \n \n Sinonim Ilmiah : Piper pellucidum L. (Ini adalah nama basionim, nama yang pertama kali diberikan oleh Linnaeus sebelum dipindahkan ke genus Peperomia oleh Kunth). \n \n Etimologi (Asal Usul Nama) : \n \n Peperomia : Nama genus ini berasal dari bahasa Yunani 'Peperi' (πέπερι) yang berarti \"lada\" dan \"Homolos\" (ὁμός) yang berarti \"mirip\" atau \"serupa\". Ini merujuk pada kekerabatannya yang dekat dan kemiripannya (terutama pada perbungaan bulir) dengan tanaman lada (Piper nigrum). \n \n Pellucida: Nama spesies ini berasal dari bahasa Latin 'Pellucidus' yang berarti transparan atau tembus cahaya, merujuk pada sifat batangnya yang sukulen, berair, dan tampak bening.",
          image: "/cengkeh2.jpg",
        },
        {
          id: 3,
          name: "Nama Umum di Indonesia :",
          description: "Sirih Cina \n Ketumpang Air / Tumpang Air \n Suruhan (Jawa) \n Sasaladaan (Sunda) \n Rangu-rangu (Jawa) \n Gofu Goroho (Ternate) \n Saladaan (Betawi/Jakarta) \n Kaca-kaca (Sulawesi) \n\n Nama Internasional : \n\n English: Pepper elder, Shining bush plant, Rat-ear \n Filipina: Ulasimang-bato, Pansit-pansitan \n Vietnam: Càng Cua \n Spanyol: Hierba de Sapo, Corazón de hombre \n Brasil: Erva-de-jaboti",
          image: "/cengkeh1.jpg",
        },
        {
          id: 4,
          name: "Sejarah, Asal, dan Penyebaran",
          description: "Asal-Usul : Sirih cina adalah tanaman neotropis, yang berarti ia berasal dari wilayah tropis Dunia Baru. Daerah asalnya mencakup Amerika Tengah dan Amerika Selatan tropis, dari Florida di Amerika Serikat, melalui Karibia, hingga ke Argentina. \n  \n Sejarah Penyebaran : Tanaman ini kini telah menjadi \"gulma pantropis\", yang berarti telah menyebar dan tumbuh liar di hampir seluruh wilayah tropis di dunia (Asia, Afrika, dan Oseania). Penyebarannya kemungkinan besar terjadi secara tidak sengaja melalui aktivitas manusia, seperti kontaminasi pada media tanam, biji-bijian, atau melalui perdagangan tanaman hias. \n  \n Habitat di Indonesia : Di Indonesia, sirih cina tumbuh sebagai tanaman liar yang dinaturalisasi. Ia adalah tanaman sciophyte, yang menyukai tempat-tempat lembab dan teduh. Habitat idealnya adalah di area dengan drainase buruk, tanah gembur kaya bahan organik, dan ternaungi. Anda sangat mudah menemukannya di : \n Pekarangan rumah yang rimbun \n Retakan tembok atau paving blok \n Dasar pot tanaman \n Pinggir selokan atau saluran air \n Di bawah naungan pohon besar",
          image: "/cengkeh4.jpg",
        },
        {
          id: 5,
          name: "Klasifikasi Ilmiah (Taksonomi)",
          description: "Berikut adalah kedudukan taksonomi Peperomia pellucida dalam kerajaan tumbuhan : \n  \n Kingdom : Plantae (Tumbuhan) \n  \n Subkingdom : Tracheobionta (Tumbuhan berpembuluh) \n  \n Superdivisi : Spermatophyta (Menghasilkan biji) \n  \n Divisi : Magnoliophyta (Tumbuhan berbunga) \n  \n Kelas : Magnoliopsida (Berkeping dua / Dikotil) \n  \n Subkelas : Magnoliidae \n  \n Ordo: Piperales (Bangsa sirih-sirihan) \n  \n Famili : Piperaceae (Suku sirih-sirihan) \n  \n Genus : Peperomia \n  \n Spesies : Peperomia pellucida (L.) Kunth",
          image: "/cengkeh5.jpg",
        },
        {
          id: 6,
          name: "Deskripsi Morfologi (Ciri-Ciri Tanaman)",
          description: "Sirih cina memiliki karakteristik fisik yang sangat khas : \n  \n Habitus (Bentuk Tumbuh) : Herba kecil, semusim (annual) atau terkadang tahunan berumur pendek. Tumbuh tegak atau kadang sedikit menjalar, dengan tinggi rata-rata 15-45 cm. \n  \n Akar : Sistem perakaran serabut yang sangat dangkal, berwarna putih, dan mudah dicabut. \n  \n Batang : Sangat sukulen (berdaging tebal dan berair), lunak, rapuh (mudah patah), dan tampak transparan (bening). Berwarna hijau muda pucat, berbentuk bulat, dan beruas-ruas. \n  \n Daun : \n  \n Tipe : Daun tunggal. \n  \n Letak : Berseling (alternate), namun di bagian atas batang kadang tampak berhadapan (opposite) atau dalam karangan (whorled). \n  \n Tangkai (Petiolus) : Panjangnya sekitar 5-20 mm. \n  \n Helaian (Lamina) : Berbentuk jantung (cordate) atau segitiga membulat (deltoid-ovate). Ukurannya sekitar 1-4 cm. Ujungnya runcing (acuminate), pangkalnya berbentuk jantung (cordate) atau tumpul. \n  \n Tekstur : Berdaging (carnosus), lunak, dan mengilap (glossy) di permukaan atas seolah berlapis lilin tipis. \n  \n Warna : Hijau muda cerah. \n  \n Aroma : Jika diremas, daun akan mengeluarkan aroma khas yang sedikit pedas, mirip lada. \n  \n Bunga : \n  \n Tipe Perbungaan : Majemuk, tersusun dalam rangkaian bulir (spika) yang ramping seperti ekor tikus, tumbuh di ujung batang (terminal) atau ketiak daun (aksilar), seringkali berhadapan dengan daun. \n  \n Panjang Bulir : 1 hingga 7 cm. \n  \n Bunga : Sangat kecil (mikroskopis), duduk langsung di sumbu bulir, tidak memiliki kelopak maupun mahkota bunga (aperianth). Setiap bunga dilindungi oleh braktea (daun pelindung) kecil berbentuk perisai. \n  \n Buah dan Biji : \n  \n Tipe Buah : Buah batu (drupa) yang sangat kecil, berdiameter kurang dari 1 mm. \n  \n Bentuk : Bulat (globose). \n  \n Warna : Awalnya hijau, berubah menjadi coklat muda, lalu coklat kehitaman saat matang. \n  \n Tekstur Buah : Seringkali lengket dan memiliki bintik-bintik (papillose), yang membantunya menempel pada hewan atau benda lain untuk penyebaran.",
          image: "/cengkeh6.png",
        },
        {
          id: 7,
          name: "Kandungan Fitokimia Utama",
          description: "Kekuatan farmakologis sirih cina berasal dari beragam senyawa bioaktif yang dikandungnya. Senyawa utamanya meliputi : \n  \n Flavonoid : Ini adalah antioksidan kuat. Beberapa yang telah diidentifikasi adalah apigenin, luteolin, quercetin, vitexin, dan isovitexin. \n  \n Senyawa Fenolik : Termasuk asam fenolat seperti asam protokatekuat. \n  \n Alkaloid : Ditemukan dalam konsentrasi yang bervariasi. \n  \n Tanin : Memberikan rasa sepat dan memiliki sifat antibakteri. \n  \n Saponin : Memiliki aktivitas antiinflamasi. \n  \n Minyak Atsiri (Essential Oils) : Memberikan aroma khas. Senyawa utama dalam minyak atsirinya adalah dillapiole, bersama dengan caryophyllene, pachypodol, dan lainnya. \n  \n Steroid/Triterpenoid : Seperti stigmasterol dan campesterol. \n  \n Glikosida : Ditemukan senyawa glikosida jantung. \n  \n Mineral : Tanaman ini kaya akan mineral, terutama Kalium (Pottasium), yang menjelaskan beberapa penggunaan tradisionalnya terkait ginjal dan diuretik.",
          image: "/cengkeh7.jpg",
        },
        {
          id: 8,
          name: "Manfaat dan Penggunaan (Etnofarmakologi & Ilmiah)",
          description: `
            Sirih cina digunakan secara luas di berbagai negara untuk tujuan kuliner dan pengobatan.

            A. Penggunaan Tradisional (Etnobotani & Etnofarmakologi)
            Di berbagai belahan dunia, tanaman ini dipercaya untuk mengobati berbagai penyakit :

            Indonesia :
            Lalapan : Pucuk daun muda dimakan mentah sebagai lalapan untuk mengobati sakit perut, menurunkan kolesterol, dan asam urat.

            Obat Luar (Topikal) : Daun segar dicuci lalu dilumatkan/ditumbuk halus, kemudian ditempelkan pada:
            - Bisul dan Abses (untuk "mematangkan" bisul)
            - Jerawat yang meradang
            - Luka bakar ringan atau memar
            - Radang kulit (dermatitis)

            Obat Dalam (Rebusan) : Seluruh herba (akar, batang, daun) direbus dan airnya diminum untuk:
            - Menurunkan asam urat (paling populer)
            - Mengobati penyakit ginjal ringan
            - Menurunkan demam (juga sebagai kompres dahi)
            - Meredakan sakit kepala

            Di Negara Asalnya (Amerika Selatan) :
            Brasil : Digunakan sebagai diuretik (peluruh kencing), antirematik, dan untuk menurunkan kolesterol.
            Bolivia : Suku Indian Chacobo menggunakan seluruh tanaman yang ditumbuk untuk menghentikan pendarahan.

            Di Negara Lain (Asia) :
            Filipina : Sangat populer sebagai obat asam urat dan rematik.
            Vietnam : Digunakan dalam salad (sebagai Càng Cua) dan untuk mengobati sakit kepala.

            + Manfaat Berdasarkan Penelitian Ilmiah (Farmakologi)

            Antihiperurisemia (Menurunkan Asam Urat) :
            Ekstrak sirih cina terbukti dapat menurunkan kadar asam urat dalam darah pada hewan uji (tikus).

            Antiinflamasi (Antiradang) :
            Ekstrak herba ini menunjukkan aktivitas antiinflamasi yang signifikan.

            Analgesik (Pereda Nyeri) :
            Memiliki efek pereda nyeri baik pusat maupun perifer.

            Antibakteri dan Antijamur :
            Aktif melawan Staphylococcus aureus, E. coli, dan Candida albicans.

            Antioksidan :
            Kandungan flavonoid dan fenolik yang tinggi memberikan kapasitas antioksidan kuat.

            Aktivitas Penyembuhan Luka :
            Penggunaan topikal ekstrak mempercepat penyembuhan luka.

            Potensi Lainnya :
            Antidiabetes, Hepatoprotektif, dan Sitotoksik (potensi antikanker awal).
            `,
          image: "/cengkeh9.jpg",
        },
        {
          id: 9,
          name: "Cara Pengolahan Tradisional Sederhana",
          description: "Peringatan : Penggunaan ini berdasarkan tradisi. Selalu utamakan kebersihan dan konsultasikan dengan ahli kesehatan jika memiliki kondisi medis serius. \n  \n Untuk Asam Urat / Rematik (Diminum) : \n  \n Ambil 15-30 gram herba sirih cina segar (seluruh tanaman : akar, batang, daun). \n Cuci hingga benar-benar bersih di bawah air mengalir. \n Rebus dengan 2-3 gelas air (sekitar 400-600 ml) menggunakan api kecil hingga air tersisa sekitar 1 gelas (200 ml). \n Dinginkan, saring, lalu minum airnya. Biasanya diminum 1-2 kali sehari. \n  \n Untuk Bisul / Jerawat / Luka Memar (Obat Luar): \n Ambil segenggam daun sirih cina segar. \n Cuci bersih, lalu tumbuk atau lumatkan hingga halus (bisa ditambahkan sedikit nasi untuk merekatkannya). \n Tempelkan ramuan tersebut pada area yang sakit. Ganti 2-3 kali sehari. \n  \n Sebagai Lalapan (Dimakan) : \n Ambil pucuk-pucuk daun yang masih muda. \n Cuci bersih (disarankan dengan air matang atau air garam hangat) untuk memastikan kebersihannya dari kuman atau pestisida. \n Dimakan mentah sebagai lalapan bersama nasi dan sambal.",
          image: "/cengkeh11.jpg",
        },
        {
          id: 10,
          name: "Peringatan dan Keamanan Penggunaan",
          description: "Meskipun dianggap aman sebagai lalapan, ada beberapa hal yang perlu diperhatikan : \n  \n Reaksi Alergi : Sebagian individu mungkin sensitif atau alergi terhadap tanaman ini. Hentikan penggunaan jika timbul gatal, ruam, atau bengkak. \n  \n Ibu Hamil dan Menyusui : Belum ada data ilmiah yang cukup untuk menjamin keamanannya. Sebaiknya hindari konsumsi berlebih atau konsultasikan dengan dokter. \n  \n Kandungan Kalium Tinggi : Karena kandungan kaliumnya yang tinggi, penderita penyakit ginjal kronis atau gangguan keseimbangan elektrolit harus berhati-hati dan tidak mengonsumsinya secara berlebihan. \n  \n Interaksi Obat : Dapat berpotensi berinteraksi dengan obat diuretik (peluruh kencing) atau obat antihipertensi.",
          image: "/cengkeh10.jpg",
        },
        {
          id: 11,
          name: "Dosen pengampu",
          description: "Hendro Kusumo Eko Prasetyo Moro, M.Sc.",
          image: "/dosen.jpg",
        },
        {
          id: 12,
          name: "Mahasiswi Paling Cantik Sedunia",
          description: "Nama : Sinta Ayu Aprilia \n Nim : 2415008021",
          image: "/sasa.jpg",
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const mainPlants = plants.filter((p) => p.id <= 10);
  const footerPlants = plants.filter((p) => p.id > 10);

  return (
    <div className="min-h-screen bg-white">
      {/* --- Navbar collapsible (kode lama) --- */}
      <nav className="fixed top-0 left-0 right-0 bg-[#00bf63] shadow z-50">
          {/* Logo di tengah */}
          <div className="flex justify-center">
            <Image
              src="/logo-pbio.png"
              alt="Logo"
              width={250}
              height={140}
            />
          </div>
      </nav>

      {/* --- Konten utama (isi baru, dari kode kamu) --- */}
      <div className="pt-16">
        <header className="bg-[#00723b] py-20 text-center px-4">
          <h1 className="text-3xl font-bold text-white mb-2">
            Klasifikasi Tumbuhan
          </h1>
          <p className="text-white">
            Sirih Cina (Peperomia pellucida)          
          </p>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-12 text-black">
          {loading && (
            <div className="text-center text-gray-500">
              Memuat data tumbuhan...
            </div>
          )}
          {error && (
            <div className="text-center text-red-500">Error: {error}</div>
          )}
          {!loading && !error && plants.length === 0 && (
            <div className="text-center text-gray-500">
              Belum ada data tumbuhan.
            </div>
          )}

          {!loading && !error && plants.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
              {mainPlants.map((plant) => (
                <div
                  key={plant.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="relative w-full aspect-square">
                    <Image
                      src={plant.image}
                      alt={plant.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{plant.name}</h3>
                    <p className="text-sm text-gray-700 whitespace-pre-line">
                      {plant.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>

        <footer className="bg-[#00723b] py-12 px-4 mt-16 text-black">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Daftar Pustaka</h2>
            <p className="text-white mb-10">Zahra, F., & Afrianti, R. (2024). Uji Aktivitas Antibakteri Ekstrak Etanol Daun Sirih Cina (Peperomia pellucida (L.) Kunth) terhadap Bakteri Propionibacterium acnes. Jurnal Ilmiah Wahana Pendidikan, 10(16), 849-855.
            <br/><br/>Lestari, A. S., & Pratiwi, A. (2023). Formulasi dan Evaluasi Sediaan Gel Ekstrak Etanol Daun Sirih Cina (Peperomia pellucida L. Kunth) sebagai Antiinflamasi. Jurnal Riset Farmasi, 3(1), 41-47.
            <br/><br/>Simamora, M., Ginting, B., & Sinaga, K. R. (2022). Uji Efektivitas Antihiperurisemia Ekstrak Etanol Daun Sirih Cina (Peperomia pellucida (L.) Kunth) Terhadap Mencit Jantan yang Diinduksi Kafein. Jurnal Penelitian Farmasi & Herbal, 5(1), 22-27.
            <br/><br/>Fitri, L., & Khotimah, H. (2022). Formulasi dan Uji Stabilitas Sediaan Serum dari Ekstrak Daun Sirih Cina (Peperomia Pellucida L.) sebagai Antijerawat. Jurnal Ilmiah Farmasi (JIF), 14(1), 1-10.
            <br/><br/>Nofita, L., Luliana, S., & Agustina, D. (2021). Aktivitas Antioksidan Ekstrak Etanol Daun Sirih Cina (Peperomia pellucida L. Kunth) dengan Metode DPPH. Jurnal Surya Medika, 7(1), 166-172.
            </p>

            {!loading && !error && plants.length > 10 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {footerPlants.map((plant) => (
                  <div
                    key={plant.id}
                    className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="relative w-full aspect-square">
                      <Image                          src={plant.image}
                        alt={plant.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{plant.name}</h3>
                      <p className="text-sm text-gray-700 whitespace-pre-line">
                        {plant.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="flex justify-center py-10">
            <Image
              src="/images.png"
              alt="Logo"
              width={250}
              height={140}
            />
          </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
