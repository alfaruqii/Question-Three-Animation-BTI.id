<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Category from "./Category.vue";

const navbarScrolled = ref(false);

const handleScroll = () => {
  navbarScrolled.value = window.scrollY > 100; // Adjust the scroll distance as needed
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      navbarScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4',
    ]"
  >
    <div
      class="container mx-auto flex items-center justify-between p-6 transition-all duration-500"
      :class="navbarScrolled ? 'justify-center gap-16' : ''"
    >
      <!-- Logo -->
      <div class="flex-shrink-0">
        <img src="/airbnb.png" alt="Airbnb Logo" class="h-10" />
      </div>

      <div
        :class="[
          'transition-transform duration-500 ease-in-out transform-gpu',
          navbarScrolled ? 'scale-90' : 'scale-0 translate-y-32 collapse',
        ]"
        class="flex-grow mx-6"
      >
        <div
          class="flex items-center shadow-xl border rounded-full px-4 py-4 space-x-4"
        >
          <input
            type="text"
            placeholder="Kemana saja"
            class="bg-transparent outline-none flex-grow text-sm placeholder-black font-bold border-r"
          />
          <input
            type="text"
            placeholder="Minggu mana pun"
            class="bg-transparent outline-none flex-grow text-sm placeholder-black font-bold border-r"
          />
          <input
            type="text"
            placeholder="Tambahkan tamu"
            class="bg-transparent outline-none flex-grow text-sm placeholder-gray-500"
          />
          <button class="bg-pink-500 text-white p-2 rounded-full">
            <img src="/search.png" alt="Search" class="h-4 w-4" />
          </button>
        </div>
      </div>
      <!-- Search Bar -->
      <div v-if="!navbarScrolled">
        <div
          :class="[
            'transition-transform duration-500 ease-in-out transform-gpu flex gap-16 justify-center',
            navbarScrolled ? 'scale-0 -translate-y-32' : 'scale-100',
          ]"
          class="flex-grow mx-6"
        >
          <p class="font-bold">Tempat Menginap</p>
          <p>Pengalaman</p>
        </div>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center space-x-4">
        <a href="#" class="text-sm font-medium text-gray-800"
          >Jadikan rumah Anda Airbnb</a
        >
        <button class="p-2 border rounded-full bg-gray-100">
          <img src="/defaultpp.png" alt="Menu" class="h-5 w-5" />
        </button>
      </div>
    </div>
    <div
      :class="[
        'transition-transform duration-500 ease-in-out transform-gpu',
        navbarScrolled ? 'scale-0 -translate-y-10 collapse' : 'scale-100',
      ]"
      class="flex-grow mx-6 mb-6"
    >
      <div
        class="flex items-center shadow-xl border rounded-full px-4 py-4 space-x-4"
      >
        <input
          type="text"
          placeholder="Lokasi"
          class="bg-transparent outline-none flex-grow text-sm placeholder-gray-500 border-r"
        />
        <input
          type="text"
          placeholder="Check in / Tambahkan tanggal"
          class="bg-transparent outline-none flex-grow text-sm placeholder-gray-500 border-r"
        />
        <input
          type="text"
          placeholder="Peserta / Tambahkan tamu"
          class="bg-transparent outline-none flex-grow text-sm placeholder-gray-500"
        />
        <button class="bg-pink-500 text-white p-2 rounded-full">
          <img src="/search.png" alt="Search" class="h-4 w-4" />
        </button>
      </div>
    </div>

    <div class="flex justify-center py-2 border-t border-gray-200">
      <ul class="flex space-x-12 text-sm font-medium">
        <Category
          imgPath="https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png"
          category="Ikan Pop"
        />
        <Category
          imgPath="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
          category="wow"
        />
        <Category
          imgPath="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
          category="Rumah Kecil"
        />
        <Category
          imgPath="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
          category="Pemandangan"
        />
        <Category
          imgPath="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
          category="Dekat pantai"
        />
        <Category
          imgPath="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
          category="Taman Nasional"
        />
        <Category
          imgPath="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
          category="Pedesaan"
        />
        <Category
          imgPath="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
          category="Kabin"
        />
        <Category
          imgPath="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
          category="Peternakan"
        />
        <Category
          imgPath="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
          category="Kolam renang"
        />
        <Category
          imgPath="https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg"
          category="Mandiri energi"
        />
      </ul>
    </div>
  </nav>
</template>
