"use client"

import Image from "next/image";
import Link from "next/link";

import logow from "@/public/logowhite.svg"
import wa from "@/public/WhatsApp.svg"

import fb1 from "@/public/png/img1.png"
import fb2 from "@/public/png/img2.png"
import fb3 from "@/public/png/img3.png"
import fb4 from "@/public/png/png4.jpg"
import fb5 from "@/public/png/img10.png"
import fb6 from "@/public/png/img7.webp"
import fb7 from "@/public/png/img8.png"
import fb9 from "@/public/png/img9.png"
import gif2 from "@/public/png/gif2.gif"
import gif1 from "@/public/png/gif1.gif"
import bank from "@/public/png/img5.webp"
import ekspedisi from "@/public/png/img6.webp"

export default function Home() {
  return (
    <div className="max-w-[425px] mx-auto">
      <div className="bg-red-500 flex justify-center">
        <Image
          src={logow}
          alt=""
          className="w-64 py-4"
        />
      </div>
      <div className="mx-4">
        <div>
          <h1 className="text-center text-2xl font-bold mt-8 mb-8">Masak lebih cepat & aman dengan Parutan Serbaguna 11 in 1!</h1>

          <Image
            src={fb1}
            alt=""
            className="rounded-xl"
          />

          <p className="text-center mt-6 text-lg font-medium">
            Dilengkapi 11 mata pisau stainless steel, alat ini memudahkan Anda mengiris, memotong, dan memarut dengan cepat. Solusi praktis untuk memasak tanpa ribet! ✨🍽️
          </p>

          <div className="my-6 py-6 bg-red-500">
            <h1 className="font-bold text-2xl text-white text-center mb-6">KEUNGGULAN PRODUCT</h1>
            <div className="mx-4">
              <p className="text-lg font-medium text-white">✨ 11 fungsi dalam 1 alat! Parut, iris, potong, kupas & banyak lagi!</p>
              <p className="text-lg font-medium text-white">✨ Super tajam & anti karat, hasil presisi tanpa ribet!</p>
              <p className="text-lg font-medium text-white">✨ Aman & mudah dipakai, dilengkapi hand guard!</p>
              <p className="text-lg font-medium text-white">✨ Hemat waktu di dapur, masakan jadi cepat siap!</p>
            </div>
          </div>

          <Image
            src={fb7}
            alt=""
            className="rounded-xl"
          />

          <Image
            src={fb2}
            alt=""
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="bg-red-500 flex justify-center mt-6">
        <h1 className="font-bold text-3xl text-white py-4">SPESIFIKASI PRODUCT</h1>
      </div>

      <div className="mx-4">
        <div className="mt-6 mb-6">
          <p className="text-xl font-medium">✅ Material Produk : Plastik, Stainless Steel</p>
          <p className="text-xl font-medium">✅ Warna Produk : Biru, Pink</p>
          <p className="text-xl font-medium">✅ Ukuran Produk : 17 x 28 x 8.5 cm</p>
        </div>

        <Image
          src={fb3}
          alt=""
          className="rounded-xl mb-6"
        />

        <Image
          src={fb9}
          alt=""
          className="rounded-xl"
        />

        <div>
          <p className="text-center mt-10 font-bold text-3xl mb-2">
            MILIKI PRODUK INI SEBELUM KEHABISAN
          </p>
          <p className="text-center mt-8 font-bold text-xl">
            HARGA ASLINYA
          </p>
          <p className="text-center mt-2 font-bold text-5xl mb-8 line-through decoration-red-500">
            Rp.180.000/pcs
          </p>
        </div>
      </div>

      <Image
        src={gif1}
        alt=""
        className="rounded-xl"
      />

      <div className="mx-4">
        <p className="text-center mt-8 font-bold text-3xl mb-2">
          Kamu beruntung datang hari ini!
        </p>
        <p className="text-center mt-2 font-bold text-2xl text-blue-500">
          KAMI MEMBERIKAN DISKON 50%
        </p>
        <p className="text-center mt-6 font-bold text-6xl mb-4 text-red-500">
          Rp.90.000
        </p>
        <p className="text-center font-bold text-xl text-red-500">
          Jangan tunggu! Stok Terbatas
        </p>

        <div>
          <p className="text-center font-medium text-xl mt-10 mb-4">
            Silahkan klik tombol dibawah ini
          </p>

          <Link
            href={"https://wa.me/6285360027891"}
            className="bg-orange-500 text-white text-2xl font-bold px-6 py-4 rounded-xl flex justify-center"
          >
            BELI SEKARANG (BISA COD)
          </Link>
        </div>
      </div>

      <Image
        src={gif2}
        alt=""
        className="rounded-xl mt-6 mb-6"
      />

      <div className="mx-4">
        <p className="text-center mt-8 font-bold text-2xl mb-2 text-red-600">
          BELI SEKARANG UNTUK MENDAPATKAN PENAWARAN
        </p>
      </div>

      <Image
        src={fb6}
        alt=""
        className="rounded-xl mt-6 mb-6"
      />

      <Image
        src={fb4}
        alt=""
        className="rounded-xl mb-6"
      />

      <div className="bg-red-500">
        <p className="text-center mt-8 font-bold text-2xl mb-2 text-white py-2">
          TESTIMONI CUSTOMER
        </p>
      </div>

      <Image
        src={fb5}
        alt=""
        className="rounded-xl mt-6 mb-6"
      />

      <div className="mx-4">
        <p className="text-center mt-8 font-semibold text-lg mb-6 text-red-600">
          Jika yang Anda terima tidak sesuai iklan / foto, tenang kami ganti uang anda 100%
        </p>
        <p className="text-center font-semibold text-base mb-2 text-blue-600">
          Kami produksi produk ini sendiri. sehingga bisa dipastikan produk ini adalah produk dengan kualitas rendah
        </p>
      </div>

      <Image
        src={bank}
        alt=""
        className="rounded-xl mt-6 flex justify-center"
      />

      <Image
        src={ekspedisi}
        alt=""
        className="rounded-xl mb-6 flex justify-center"
      />

      <div className="mx-4">
        <p className="text-center mt-8 font-bold text-2xl">
          ADMIN KAMI SIAP MEMBANTU
        </p>
        <p className="text-center mt-4 font-semibold text-lg mb-2">
          Checkout atau Order dari whatsapp official kami.
        </p>

        <Link
          href={"https://wa.me/6285360027891"}
          className="bg-green-500 text-white text-2xl font-bold px-6 py-2 rounded-xl flex justify-center mb-6 mt-6"
        >
          <div className="flex items-center">
            <div>
              <Image
                src={wa}
                alt=""
                className="rounded-xl w-12 me-4"
              />
            </div>
            WhatsApp
          </div>
        </Link>

        <p className="text-center mt-4 font-semibold text-lg mb-8">
          Melayani informasi seputar produk yang kami tawarkan.
        </p>
      </div>
    </div>
  );
}