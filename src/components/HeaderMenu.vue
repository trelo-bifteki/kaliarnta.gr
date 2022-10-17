<template>
  <header
    qa-ref="header-menu"
    class="bg-pink-300 text-black flex flex-row items-center justify-between"
  >
    <div class="p-4 flex-grow">
      Καλιαρντά
    </div>
    <nav>
      <ul class="flex flex-row">
        <li>
          <router-link
            qa-ref="header_menu__search-item"
            to="/lexicon"
            class="block p-4 hover:bg-pink-500 transition"
          >
            Λεξικό
          </router-link>
        </li>
        <li>
          <router-link
            qa-ref="header-menu__dictionary-item"
            to="/search"
            class="block p-4 hover:bg-pink-500 transition"
          >
            Εύρεση
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
