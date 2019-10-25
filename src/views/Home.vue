<template>
  <div class="home">
    <figure class="logo logo--top js-trigger">
      <router-link to="/index">
        <span>E M I T</span>
      </router-link>
    </figure>
    <div class="scroll" data-scroll>
      <nav class="filter">
        <ul class="filter_list">
          <li class="filter_item">
            <router-link to="/contact" class="filter_link is-active js-trigger">
              <div class="filter_link-mask" area-hidden>
                <span>CONTACT</span>
              </div>
              CONTACT
            </router-link>
          </li>
          <li class="filter_item">
            <router-link to="/about" class="filter_link is-active js-trigger">
              <div class="filter_link-mask" area-hidden>
                <span>ABOUT</span>
              </div>
              ABOUT
            </router-link>
          </li>
          <li class="filter_item">
            <router-link to="/joinUs" class="filter_link is-active js-trigger">
              <div class="filter_link-mask" area-hidden>
                <span>JOIN US</span>
              </div>
              JOIN US
            </router-link>
          </li>
          <li class="filter_item">
            <router-link to="/adress" class="filter_link is-active js-trigger">
              <div class="filter_link-mask" area-hidden>
                <span>ADRESS</span>
              </div>
              ADRESS
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="scroll-content" data-scroll-content>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return{

    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll)
  },
  methods:{
    handleScroll:function () {

    }
  }
}
</script>
<style lang="scss">
  .home{
    width: 100vw;
  }
  figure{
    padding: 0;
    margin: 0;
    position: fixed;
    top: 2vw;
    left: 2vw;
    z-index: 10;
    span{
      font-family: "butler", "Times New Roman", "Times", "Baskerville", "Georgia", serif;
      /*color: white;*/
      color: black;
    }
  }
  .scroll{
    cursor: grab;
  }
  .scroll-content{
    display: flex;
    white-space: nowrap;
    position: relative;
    height: 100vh;
  }
  .filter{
    position: absolute;
    top: 7.5%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    &_list{
      display: flex;
    }
    &_item{
      display: block;
    }
    &_link{
      position: relative;
      display: block;
      /*color: rgba(255, 255, 255, 0.5);*/
      color: rgba(black,0.5);
      text-decoration: none;
      padding: 0 1.5vw;
      font-size: 1.15vw;
      overflow: hidden;
     &-mask{
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       overflow: hidden;
       background-color: white;
       transform: translate3d(-100%, 0, 0);
       transition: transform .75s ease;
       z-index: 2;
       span{
         display: block;
         padding: 0 1.5vw;
         font-size: 1.15vw;
         transform: translate3d(100%, 0, 0);
         transition: transform .75s ease;
         /*color: #fff;*/
         color: black;
         .filter_link:hover &{
           transform: translate3d(0, 0, 0);
         }
       }
       .filter_link:hover & {
         transform: translate3d(0, 0, 0);
       }
     }
    }
  }
</style>
