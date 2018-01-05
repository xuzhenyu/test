<template>
    <div>
    <CarList></CarList>
    <Section1></Section1> 
    <Scroll></Scroll>
    </div>
</template>
<script>
    import CarList from './carlist.vue'
    import Section1 from './section.vue'
    import Scroll from './scroll.vue'

    export default {
        components:{
            CarList,
            Section1,
            Scroll
        },
          mounted(){
            this.scrolled();
          },
          methods:{
            scrolled(){
        var swiper = new Swiper('.swiper-container', {
                  pagination: '.swiper-pagination',
                  nextButton: '.swiper-button-next',
                  prevButton: '.swiper-button-prev',
                  paginationClickable: true,
                  spaceBetween: 30,
                  centeredSlides: true,
                  autoplay: 2500,
                  autoplayDisableOnInteraction: false
              });
            }
          }
    }
</script>