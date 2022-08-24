import React from "react";
import "./Accordian.css";
import { Accordion } from "react-bootstrap";

export default function Accordian({ theme }) {
  return (
    <>
      {theme ? (
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0" className="faq-accordian-item">
            <Accordion.Header>
              1996
            </Accordion.Header>
            <Accordion.Body className="white-body">
            Program sekretaris didirikan dibekas gudang KUD dengan siswa 34 orang dan motto Ilmu yang Amaliah, Amal yang Ilmiah, Akhlakul Karimah.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="faq-accordian-item">
            <Accordion.Header>1997</Accordion.Header>
            <Accordion.Body>
            Merancang keunikan sekolah: berakhlak mulia, berbasis bahasa Inggris dan komputer.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="faq-accordian-item">
            <Accordion.Header>1998</Accordion.Header>
            <Accordion.Body>
            Siswa baru meningkat 120 orang, terpaksa menyewa Villa Andhika dan memanfaatkan garasi sebagai kelas.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="faq-accordian-item">
            <Accordion.Header>1999</Accordion.Header>
            <Accordion.Body>
            -Nem lulusan angkatan-I: peringkat ke-1 SMK Swasta Bogor, dan ke-33 se-jabar

            -Menerapkan moving class
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="faq-accordian-item">
            <Accordion.Header>2005</Accordion.Header>
            <Accordion.Body>
            -Angkatan VII lulus 100%, NEM matematika 92% nilai lebih besar sama dengan 60

            -Mewujudkan SMK berstandar nasional

            -Tempat uji kompetensi LSP-APSI

            -Juara Go Green School Competition

            -Juara II LKS debate bahasa Inggris tingkat nasional
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="faq-accordian-item">
            <Accordion.Header>2013</Accordion.Header>
            <Accordion.Body>
            -Membuka SMK Wikrama 1 Bekasi

            -Kerjasama dengan GIZ Foundation (Jerman) pengembangan sekolah lingkungan hidup

            -Menjadi SMK berprestasi tingkat nasional

            -Sebagai sekolah model penyelenggaraan pendidikan untuk pembangunan berkelanjutan (ESD)

            -Sekolah rujukan bagi guru lingkungan se-Asia Tenggara (SEAMEO QITEP)
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="faq-accordian-item">
            <Accordion.Header>2017</Accordion.Header>
            <Accordion.Body>
            -SMK Wikrama Bogor menjadi tuan rumah dalam acara peringatan Hari BUMI Internasional yang dihadiri oleh Prof. Ractmat Witoelar (Utusan Khusus Presiden untuk Pengendalian Perubahan Iklim) dan Walikota Bogor.

        -SMK Wikrama Bogor mengikuti Program Jenesys SMK 4 tahun permodelan KOSEN di Tokyo Jepang tahun 2017.

        -SMK Wikrama Bogor kembali meraih juara 1 Lomba Film Pendek FLS2N, tingkat Provinsi Jawa Barat. Lomba ini diikuti oleh siswa/siswi Multimedia, M. Diya Mustofa dan M. Saifullah, dengan judul Film Pendek “Integrasi dalam Prestasi”.

        -Juara 1 Lomba Film Pendek pada ajang Olimpiade Tingkat Nasional (2017), diwakili oleh Shantika Dwi dan Andhika Navira Dillah Putra dari jurusan Multimedia

        -Juara 2 Lomba Desain Web pada ajang Olimpiade Tingkat Nasional (2017) yang diwakili oleh Daffa Prayoga dan Rizki Wahyudi dari jurusan RPL (rekayasa Perangkat Lunak)

        -Juara 2 Lomba Persentasi pada ajang Olimpiade Tingkat Nasional (2017, yang diwakili oleh Galih bagas P dari jurusan Pemasaran

        -Juara Umum II Olimpiade Tingkat Nasional 2017

        -SMK Wikrama Bogor yang diwakili oleh tim dari jurusan Rekayasa Perangkat Lunak dan Multimedia, yaitu Aldan Rizky S dan Oki Oktora, meraih juara II di ajang Lomba Cipta Games pada Festival Habibie 2017, di Jiexpo, Kemayoran Jakarta. 

        -SMK Wikrama Bogor yang diwakili oleh Arief Dhiemas, meraih juara I Laboran Berprestasi tingkat Nasional

        -SMK Wikrama Bogor, yang diwakili oleh Anis Humanisa jurusan RPL XI meraih juara 3 O2SN Lomba Atletik Putri tingkat Jawa Barat

        -SMK Wikrama Bogor yang diwakili oleh Tim Voli Putra meraih juara 3 di kejuaraan voli tingkat Bogor di Sekolah Kesatuan Bogor.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ) : (
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Rekayasa Perangkat Lunak
            </Accordion.Header>
            <Accordion.Body>
            Memiliki kemampuan menjelaskan dan menerapkan ilmu matematika dan ilmu komputer dasar sebagai basis pembangunan sebuah perangkat lunak yang berkualitas.
      Memiliki kemampuan menjelaskan, menerapkan, dan memilih berbagai teori, model, teknik dan teknologi yang tepat dalam pembangunan perangkat lunak yang berkualitas pada lingkungan berbasis web, desktop dan mobile.
      Merancang solusi perangkat lunak berbasis web, desktop dan mobile dalam berbagai skala kompleksitas yang mengintegrasikan persoalan ethical, social, legal, security dan ekonomi.
      Terampil menggunakan teknologi dan tools terkini dalam pembangunan perangkat lunak yang berkualitas pada lingkungan berbasis web dan mobile.
      Menerapkan profesionalisme dalam berkarya sesuai dengan etika bidang Rekayasa Perangkat Lunak.
      Berkomunikasi secara efektif pada berbagai kalangan baik secara lisan maupun tulisan.
      Mengikuti perkembangan berbagai teknik, teknologi dan tools baru dalam bidang rekayasa perangkat lunak pada lingkungan berbasis web, desktop dan mobile.
      Bekerjasama secara efektif baik sebagai anggota tim maupun pemimpin tim pada proyek pembangunan perangkat lunak.
      Mengidentifikasi kebutuhan untuk menjadi seorang wirausaha/pebisnis dibidang industri kreatif khususnya dalam pengembangan perangkat lunak.

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Multimedia</Accordion.Header>
            <Accordion.Body>
            kompetensi keahlian Multimedia menjawab tantangan perkembangan komunikasi visual, desain grafis dan multimedia. Materi yang dipelajari antara lain pengetahuan dasar tentang seni terapan, fotografi digital (tata cahaya, komposisi, lighting studio), videografi (Adobe Premiere, Adobe After Effect), desain grafis (Adobe Photoshop, Adobe Illustrator, Adobe Indesign), kemampuan grafis 3D (Blender, 3D Studio Max), kemampuan animasi (HTML, Adobe Flash) dan proses kreatif dalam membuat suatu karya audio visual.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Bisni Daring Dan Pemasaran</Accordion.Header>
            <Accordion.Body>
            Portofolio seperti membuat desain untuk bisnis sendiri, creative content (berbasis media sosial/website), website berbasis toko online dengan bahasa pemrograman sederhana dan soft skill yang terdiri dari komunikasi, telemarketing dan marketing komunikasi
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>OTKP</Accordion.Header>
            <Accordion.Body>
            Mengetik cepat dengan teknik 10 jari dengan rata-rata kecepatan 250 EPM 98%, mengelola dokumen dan arsip kantor, menangani telepon, mengelola keuangan dan mampu menangani tamu
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </>
  );
}
