<template>
  <div
    class="relative flex h-screen items-center justify-center bg-[url('./images/background-movies.jpg')] bg-cover bg-center"
  >
    <div class="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

    <div class="relative z-10 w-[35%] rounded-md bg-black bg-opacity-75 p-10">
      <h1 class="mb-6 text-center text-3xl font-bold text-[#e50914]">
        WATCHLISTS
      </h1>
      <p class="mb-4 text-xl font-bold text-white">Login</p>
      <form class="flex w-full flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          class="focus:border-1 w-full rounded-md border-2 border-slate-500 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white"
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          class="focus:border-1 w-full rounded-md border-2 border-slate-500 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white"
        />
        <button
          class="rounded-md bg-[#e50914] py-2 text-center text-base font-semibold text-white"
        >
          Login
        </button>
        <p class="text-center font-normal text-slate-400">ATAU</p>
        <button
          class="rounded-md bg-slate-600 bg-opacity-60 py-2 text-center text-base font-semibold text-white"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>
