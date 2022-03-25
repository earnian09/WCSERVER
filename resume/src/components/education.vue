<template>
    <!-- Name: Laxamana Earn Christian
         Section: WD-201 -->
    <div id="education">
        <h1>{{ msg }}</h1>
        <p>Elementary: C.C.E.M.I Academy</p>
        <p>Junior Highschool: C.C.E.M.I Academy</p>
        <p>Senior: C.C.E.M.I Academy (ABM Strand)</p>
        <p>College: C.C.E.M.I Academy (BS Information Technology Web Development)</p>
    </div>
</template>
<script>
    export default {
        name: 'education',
        data () {
            return {
            msg: 'Education'
        }
    }
}
</script>

<style>
    #education, h1{
        font-style: 'Franklin Gothic Medium';
        color: #42b983;
        font-weight: 800;
        
    }
    #education, h2 {
        color: aliceblue;
        background-color: #19242e;
        padding-bottom: 10px;
    }
</style>