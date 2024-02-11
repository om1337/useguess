<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <Hero />
      <Section01 />
      <Faqs />
      <Cta />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Hero from '../partials/Hero.vue'
import Section01 from '../partials/Section01.vue'
import Section02 from '../partials/Section02.vue'
import Section03 from '../partials/Section03.vue'
import Section04 from '../partials/Section04.vue'
import Section05 from '../partials/Section05.vue'
import Section06 from '../partials/Section06.vue'
import Section07 from '../partials/Section07.vue'
import Faqs from '../partials/Faqs.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Section01,
    Section02,
    Section03,
    Section04,
    Section05,
    Section06,
    Section07,
    Faqs,
    Cta,
    Footer,
  },
}
</script>