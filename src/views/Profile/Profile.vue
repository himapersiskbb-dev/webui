<template>
  <!-- main container  -->
  <div class="flex items-center flex-col w-full h-screen">
    <div
      class="flex items-center flex-col w-11/12 md:w-9/12 xl:w-7/12 space-y-1"
    >
      <!-- navbar -->
      <div
        class="
          flex flex-col
          md:flex-row
          justify-center
          w-full
          mx-2
          space-y-1
          md:space-y-0 md:space-x-1
        "
      >
        <!-- item  -->
        <base-card
          @click="handleClick('profile-home')"
          class="
            transition-all
            cursor-pointer
            w-full
            md:w-4/12
            hover:bg-gray-300
          "
          :class="{ 'bg-gray-600': selectedComponent === 'profile-home' }"
        >
          <div
            class="flex flex-row w-full justify-center items-center space-x-6"
            :class="{ 'text-white': selectedComponent === 'profile-home' }"
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
        <base-card
          @click="handleClick('member-list')"
          class="
            transition-all
            cursor-pointer
            w-full
            md:w-4/12
            hover:bg-gray-300
          "
          :class="{ 'bg-gray-600': selectedComponent === 'member-list' }"
        >
          <div
            class="flex flex-row w-full justify-center items-center space-x-6"
            :class="{ 'text-white': selectedComponent === 'member-list' }"
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
        <base-card
          @click="handleClick('address')"
          class="
            transition-all
            cursor-pointer
            w-full
            md:w-4/12
            hover:bg-gray-300
          "
          :class="{ 'bg-gray-600': selectedComponent === 'address' }"
        >
          <div
            class="flex flex-row w-full justify-center items-center space-x-6"
            :class="{ 'text-white': selectedComponent === 'address' }"
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
        <div class="">
          <!-- if not clicked -->
          <div
            v-if="!selectedComponent"
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
              <p class="text-gray-400 text-sm">Dengan menekan tombol di atas</p>
            </div>
          </div>

          <!-- render dynamic comp -->
          <div v-else><component :is="selectedComponent"></component></div>
        </div>
      </base-card>
    </div>
  </div>

  <foot-er />
</template>

<script>
import ProfileHome from "../../components/profile/ProfileHome.vue";
import MemberList from "../../components/profile/MemberList.vue";
import Address from "../../components/profile/Address.vue";
export default {
  components: { ProfileHome, MemberList, Address },

  data() {
    return {
      selectedComponent: "",
    };
  },

  methods: {
    handleClick(component) {
      this.selectedComponent = component;
    },
  },
};
</script>
