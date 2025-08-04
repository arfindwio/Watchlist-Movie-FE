<template>
  <div
    class="relative flex h-screen items-center justify-center bg-[url('./images/background-movies.jpg')] bg-cover bg-center"
  >
    <div class="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

    <div
      class="relative z-10 flex h-screen w-full flex-col justify-center rounded-md bg-black bg-opacity-75 p-10 sm:h-auto sm:w-[45%] md:w-[40%] lg:w-[35%]"
    >
      <h1 class="mb-6 text-center text-3xl font-bold text-[#e50914]">
        WATCHLISTS
      </h1>
      <div class="mb-4 w-full">
        <p class="mx-auto max-w-60 text-xl font-bold text-white sm:max-w-none">
          Register
        </p>
      </div>
      <form class="mx-auto flex w-full max-w-60 flex-col gap-4 sm:max-w-none">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          class="w-full rounded-md border-2 border-slate-500 bg-transparent px-4 py-3 text-sm placeholder:text-slate-300 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          class="w-full rounded-md border-2 border-slate-500 bg-transparent px-4 py-3 text-sm placeholder:text-slate-300 focus:outline-none"
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          class="w-full rounded-md border-2 border-slate-500 bg-transparent px-4 py-3 text-sm placeholder:text-slate-300 focus:outline-none"
        />
        <input
          type="text"
          name="confirmPassword"
          placeholder="onfirm Password"
          class="w-full rounded-md border-2 border-slate-500 bg-transparent px-4 py-3 text-sm placeholder:text-slate-300 focus:outline-none"
        />
        <button
          class="rounded-md bg-[#e50914] py-2 text-center text-base font-semibold text-white"
        >
          Register
        </button>
        <p class="text-center font-normal text-slate-400">ATAU</p>
        <button
          class="rounded-md bg-slate-600 bg-opacity-60 py-2 text-center text-base font-semibold text-white"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
