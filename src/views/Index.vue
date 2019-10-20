<template>
    <div>
        <div class="scroll" data-scroll>
            <div class="scroll-content" data-scroll-content>
                <article class="slide slide-1 js-slide">
                    <div class="slide_inner">
                        <div class="slide_img js-transition-img">
                            <figure class="js-transition-img_inner">
                                <img src="../assets/logo.png">
                            </figure>
                        </div>
                    </div>
                </article>

                <article class="slide slide-2 js-slide">
                    <div class="slide_inner">
                        <div class="slide_img js-transition-img">
                            <figure class="js-transition-img_inner">
                                <img src="../assets/logo.png">
                            </figure>
                        </div>
                    </div>
                </article>

                <article class="slide slide-3 js-slide">
                    <div class="slide_inner">
                        <div class="slide_img js-transition-img">
                            <figure class="js-transition-img_inner">
                                <img src="../assets/logo.png">
                            </figure>
                        </div>
                    </div>
                </article>
            </div>
            <div class="scroll-content scroll-content-last" data-scroll-content>
                <article class="slide slide-1 js-slide">
                    <div class="slide_inner">
                        <div class="slide_sub-title">
                            <span>project</span>
                        </div>
                        <h1 class="slide_title">
                            <div class="js-transiton-title">
                                Oak Refuge
                            </div>
                        </h1>
                        <div class="slide_img slide_img-proxy"></div>
                        <div class="slide_project">CorpusStudio</div>
                    </div>
                </article>

                <article class="slide slide-2 js-slide">
                    <div class="slide_inner">
                        <div class="slide_sub-title">
                            <span>project</span>
                        </div>
                        <h1 class="slide_title">
                            <div class="js-transiton-title">
                                Teton Residence
                            </div>
                        </h1>
                        <div class="slide_img slide_img-proxy"></div>
                        <div class="slide_project">Ro Rocket Design</div>
                    </div>
                </article>

                <article class="slide slide-3 js-slide">
                    <div class="slide_inner">
                        <div class="slide_sub-title">
                            <span>project</span>
                        </div>
                        <h1 class="slide_title">
                            <div class="js-transiton-title">
                                Oak Refuge
                            </div>
                        </h1>
                        <div class="slide_img slide_img-proxy"></div>
                        <div class="slide_project">CorpusStudio</div>
                    </div>
                </article>
            </div>
            <div class="scrollbar" data-scrollbar>
                <div class="scrollbar_handle js-scrollbar_handle"></div>
            </div>
        </div>
        <div class="mask js-mask">
            <div class="mask_slice js-mask_slice"></div>
            <div class="mask_slice js-mask_slice"></div>
            <div class="mask_slice js-mask_slice"></div>
            <div class="mask-inner">
                <figure class="logo logo-mask">
                    emit
                </figure>
                <div class="mask-line js-mask-line">
                    <div class="mask-line_inner js-mask-line">
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Index",
        data(){
            return{
                config:{
                    height:'',
                    width:'',
                },

            }
        },
        created(){
            this.config.height=window.innerHeight;
            this.config.width=window.innerWidth;
        },
        mounted(){
            window.addEventListener('scroll',this.handleScroll);
        },
        methods:{
            lerp:function (a, b, n) {
                return (1 - n) * a + n * b
            },
            norm:function (value, min, max) {
                return (value - min) / (max - min)
            },
            addEvents:function () {
                window.addEventListener('scroll', this.scroll, { passive: true });
            },
            //滚轮事件
            handleSrcoll:function () {
                alert(1);
            }
        }
    }
</script>

<style lang="scss">
    .scroll-content{
        display: flex;
        white-space: nowrap;
        position: relative;
        height: 100vh;
        &-last{
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    .slide{
        background-color: #111;
        display: flex;
        width: 50vw;
        height: 100%;
        padding: 20vh 0;
        &-1{
            align-items: flex-start;
        }
        &-2{
            align-items: flex-end;
        }
        &-3{
            align-items: center;
        }
        &:last-child{
            width: 65vw;
            padding-right: 15vw;
        }
        &_inner{
            position: relative;
            padding-left: 15vw;
            width: 100%;
        }
        &_sub-title{
            position: absolute;
            top: 15%;
            left: 5vw;
            color: rgba(#fff, 0.5);
            font-size: 1vw;
        }
        &_title{
            position: absolute;
            top: 7.5%;
            left: 7.5vw;
            color: #fff;
            font-size: 4vw;
            z-index: 2;
            overflow: hidden;
        }
        &_project{
            color: #fff;
            position: absolute;
            top: 100%;
            right: 5%;
            font-size: 1.15vw;
            padding-top: 1.5vw;
        }
        &_img{
            position: relative;
            overflow: hidden;
            padding-top: 65%;
            width: 100%;
            figure{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
        }
    }
    img{
        display: block;
        width: 100%;
        height: auto;
    }
    .scrollbar{
        position: absolute;
        bottom: 7.5%;
        left: 20%;
        right: 20%;
        height: 1px;
        background-color: rgba(#fff, 0.25);
        &_handle{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: scaleX(0);
            transform-origin: left;
            background-color: #fff;
        }
    }
    .mask{
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        visibility: hidden;
        opacity: 0;
        &_slice{
            flex: 1;
            background-color: #000;
        }
        &_inner{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
        }
        &-line{
            position: relative;
            transform-origin: left;
            width: 20rem;
            height: 2px;
            overflow: hidden;
            background-color: rgba(#fff, 0.25);
            visibility: hidden;
            opacity: 0;
            &_inner{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #fff;
                transform-origin: left;
            }
        }

    }
</style>