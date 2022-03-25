<template>
    <!-- Name: Laxamana Earn Christian
         Section: WD-201 -->
    <div id="profile">
        <h1>{{ msg }}</h1>
        <p> I'm a student of Holy Angel University with excellent knowledge and skills in Web development. 
        Enthusiastic about web development techonolgies and programming languages. knowledgable in front 
        and back end development.</p>
    </div>
</template>
<script>
    export default {
        name: 'profile',
        data () {
            return {
            msg: 'Profile'
        }
    }
}
</script>

<style>
    #profile {
        background-color: #19242e;
        padding-top: 2px;
    }
    #profile, h1{
        font-style: 'Franklin Gothic Medium';
        color: #42b983;
        font-weight: 800;
        background-color: #19242e;
        
    }
    p {
        
        font-style: Arial;
        font-weight: 600;
        color: aliceblue;
        padding-right: 50px;
        padding-left: 50px;
        padding-bottom: 10px;
        background-color: #19242e;
    }

</style>