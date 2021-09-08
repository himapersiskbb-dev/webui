<template>
  <!-- main container  -->
  <div class="flex items-center flex-col w-full h-screen">
    <div class="flex items-center flex-col w-7/12 space-y-1">
      <!-- navbar -->
      <div class="flex justify-center w-full mx-2 space-x-1">
        <!-- item  -->
        <base-card class="cursor-pointer w-4/12">
          <div
            class="
              flex flex-row
              w-full
              justify-center
              text-gray-600
              items-center
              space-x-6
            "
          >
            <font-awesome-icon class="left-icon text-4xl" icon="id-badge" />

            <div class="flex flex-col">
              <h5 class="font-bold text-md">PROFIL</h5>
              <p class="text-sm text-gray-400">
                Hima Persis Kab. Bandung Barat
              </p>
            </div>
          </div>
        </base-card>
        <!-- item  -->
        <base-card class="cursor-pointer w-4/12">
          <div
            class="
              flex flex-row
              w-full
              justify-center
              text-gray-600
              items-center
              space-x-6
            "
          >
            <font-awesome-icon class="left-icon text-4xl" icon="users" />

            <div class="flex flex-col">
              <h5 class="font-bold text-md">ANGGOTA</h5>
              <p class="text-sm text-gray-400">
                Hima Persis Kab. Bandung Barat
              </p>
            </div>
          </div>
        </base-card>
        <!-- item  -->
        <base-card class="cursor-pointer w-4/12">
          <div
            class="
              flex flex-row
              w-full
              justify-center
              text-gray-600
              items-center
              space-x-6
            "
          >
            <font-awesome-icon class="left-icon text-4xl" icon="home" />

            <div class="flex flex-col">
              <h5 class="font-bold text-md">SEKRETARIAT</h5>
              <p class="text-sm text-gray-400">
                Hima Persis Kab. Bandung Barat
              </p>
            </div>
          </div>
        </base-card>
      </div>

      <!-- content -->
      <base-card class="w-full">
        <div
          class="
            flex
            w-full
            items-center
            justify-center
            flex-col
            py-28
            space-y-5
          "
        >
          <font-awesome-icon
            class="left-icon text-8xl text-gray-400"
            icon="question"
          />
          <div class="text-center">
            <h2 class="text-2xl text-gray-400 font-bold">
              Pilih Informasi yang Akan Ditampikan!
            </h2>
            <p class="text-gray-400 text-sm">
              Maaf, sementara konten masih diolah oleh pihak internal kita
            </p>
          </div>
        </div>
      </base-card>
    </div>
  </div>
</template>
