<template>
  <footer class="relative">

    <!-- Bg -->
    <div class="absolute inset-0 bg-slate-800 -z-10" aria-hidden="true"></div>

    <!-- Illustration -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
      <img class="max-w-none" src="../images/footer-illustration.svg" width="1940" height="381" />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Blocks -->
      <div class="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 border-t border-slate-700">

        <!-- 1st block -->
        <div class="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
          <!-- Logo -->
          <!-- <router-link class="block" to="/" aria-label="Guess">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
              <g fill-rule="nonzero" fill="none">
                <g class="fill-blue-500" transform="translate(3 3)">
                  <circle cx="5" cy="5" r="5" />
                  <circle cx="19" cy="5" r="5" />
                  <circle cx="5" cy="19" r="5" />
                  <circle cx="19" cy="19" r="5" />
                </g>
                <g class="fill-sky-300">
                  <circle cx="15" cy="5" r="5" />
                  <circle cx="25" cy="15" r="5" />
                  <circle cx="15" cy="25" r="5" />
                  <circle cx="5" cy="15" r="5" />
                </g>
              </g>
            </svg>
          </router-link> -->

          <router-link class="block" to="/" aria-label="Cruip">
            <img class="h-8 md:h-10" :src="guessLogo" alt="Guess" />
          </router-link>
        </div>

        <!-- 2nd block -->
        <!-- <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-100 font-bold mb-3">Essentials</h6>
          <ul class="text-sm font-[450] space-y-2">
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Payments</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Budgeting and analytics</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Open banking</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Pockets</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Subscriptions</a>
            </li>
          </ul>
        </div> -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2"></div>

        <!-- 3rd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-100 font-bold mb-3">Company</h6>
          <ul class="text-sm font-[450] space-y-2">
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">About us</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Privacy Policy</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Terms of Service</a>
            </li>
            <!-- <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Code of conduct</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Financial statements</a>
            </li> -->
          </ul>
        </div>

        <!-- 4th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-100 font-bold mb-3">Resources</h6>
          <ul class="text-sm font-[450] space-y-2">
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Blog</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Guides</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Reviews</a>
            </li>
          </ul>
        </div>

        <!-- 5th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-sm text-slate-100 font-bold mb-3">Find us</h6>
          <ul class="text-sm font-[450] space-y-2">
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Send us an email</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Facebook</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Twitter</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">Instagram</a>
            </li>
            <li>
              <a class="text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out" href="#0">TikTok</a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom area -->
      <div class="pb-4 md:pb-8">
        <div class="text-xs text-slate-500">
          Guess isn’t just another feedback tool. It’s your gateway to deeply understanding customer needs and desires. Our service extends beyond simple surveys, providing a platform where customers can speak freely, in their own words, through audio, video, or text. With Guess, you’re not just collecting feedback; you’re engaging in a conversation. Be the first to experience the future of customer feedback. We’re opening the doors for select businesses to get early access to Guess. As an <router-link class="underline text-slate-400 " to="/apply">Early Access Partner</router-link>, you’ll have the opportunity to shape the development of the tool with your insights. You’ll enjoy dedicated support, influence future features, and get special pricing once we launch. Apply for Early Access and lead the charge in revolutionizing customer feedback.

          <!-- <a class="font-medium underline hover:text-blue-500 transition duration-150 ease-in-out" href="#0">here</a> -->
        </div>
      </div>

    </div>
  </footer>
</template>

<script lang="ts" setup>

import guessLogo from "../images/GuessLogomark.svg";



</script>