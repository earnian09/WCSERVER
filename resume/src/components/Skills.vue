<template>
    <!-- Name: Laxamana Earn Christian
         Section: WD-201 -->
    <div id="skills">
        <h1>{{ msg1 }}</h1>
        <h2>Programming Languages:</h2>
        <p>Java, Python, Javascript, HTML, PHP</p>
        <h2>Technical Skills</h2>
        <p>Testing, Debugging, Responsive Design, User Experience, User Interface</p>
        <h2>Soft Skills</h2>
        <p>Communication, Patience, Time Management, Creativity, Collaboration, Leadership</p>
    </div>
</template>
<script>
    export default {
        name: 'skills',
        data () {
            return {
            msg1: 'Web Development Skills'
        }
    }
}
</script>

<style>
    #skills, h2 {
        color: aliceblue;
        background-color: #19242e;
    }
    h2 {
        padding-top: 5px;
    }
</style>