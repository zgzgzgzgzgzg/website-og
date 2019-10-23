<template>
    <div class="slider js-slider">
        <div class="slider__inner js-slider__inner"></div>
        <div class="slidee js-slidee">
            <div class="slidee__content">
                <figure class="slidee__img js-slidee__img">
                    <img src="../assets/logo.png">
                </figure>
                <figure class="slidee__img js-slidee__img">
                    <img src="../assets/logo.png">
                </figure>
            </div>
            <div class="slider__text js-slider__text">
                <div class="slider__text-line js-slider__text-line">
                    <div>Black is</div>
                </div>
                <div class="slider__text-line js-slider__text-line">
                    <div>timeless. Black is</div>
                </div>
                <div class="slider__text-line js-slider__text-line">
                    <div>the colour of</div>
                </div>
                <div class="slider__text-line js-slider__text-line">
                    <div>Eternity.</div>
                </div>
            </div>
        </div>
        <div class="slidee js-slidee">
            <div class="slidee__content">
                <figure class="slidee__img js-slidee__img">
                    <img src="../assets/logo.png">
                </figure>
                <figure class="slidee__img js-slidee__img">
                    <img src="../assets/logo.png">
                </figure>
            </div>
        </div>
        <div class="slidee js-slidee">
            <div class="slidee__content">
                <figure class="slidee__img js-slidee__img">
                    <img src="../assets/logo.png">
                </figure>
                <figure class="slidee__img js-slidee__img">
                    <img src="../assets/logo.png">
                </figure>
            </div>
        </div>
        <nav class="slider__nav js-slider__nav">
            <div class="slider-bullet js-slider-bullet">
                <span class="slider-bullet__text js-slider-bullet__text">01</span>
                <span class="slider-bullet__line js-slider-bullet__line"></span>
            </div>
            <div class="slider-bullet js-slider-bullet">
                <span class="slider-bullet__text js-slider-bullet__text">02</span>
                <span class="slider-bullet__line js-slider-bullet__line"></span>
            </div>
            <div class="slider-bullet js-slider-bullet">
                <span class="slider-bullet__text js-slider-bullet__text">03</span>
                <span class="slider-bullet__line js-slider-bullet__line"></span>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "About",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style lang="scss">
    .slider{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;

        &__text{
            position: absolute;
            bottom: calc(2rem + 3vw);
            left: calc(2rem + 3vw);
            z-index: 10;
            font-size: calc(1rem + 4vw);
            text-transform: uppercase;
            transform-origin: top;
            line-height: 1.075;
            color: #fff;
            font-weight: 500;
            &-line{
                overflow: hidden;
            }
        }
        &__inner{
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
        &__nav{
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            z-index: 10;
        }
        &-bullet{
            display: flex;
            align-items: center;
            padding: 1rem 0;

            &__text{
                color: #fff;
                font-size: 0.65rem;
                margin-right: 1rem;
            }

            &__line{
                background-color: #fff;
                height: 1px;
                width: 1rem;
            }
        }
        canvas{
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }
    }
    .slidee{
        padding: 0;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;

        &__content{
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
        }

        &__img{
            position: relative;
            width: 25vw;
            height: 70vh;
            padding: 0;
            margin: 0;
            min-width: 12.5rem;
            transform-origin: top;

            &:first-child{
                top: -1.5rem;
            }

            &:last-child{
                bottom: -1.5rem;
            }

            img{
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

</style>