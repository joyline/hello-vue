<template>
    <div>
        <router-link to="/product" class="btn"> <span class="discover">Discover More</span> </router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Button',
  components: {
  },
  props: {
  },
}
</script>

<style scoped>
.btn {
    left: 42.5%;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #dfb400;
}
.btn:hover {
    background-color: coral;
}
.discover {
    color: white;
    display: inline-block;
    text-transform: uppercase;
}

@media only screen and (max-width: 600px) {
    .btn {
        left: 32%;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: #dfb400;
    }
    .discover {
        color: white;
        display: inline-block;
        text-transform: uppercase;
    }
}
</style>
