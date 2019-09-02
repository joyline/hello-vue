<template>
    <div id="show">
        <Header />
        
        <span class="nav-btn" v-on:click="openNav()">&#9776;</span>
        <div class="test-sidenav" id="mySidenav">
            <span class="btn-close" v-on:click="closeNav()" tabindex="0">&times;</span>
            <router-link to="/shop">Shop</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/help">Help</router-link>
        </div>

        <Content urlImage="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-roadster/slider/aventador-1.jpg" text="Lamborghini Models"/>
        <Content urlImage="https://media.wired.com/photos/5ceeed5b0bdd96c34c6174a3/master/pass/01_Ferrari_SF90_03.jpg" text="Ferrari Models"/>
        <Content urlImage="https://cdp.azureedge.net/products/USA/DU/2018/MC/SPORT/XDIAVEL_S/50/THRILLING_BLACK/2000000018.jpg" text="Ducati Models"/>
        <Footer />
    </div>
</template>


<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './Content.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import $ from 'jquery'

$(document).keyup((e) => {
  if (e.key == 'Escape') {
    closeNav();
  }
})

const sli = () => {
  document.getElementById("test-nav").style.width = "250px";
}
const openNav = () => {
  if(document.getElementById("mySidenav").style.width == "250px") {
    document.getElementById("mySidenav").style.opacity = "0";
    document.getElementById("mySidenav").style.width = "0px";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.opacity = "1";
  }  
}

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0px";
  document.getElementById("mySidenav").style.opacity = "0";
}

export default {
  name: 'Main',
  components: {
    Content,
    Header,
    Footer
  },
  methods: {
    sli,
    openNav,
    closeNav
  }
}
</script>

<style scoped>
#show {
    background-color: black;
    position: relative;
}

#head {
    color: white;
    letter-spacing: .15em;
    font-size: 28pt;
}

.test-sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: black;
    overflow-x: hidden;
    transition: 1s;
    padding-top: 60px;
}
.test-sidenav a{
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: white;
    display: block;
    transition: 1.5s;
}
.test-sidenav a:hover {
  color: #f1f1f1;
}
.test-sidenav .btn-close {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: white;
}
.nav-btn {
    font-size: 30px;
    cursor: pointer;
    color: white;
    position: fixed;
    right: 20px;
    top: -2px;
    z-index: 2;
}


#content-two {
    background-position: center center;
    background-image: url(https://media.wired.com/photos/5ceeed5b0bdd96c34c6174a3/master/pass/01_Ferrari_SF90_03.jpg);
    background-size: cover;
    height: 50rem;
}

#content-three {
    background-position: center center;
    background-image: url(https://cdp.azureedge.net/products/USA/DU/2018/MC/SPORT/XDIAVEL_S/50/THRILLING_BLACK/2000000018.jpg);
    background-size: cover;
    height: 50rem;
}

.btn {
    left: 42.5%;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #dfb400;
}

.btn.ferrari {
    left: 42.5%;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #dfb400;
}

.lambo-models {
    color: white;
    font-size: 5vh;
    text-align: center;
    margin: 0 0 0.5 0.5rem;
}

.ferrari-models {
    color: white;
    font-size: 5vh;
    text-align: center;
    margin: 0 0 0 0rem;
}

.ducati-models {
    color: white;
    font-size: 5vh;
    text-align: center;
    margin: 0 0 -1 0rem;
}

.discover {
    color: white;
    display: inline-block;
    text-transform: capitalize;
}

#div1 {
    width:80px;
    height:80px;
    display:none;
    background-color:red;
}

#div2 {
    width:80px;
    height:80px;
    display:none;
    background-color:green;
}

#div3 {
    width:80px;
    height:80px;
    display:none;
    background-color:blue;   
}

#panel, #flip {
  padding: 5px;
  text-align: center;
  background-color: #e5eecc;
  border: solid 1px #c3c3c3;
}

#panel {
  padding: 50px;
  display: none;
}

#welcome {
  height: auto;
  width: 100%;
}

@media screen and (max-height: 450px) {
  .test-sidenav {padding-top: 15px;}
  .test-sidenav a {font-size: 18px;}
}

@media only screen and (max-width: 600px) {
    #show {
        background-color: black;
    }

    #head {
        color: white;
        font-size: 18pt;
        letter-spacing: .15em;
    }

    #content-two {
        background-position: center center;
        background-image: url(https://media.wired.com/photos/5ceeed5b0bdd96c34c6174a3/master/pass/01_Ferrari_SF90_03.jpg);
        background-size: cover;
        height: 17rem;
    }

    #content-three {
        background-position: center center;
        background-image: url(https://cdp.azureedge.net/products/USA/DU/2018/MC/SPORT/XDIAVEL_S/50/THRILLING_BLACK/2000000018.jpg);
        background-size: cover;
        height: 15rem;
    }

    .btn {
        left: 32%;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: #dfb400;
    }

    .btn.ferrari {
        left: 32%;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: #dfb400;
    }

    .lambo-models {
        color: white;
        font-size: 5vh;
        text-align: center;
        margin: 0 0 0.5 0.5rem;
    }

    .ferrari-models {
        color: white;
        font-size: 5vh;
        text-align: center;
        margin: 0 0 0 0rem;
    }

    .ducati-models {
        color: white;
        font-size: 5vh;
        text-align: center;
        margin: 0 0 -1 0rem;
    }

    .discover {
        color: white;
        display: inline-block;
        text-transform: capitalize;
    }

    #div1 {
        width:80px;
        height:80px;
        display:none;
        background-color:red;
    }

    #div2 {
        width:80px;
        height:80px;
        display:none;
        background-color:green;
    }

    #div3 {
        width:80px;
        height:80px;
        display:none;
        background-color:blue;   
    }

    #panel, #flip {
    padding: 5px;
    text-align: center;
    background-color: #e5eecc;
    border: solid 1px #c3c3c3;
    }

    #panel {
    padding: 50px;
    display: none;
    }

    #welcome {
        height: auto;
        width: 100%;
    } 
}
</style>
