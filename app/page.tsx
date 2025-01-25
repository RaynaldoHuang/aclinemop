"use client";

import Image from "next/image";
import Link from "next/link";

import logow from "@/public/logowhite.svg"
import wa from "@/public/WhatsApp.svg"

import fb1 from "@/public/png/fb1.png"
import fb2 from "@/public/png/fb2.webp"
import fb3 from "@/public/png/fb3.webp"
import fb4 from "@/public/png/fb4.png"
import fb5 from "@/public/png/fb5.png"
import fb6 from "@/public/png/fb6.webp"
import fb7 from "@/public/png/fb7.webp"
import testi from "@/public/png/testi.png"
import fb8 from "@/public/png/fb7.jpg"
import gif from "@/public/png/GIF1.gif"
import { fbq } from "react-facebook-pixel";
import PixelTracker from "@/components/fbpiksel";

export default function Home() {
  return (
    <div className="w-full max-w-[425px] mx-auto">
      <PixelTracker />
      <header className="text-white text-center flex justify-center py-6 bg-[#ce0000]">
        <Image
          src={logow}
          alt=""
          width={200}
        />
      </header>
      <div className="bg-white">
        <div className="mx-3 py-4">
          <Image
            src={fb1}
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-3xl mb-2">ALAT PEL PRAKTIS</p>
          <p className="text-xl text-center mb-8">Hanya Dengan Satu Tarikan Dapat Mengeringkan dan Membilas Seketika</p>
          <p className="text-gray-500 line-through decoration-red-500 font-bold text-xl mb-4">Rp 195.000</p>
          <p className="text-[#ce0000] font-bold text-5xl animate-bounce mb-5">Rp 99.000</p>
        </div>
        <div className="mx-3 pt-4 mb-8">
          <Image
            src={fb2}
            alt=""
            className="w-full rounded-lg"
          />
        </div>
        <div className="mx-3">
          <p className="text-xl text-center mb-8">Solusi inovatif untuk membersihkan rumah Anda dengan lebih efisien dan mudah. Dengan kepala pel yang dapat berputar 360°, alat ini memungkinkan Anda untuk mencapai setiap sudut ruangan, bahkan di bawah tempat-tempat yang sulit dijangkau seperti tempat tidur atau sofa. Menghindari penumpukan debu dan membantu membersihkan rumah Anda tanpa menyisakan kotoran di sudut.</p>
        </div>
        <div className="bg-[#ce0000] text-white text-center text-2xl font-bold py-6">
          Kenapa Harus Memakai Alat Pel Praktis ini?
        </div>
        <div className="mt-8 mx-3">
          <p className="text-lg font-semibold mb-2">1. 360 Derajat Kepala Pel Yang Fleksible</p>
          <p>Memungkinkan Anda Membersihkan Ruangan dengan Semua Arah Tanpa Kesulitan, Mencapai Sudut Sudut Yang Sulit diJangkau dan Memastikan Kebersihan Menyeluruh.</p>
          <Image
            src={fb3}
            alt=""
            className="w-full rounded-lg mt-4"
          />
        </div>
        <div className="mt-8 mx-3">
          <p className="text-lg font-semibold mb-2">2. Desain Yang bisa Menyelip</p>
          <p>Bisa Masuk dan Keluar dari bawah Tempat Tidur, Sofa, Atau Perabot Lainnya dengan Mudah, Memberikan Kemampuan Untuk Membersihkan Area Yang biasanya Sulit diJangkau.</p>
          <Image
            src={fb4}
            alt=""
            className="w-full rounded-lg mt-4"
          />
        </div>
        <div className="mt-8 mx-3">
          <p className="text-lg font-semibold mb-2">3. Penyimpanannya Yang Mudah</p>
          <p>Terdapat Kait di Bagian Atas Pegangan, Memungkinkan Anda Menggantung Alat Pel Secara Vertikal di Dinding Saat Tidak di Gunakan, Sehingga Menghemat Ruang Penyimpanan dan Mempermudah Akses.</p>
          <Image
            src={fb5}
            alt=""
            className="w-full rounded-lg mt-4"
          />
        </div>
        <div className="pb-10 mt-8 mx-3">
          <p className="text-lg font-semibold mb-2">4. Di Lengkapi dengan Kain Mikrofiber</p>
          <p>Di Sertakan 2 Kain Mikrofiber Yang Memiliki Kemampuan Penyerapan Air Tinggi, Membantu Membersihkan Debu, Kotoran dan Noda dengan Efisien.</p>
          <Image
            src={fb6}
            alt=""
            className="w-full rounded-lg mt-4"
          />
        </div>
      </div>
      <div className="bg-[#ce0000] text-white text-center text-2xl font-bold py-6">
        KATA MEREKA YANG SUDAH MENGGUNAKAN PEL PRAKTIS ACLINE INI
      </div>
      <div className="pb-8 mt-4 mx-3">
        <Image
          src={testi}
          alt=""
          className="w-full rounded-lg mt-4"
        />
      </div>
      <div className="bg-[#ce0000] text-white text-center text-2xl font-bold py-6">
        SUDAH TERJUAL RIBUAN PCS DAN SEMUANYA PUAS
      </div>
      <div className="pb-8 mt-4 mx-3">
        <Image
          src={fb8}
          alt=""
          className="w-full rounded-lg mt-4"
        />
      </div>
      <div className="pb-8 mt-4 mx-3">
        <Image
          src={fb7}
          alt=""
          className="w-full rounded-lg mt-4"
        />
      </div>
      <div className="mx-3">
        <h1 className="text-center font-bold text-4xl text-[#ce0000] mt-8">PROMO PRODUK</h1>
        <p className="text-center text-lg font-semibold text-[#ce0000] mb-10">(KHUSUS PEMESANAN HARI INI)</p>
        <p className="text-gray-500 line-through decoration-red-500 font-bold text-xl mb-4 text-center">Rp 195.000</p>
        <p className="text-[#ce0000] font-bold text-5xl animate-bounce mb-5 text-center">Rp 99.000</p>
        <h1 className="text-center font-bold text-3xl text-[#ce0000] mt-8">HANYA HARI INI SAJA</h1>
      </div>

      <div className="pb-28 mx-3 ps-5">
        <Image
          src={gif}
          alt=""
          className="w-full rounded-lg mt-4"
        />
      </div>
      <div>
        <Link
          onClick={() => {
            // Pelacakan klik pada tombol WhatsApp
            if (typeof fbq !== "undefined") {
              fbq("track", "InitiateCheckout", {
                content_name: "WhatsApp Order Button",
                content_category: "Contact",
                value: 0,
                currency: "IDR",
              });
            }
          }}
          href={"https://wa.me/6285360027891"}
          className="flex fixed bottom-0 right-0 bg-green-500 text-white p-4 shadow-lg z-50 hover:bg-green-600 transition duration-300 w-full text-center text-2xl font-bold items-center justify-center"
        >
          <Image
            alt=""
            src={wa}
            width={50}
            className="me-2"
          />
          Klik Untuk Order
        </Link>
      </div>
    </div>
  );
}