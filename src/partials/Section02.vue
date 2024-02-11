<template>
  <section data-aos-id-2>
    <div class="relative max-w-7xl mx-auto">

      <!-- Bg -->
      <div class="absolute inset-0 rounded-tr-[100px] mb-24 md:mb-0 bg-slate-800 pointer-events-none -z-10" aria-hidden="true"></div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-12 md:py-20">

          <!-- Section content -->
          <div class="relative max-w-xl mx-auto md:max-w-none text-center md:text-left">

            <!-- Content -->
            <div class="md:max-w-lg">

              <!-- Copy -->
              <h2 class="h2 text-white mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="100">Build a flexible card program for your business needs</h2>
              <p class="text-lg text-slate-400 mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam, quis nostrud exercitation.</p>

              <!-- Button -->
              <div class="max-w-xs mx-auto sm:max-w-none mb-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                <div>
                  <router-link class="btn-sm inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-sm" to="/apply">
                    Get your card
                    <span class="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2">
                      <svg class="fill-current" width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z" />
                      </svg>
                    </span>
                  </router-link>
                </div>
              </div>

              <!-- Quote -->
              <div class="flex max-w-md mx-auto md:mx-0 text-left" data-aos="fade-up" data-aos-anchor="[data-aos-id-2]" data-aos-delay="300">
                <img class="rounded-full self-start shrink-0 mr-3" src="../images/quote-author-01.jpg" width="32" height="32" alt="Quote author 01" />
                <div>
                  <blockquote class="text-slate-400 m-0">
                    “ We know the card market very well and this product provides the speed, flexible account model and API-first approach that no one else can. ”
                  </blockquote>
                </div>
              </div>

            </div>

            <!-- Image -->
            <div class="md:absolute md:left-[412px] md:top-0 -mb-12 mt-8 md:mt-36 md:mb-0">
              <div class="relative -mx-16 md:mx-0">
                <img class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-16 md:mt-0 pointer-events-none -z-10 max-w-none mix-blend-lighten" src="../images/cards-illustration.svg" width="742" height="742" aria-hidden="true" />
                <div data-aos="fade-up" data-aos-anchor="[data-aos-id-2]">
                  <img src="../images/features-02.png" class="md:max-w-none md:rotate-[48deg]" width="775" height="450" alt="Feaatures 01" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Section02',
}
</script>