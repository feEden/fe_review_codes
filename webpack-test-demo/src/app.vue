<template>
    <div>
        <img :src="img" style="width: 100px; height: 100px;" />
        <div class="test">test HRM</div>
    </div>
</template>
<script>
import Img from './assets/2.gif';
import { A } from './utils';

export default {
    data() {
        return {
            img: Img,
        };
    },
    created() {
        A()
    },
}
</script>
<style>
.test {
    color: yellowgreen;
}
</style>