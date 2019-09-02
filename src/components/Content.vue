<template>
    <div>
        <section id='content-one' :style="`background-image: url(${urlImage})`">
            <div class="content">
                <h3 class="lambo-models"> {{text}} </h3>
                <Button />
            </div>
        </section>
    </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Content',
  components: {
    Button
  },
  props: {
    urlImage: String,
    text: String,
  },
}
</script>

<style scoped>
#content-one {
    background-position: center center;
    background-size: cover;
    height: 50rem;
}

.lambo-models {
    color: white;
    font-size: 5vh;
    text-align: center;
    margin: 0 0 0.5 0.5rem;
}

@media only screen and (max-width: 600px) {
    #content-one {
        background-position: center center;
        background-size: cover;
        height: 15rem;
    }
    .lambo-models {
        color: white;
        font-size: 5vh;
        text-align: center;
        margin: 0 0 0.5 0.5rem;
    }
}
</style>
