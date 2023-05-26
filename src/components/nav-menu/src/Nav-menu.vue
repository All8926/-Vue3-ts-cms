<template>
  <div class='nav-menu'>
    <div class="login">
      <img src="@/assets/img/logo.svg" alt="">
      <span>Vue3+TS</span>
    </div>
    <el-scrollbar>
      <el-menu background-color="#032449" text-color="#fff" :collapse="props.isCollapse">
        <template v-for="(item) in userMneus" :key="item.id">
          <template v-if="item.type === 1">
            <el-sub-menu :index="item.id.toString()">
              <template #title>
                <!-- <i :class="item.icon" ></i> -->
                <el-icon>
                  <component :is="item.icon.slice(8)"></component>
                </el-icon>

                <span>{{ item.name }}</span>
              </template>

              <template v-for="sonItem in item.children" :key="sonItem.id">
                <el-menu-item :index="sonItem.id.toString()">
                  <span>{{ sonItem.name }}</span>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.id.toString()">
              <span>{{ item.name }}</span>
            </el-menu-item>
          </template>


        </template>


      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, computed, } from 'vue'
import { useLoginStore } from '@/stores/login/login'

const loginStore = useLoginStore()
const userMneus = computed(() => {
  return loginStore.userMneus
})

console.log(userMneus);
const props = defineProps({
  isCollapse:Boolean
})

</script>

<style scoped lang="less">
.nav-menu {



  .login {
    height: 50px;
    line-height: 50px;
    text-align: center;

    img {
      width: 25px;
      height: 25px;
      vertical-align: middle;
    }

    span {
      color: #fff;
      margin-left: 5px;
      // line-height: 60px;
    }

  }

  .el-scrollbar {
    height: calc(100vh - 60px);

    .el-menu {
      // width: 200px;
      border: none;
    }
  }
}
</style>
