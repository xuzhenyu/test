<template>
    <div>
    <CarList></CarList>
    <Section1></Section1> 
    <Scroll></Scroll>
    <Toast></Toast>
    </div>
</template>
<script>
    import CarList from './carlist.vue'
    import Section1 from './section.vue'
    import Scroll from './scroll.vue'
    import Toast from './toast.vue'

    export default {
        components:{
            CarList,
            Section1,
            Scroll,
            Toast
        }
    }
</script>