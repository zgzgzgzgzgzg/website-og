<template>
    <div class="content">
        <div class="title">
            <h1>Contact Us</h1>
        </div>
        <div class="content-inner-wrapper">
            <div class="content-info">
                <a href="">
                    <img src="https://www.zomorrodi-associates.com/wp-content/themes/zomorodi/assets/img/telephone.svg">
                    021-65106671
                </a>
            </div>
            <div class="content-info">
                <a href="mailto:bd@emitdata.com">
                    <img src="https://www.zomorrodi-associates.com/wp-content/themes/zomorodi/assets/img/mail.svg">
                    bd@emitdata.com
                </a>
            </div>
            <div class="content-info">
                <a href="">
                    <img src="https://www.zomorrodi-associates.com/wp-content/themes/zomorodi/assets/img/map.svg">
                    上海市杨浦区纪念路8号5号楼103B室
                </a>
            </div>
            <div class="content-times">
                <img src="https://www.zomorrodi-associates.com/wp-content/themes/zomorodi/assets/img/wall-clock.svg">
                Saturday to Wednesday 9:30 a.m to 6:30 p.m
            </div>
            <div class="content-times contactSocialIcons">
                <p>Follow us on</p>
                <a href="">
                    <img src="https://www.zomorrodi-associates.com/wp-content/uploads/2019/01/instagram-logo.svg">
                </a>
                <a href="">
                    <img src="https://www.zomorrodi-associates.com/wp-content/uploads/2019/01/telegram-logo.svg">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        data(){
            return{

            }
        },
        methods:{
            Splitting:function () {

            }
        }
    }
</script>

<style lang="scss">
    .content{
        display: flex;
        white-space: nowrap;
        position: relative;
        height: 100vh;
        display: flex;
        width: 50vw;
        padding: 20vh 0;
        .title{
            display: flex;
            position: relative;
            left: 83%;
            font-size: 40px;
            .char {
                --name: rise;
                --dur: 3s;
                --del: calc(var(--distance-percent) * 0.125s);
                --tf: cubic-bezier(0.25, 0.46, 0.45, 0.94);

                transform-origin: 50% 100%;

                &:after {
                    animation: ghost var(--dur) ease-in var(--del) infinite;
                    content: attr(data-char);
                    opacity: 0;
                    transform-origin: 100% 50%;
                    visibility: visible;
                }
            }

            @keyframes rise {
                40% {
                    transform:
                            translateY(-40%)
                            rotate(calc(var(--distance-sine) * 10deg)
                            );
                }
                50% { transform: translateY( 6%); }
                55% { transform: translateY(-4%); }
                60% { transform: translateY( 2%); }
                65% { transform: translateY(-1%); }
                70% { transform: translateY( 0%); }
            }

            @keyframes ghost {
                8% {
                    opacity: 0;
                    transform: translateY(0);
                }
                40% {
                    opacity: 0.25;
                    transform:
                            translateY(-30%)
                            rotate(calc(var(--distance-sine) * -10deg)
                            );
                }
                60%, 100% {
                    opacity: 0;
                    transform: translateY(-200%);
                }
            }
        }
    }
    .content-inner-wrapper{
        margin-top: 0;
        position: relative;
        height: 50vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding: 60px 70px;
        z-index: 1000;
        img{
            width: 15px;
            margin-right: 15px;
        }
    }
    .content-info{
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        line-height: 30px;
        a{
            display: flex;
            color: #000;
            text-decoration: none;
            font-size: 20px;
        }
    }
    .content-times{
        display: flex;
        &:last-of-type{
            margin-top: 0px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
        }
        &.contactSocialIcons{
            width: 100%;
        }
    }

</style>