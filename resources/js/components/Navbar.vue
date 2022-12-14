<template>
    <header>
        <!-- Navbar section -->
        <div class="humberger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <div id="navbar" class="navbar">
            <div class="logo">
                <!-- <a href="index.html"><img src="../assets/image.png/shift.png" alt="page logo" /></a> -->
            </div>
            <ul>
                <li class="links home-page"><a href="index.html">Home</a></li>
                <li class="links"><a href="about.html">About</a></li>
                <li class="links"><a href="#">Services</a></li>
                <li class="links"><a href="#">Partners</a></li>
                <li class="links"><a href="#">Insights</a></li>
                <li class="links last-link"><a href="#">Creer</a></li>
                <li class="links focused"><a href="#">About Us</a></li>
            </ul>
        </div>
    </header>
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
@import '../assets/style.css';
</style>