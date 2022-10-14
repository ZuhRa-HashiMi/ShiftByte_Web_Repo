<template>
<nav class="navbar navbar-expand-sm my-color navbar-dark fixed-top">
    <a href="#" class="navbar-brand">
        <img src="../assets/shift.jpg" alt="" style="width: 80px; ">
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapseu" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Logo</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Partners</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Insights</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Career</a></li>
        </ul>

    </div>
   
</nav>
<jumBotron />
<SerVices />
<Footer />

</template>

<script>
import jumBotron from "./jumBotron.vue"
import SerVices from "./SerVices.vue"
import Footer from "./Footer.vue"
export default {
    components: {
    jumBotron,
    SerVices,
    Footer
},

};
</script>

<style>
.my-color {
    background: black;
}
</style>
