<template>
  <div id="app">
    <nav class="menu">
      <div class="container">
        <Menu />
      </div>
    </nav>

    <section class="banner">
      <div class="container">
        <Banner />
      </div>
    </section>

    <section class="videos">
      <div class="container">
        <Video />
      </div>
    </section>

    <section class="store">
      <div class="round">
        <div class="container">
          <Store />
        </div>
      </div>
    </section>

    <section class="gallery">
      <div class="container">
        <Gallery />
      </div>
    </section>

    <section class="about">
      <About />
    </section>

    <section class="informations">
      <div class="round">
          <Informations />
      </div>
    </section>

    <section class="partners">
      <div class="container">
        <Partners />
      </div>
    </section>

    <section class="social">
      <div class="container">
        <SocialFooter />
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <Footer />
      </div>
    </footer>
  </div>
</template>

<script>
  import Menu from './components/Menu';
  import Banner from './components/Banner';
  import Video from './components/Video';
  import Store from './components/Store';
  import Gallery from './components/Gallery';
  import About from './components/About';
  import Informations from './components/Informations';
  import Partners from './components/Partners';
  import SocialFooter from './components/SocialFooter'
  import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Menu,
    Banner,
    Video,
    Store,
    Gallery,
    About,
    Informations,
    Partners,
    SocialFooter,
    Footer
  }
}
</script>

<styl
    Informationse>

</style>
