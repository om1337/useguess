<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <header class="absolute w-full z-30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 md:h-20">

          <!-- Site branding -->
          <div class="shrink-0 mr-4">
            <!-- Logo -->
            <router-link class="block" to="/" aria-label="Guess">
              <!-- <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
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
              </svg> -->

              <router-link class="block" to="/" aria-label="Cruip">
                <img class="h-8 md:h-10" :src="guessLogo" alt="Guess" />
              </router-link>
            </router-link>
          </div>

        </div>
      </div>
    </header>

    <!-- Page content -->
    <main class="grow">

      <section>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-36 pb-12 md:pt-40 md:pb-20">

            <div class="lg:flex lg:space-x-12 xl:space-x-16">

              <!-- Left side -->
              <div class="grow lg:mt-16 mb-16 lg:mb-0 text-center lg:text-left">

                <h1 class="h2 mb-8">Capture precise customer feedback instantly</h1>

                <div class="mb-12">
                  <ul class="inline-flex flex-col text-slate-500 space-y-2.5">
                    <li class="flex items-center text-left">
                      <svg class="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <circle class="fill-blue-100" cx="10" cy="10" r="10" />
                        <path class="fill-blue-500"
                          d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Create forms that record your customer's voice</span>
                    </li>
                    <li class="flex items-center text-left">
                      <svg class="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <circle class="fill-blue-100" cx="10" cy="10" r="10" />
                        <path class="fill-blue-500"
                          d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Increase your engagement</span>
                    </li>
                    <li class="flex items-center text-left">
                      <svg class="shrink-0 mr-3" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                        <circle class="fill-blue-100" cx="10" cy="10" r="10" />
                        <path class="fill-blue-500"
                          d="M15.335 7.933 14.87 7c-4.025 1.167-6.067 3.733-6.067 3.733l-1.867-1.4-.933.934L8.802 14c2.158-4.025 6.533-6.067 6.533-6.067Z" />
                      </svg>
                      <span>Make real-time decisions on charges and spendings.</span>
                    </li>
                  </ul>
                </div>

                <!-- Press logos -->
                <!-- <div class="w-full">
                  <div class="text-xs text-slate-400 font-[350] uppercase tracking-wider text-center lg:text-left mb-5">
                    Trusted bt the best</div>

                  <div class="flex flex-nowrap items-center justify-center lg:justify-start -m-4 lg:-m-2 xl:-m-4">

                    <div class="p-4 lg:p-2 xl:p-4">
                      <img class="inline-flex max-w-full" src="../images/logo-facebook.svg" width="99" height="19"
                        alt="Facebook" />
                    </div>

                  
                    <div class="p-4 lg:p-2 xl:p-4">
                      <img class="inline-flex max-w-full" src="../images/logo-nike.svg" width="64" height="23"
                        alt="Nike" />
                    </div>

                    <div class="p-4 lg:p-2 xl:p-4">
                      <img class="inline-flex max-w-full" src="../images/logo-samsung.svg" width="95" height="32"
                        alt="Samsung" />
                    </div>

                    <div class="p-4 lg:p-2 xl:p-4">
                      <img class="inline-flex max-w-full" src="../images/logo-disney.svg" width="86" height="36"
                        alt="Disney" />
                    </div>

                  </div>

                </div> -->

              </div>

              <!-- Right side -->
              <div class="relative shrink-0 text-center lg:text-left">

                <!-- Bg -->
                <div
                  class="absolute inset-0 mb-44 -mx-4 sm:-mx-6 lg:-mt-[9999px] lg:ml-0 lg:-mr-[9999px] rounded-bl-[100px] bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10"
                  aria-hidden="true"></div>

                <!-- Illustration -->
                <img
                  class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -mt-40 ml-20 pointer-events-none -z-10 max-w-none mix-blend-lighten"
                  src="../images/hero-illustration.svg" width="960" height="960" aria-hidden="true" />

                <div class="flex pt-12 lg:pt-0 lg:pl-12 xl:pl-20">

                  <div
                    class="w-full max-w-[480px] mx-auto lg:w-[480px] lg:max-w-none lg:mx-0 xl:w-[512px] bg-white p-6 shadow-2xl">
                    <!-- Form -->
                    <form>
                      <div class="space-y-4">
                        <div class="sm:flex items-start justify-between sm:space-x-4">
                          <label class="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0"
                            for="first-name">First name*</label>
                          <div class="sm:w-72 xl:w-80 shrink-0">
                            <input v-model="form.firstName" id="first-name" class="form-input text-sm py-2 w-full" type="text" 
                              placeholder="Patrick" required />
                          </div>
                        </div>
                        <div class="sm:flex items-start justify-between sm:space-x-4">
                          <label class="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0"
                            for="last-name">Last name</label>
                          <div class="sm:w-72 xl:w-80 shrink-0">
                            <input v-model="form.lastName" id="last-name" class="form-input text-sm py-2 w-full" type="text" placeholder="Mills"
                              required />
                          </div>
                        </div>
                        <div class="sm:flex items-start justify-between sm:space-x-4">
                          <label class="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0"
                            for="email">Work email*</label>
                          <div class="sm:w-72 xl:w-80 shrink-0">
                            <input v-model="form.workEmail" id="email" class="form-input text-sm py-2 w-full" type="email"
                              placeholder="patrick@example.com" required />
                          </div>
                        </div>
                        <div class="sm:flex items-start justify-between sm:space-x-4">
                          <label class="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0"
                            for="website">Company Website*</label>
                          <div class="sm:w-72 xl:w-80 shrink-0">
                            <input v-model="form.companyWebsite" id="website" class="form-input text-sm py-2 w-full" type="text"
                              placeholder="example.com" required />
                          </div>
                        </div>
                        <div class="sm:flex items-start justify-between sm:space-x-4">
                          <label class="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0"
                            for="company-size">Company size</label>
                          <div class="sm:w-72 xl:w-80 shrink-0">
                            <select v-model="form.companySize" id="company-size" class="form-select text-sm py-2 w-full" required>
                              <option>Less than 10</option>
                              <option>More than 10</option>
                              <option>More than 20</option>
                              <option>More than 50</option>
                            </select>
                          </div>
                        </div>
                        <div class="sm:flex items-start justify-between sm:space-x-4">
                          <label class="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0"
                            for="country">Country</label>
                          <div class="sm:w-72 xl:w-80 shrink-0">
                            <select v-model="form.country" id="country" class="form-select text-sm py-2 w-full" required>
                              <option>United States</option>
                              <option>United Kingdom</option>
                              <option>Germany</option>
                              <option>Italy</option>
                            </select>
                          </div>
                        </div>
                        <div class="sm:flex items-start justify-between sm:space-x-4">
                          <label class="block text-sm leading-5 mt-2.5 text-slate-800 font-[550] text-left mb-1.5 sm:mb-0"
                            for="comment">Anything else?</label>
                          <div class="sm:w-72 xl:w-80 shrink-0">
                            <textarea v-model="form.comment" id="comment" class="form-textarea text-sm py-2 w-full" rows="4"></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="mt-6 text-right">
                        <button @click.prevent="signUpEarlyAccess" type="submit"
                          class="btn-sm inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-sm">Apply for early access</button>
                        
                        <p class=" mt-2 text-sm text-green-700" v-if="formSuccess === true">Your response has been successfully submitted!</p>
                    </div>
                  </form>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

    </section>

  </main>

</div></template>

<script lang="ts" setup>
import { ref } from "vue";
import { db } from '../main.js';
import { collection, addDoc } from "firebase/firestore";

import guessLogo from "../images/GuessLogo3-Dark.svg";

async function signUpEarlyAccess() {
    try {
        const docRef = await addDoc(collection(db, "early-access-form"), {
            first_name: form.value.firstName,
            last_name: form.value.lastName,
            work_email: form.value.workEmail,
            company_website: form.value.companyWebsite,
            company_size: form.value.companySize,
            country: form.value.country,
            additional_comment: form.value.comment
        });

        console.log("email submitted", docRef);
        alert("Thanks for signing up!");

        formSuccess.value = true;

        setTimeout(() => {
            formSuccess.value = false;
        }, 3000);

        form.value.firstName = "";
        form.value.lastName = "";
        form.value.workEmail = "";
        form.value.companyWebsite = "";
        form.value.companySize = "";
        form.value.country = "";
        form.value.comment = "";


    } catch (error) {
        console.error("Error adding document: ", error);
        alert("There was an error signing up. Please try again.");
    }
}

const form = ref({
  firstName: "",
  lastName: "",
  workEmail: "",
  companyWebsite: "",
  companySize: "",
  country: "",
  comment: "",
});

const formSuccess = ref(false);

</script>