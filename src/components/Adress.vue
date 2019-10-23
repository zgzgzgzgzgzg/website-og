<template>
    <div class="content">
        <div class="amap-wrapper" data-scroll-content>
            <el-amap class="amapDemo" :vid="amapDemo"  :zoom="zoom" :center="center">
                <el-amap-marker v-for="(marker, index) in markers" :position="marker.position" :events="marker.events"
                                :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
            </el-amap>
            <div class="description">
                    <span>企业：经数(上海)信息科技有限公司</span>&nbsp
                    <span>邮箱：bd@emitdata.com</span>&nbsp
                    <span>电话：021-65106671</span>&nbsp
                    <span>地址：上海市杨浦区纪念路8号5号楼103B室</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Adress",
        data(){
            return{
                zoom: 20,
                center: [121.492668, 31.298720],
                markers: [
                    {
                        position: [121.492300, 31.298720],
                        events: {
                            click: () => {
                                alert('上海市杨浦区纪念路8号5号楼103B室');
                            },
                            dragend: (e) => {
                                console.log('---event---: dragend')
                                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
                            }
                        },
                        visible: true,
                        draggable: false,
                        template: '<span>1</span>',
                    }
                ],
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss">
    .content{
        display: flex;
        white-space: nowrap;
        position: relative;
        height: 100vh;
    }
    .amap-wrapper{
        width: 50vw;
        height: 70%;
        padding: 20vh 20vw;
    }
    .description{
        color: white;
    }
</style>