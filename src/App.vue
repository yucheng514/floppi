<script lang="ts">


export default {
    data() {
        return {
            list: [],
            srcList: [
                'http://172.28.80.18:3011/8.jpg',
                'http://172.28.80.18:3011/5.png',
                'http://172.28.80.18:3011/7.jpg',
                'http://172.28.80.18:3011/1.jpg',
                'http://172.28.80.18:3011/4.jpg',
                'http://172.28.80.18:3011/10.png',
                'http://172.28.80.18:3011/6.jpg',
                'http://172.28.80.18:3011/2.jpg',
                'http://172.28.80.18:3011/9.png',
                'http://172.28.80.18:3011/3.jpg',
            ],
            showViewer: false,
            currentSrc: []
        }
    },
    mounted() {
        this.srcList.forEach((src, index) => {
            this.list.push({
                src,
                id: index,
                clicked: false
            })
        });
    },
    methods: {
        overturn(index) {
            this.list[index].clicked = true
        },
        closeMask() {
            // this.$emit('close')
            this.showViewer = false
            console.log(111);

        },
        openViewer(index) {
            if (this.list[index].clicked) {
                this.showViewer = true
                this.currentSrc = [this.list[index].src]

            }
            // console.log(index);

        },
        open(index) {
            if (!this.list[index].clicked) {
                this.overturn(index)
            } else {
                this.openViewer(index)
            }


        }
    },
    watch: {
        // list: {
        //     handler(newVal, oldVal) {
        //         console.log(`new: ${JSON.stringify(newVal)}, old: ${JSON.stringify(oldVal)}`);
        //     },
        //     deep: true,
        //     immediate: true
        // }
    }
}


</script>

<template>
    <el-image-viewer :z-index="999" :initial-index="0" :url-list="currentSrc" :close-on-press-escape="true"
        :hide-on-click-modal="true" v-if="showViewer" @close="closeMask" zoom-rate="1.2" max-scale="7" min-scale="0.2">
    </el-image-viewer>
    <div class="container1">
        <div class="flip_wrap" v-for="(item, index) in list" @click="open(index)">
            <!--实现容器翻转-->
            <div class="flip" :class="item.clicked ? 'active' : ''">
                <!--正面-->
                <div class="side front">
                    <span class="text">{{ index + 1 }}</span>

                </div>
                <!--反面-->
                <div class="side back">
                    <!-- <p>{{ item.back }}</p> -->
                    <el-image style="width: 300px; height: 220px" fit="cover" teleported :src="item.src" />
                </div>
            </div>
        </div>        
    </div>
    <!--大容器-->

</template>

<style>
body{
    background-color: #feffef;
}
.container1 {
    height: 99vh;
    width: 99vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.flip_wrap {
    flex: 0 0 auto;
    cursor: pointer;
    display: inline-block;
    width: 300px;
    height: 220px;
    
    /* width: 400px;
    height: 290px; */
    margin: 20px;
    perspective: 800px;
    box-sizing: border-box;
    user-select: none;
}

.flip {
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: all 1s ease;
    transform-style: preserve-3d;
}

.text{
    font-size: 40px;
    line-height: 220px;
    color: #feffef;
}
.side {
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    /*   color: #fff; */
    z-index: 99999;
}

.front {
    backface-visibility: hidden;
    border: 1px solid #ccc;
    font-size: 18px;
    background: #01847c;
}

.back {
    backface-visibility: hidden;
    transform: rotateY(180deg);
    background: white;
    box-sizing: border-box;
}

.flip_wrap .flip.active {
    transform: rotateY(180deg);

}
</style>
