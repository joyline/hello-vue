<template>
  <div id="head">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
      Mewah.com
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  methods: {
  },
  components: {
  }
}
</script>

<style scoped>
#head {
  z-index: 2;
  top: 0;
  background-color: black;
  margin-bottom: 10px;
  left: 0;
  right: 0;
    position: sticky;
    color: white;
    letter-spacing: .15em;
    font-size: 28pt;
    padding-left: 10px;
}
#nav {
  display: none;
}
#nav.show {
    width:100%;
    position: absolute;
    background-color: black;
    left:0;
}
#nav>a {
  color: white;
  margin-left: 10px;
  font-size: 12pt;
}
.bm-burger-button {
  top: -20px;
  margin-right: -40px;
}
.nav-item {
  color: white;
  padding-bottom: 8px;
  display: block;
  transition: 0.5ms;
}
.nav-item:hover {
  background-color: #dfb400;

}
.fa.fa-bars {
  position: absolute;
  top: 5px;
  right: 20px;
}

@media only screen and (max-width: 600px) {
  .test {
    padding-top: -100px;
  }
  #nav>a {
    color: white;
    font-size: 10pt;
  }
}
</style>
