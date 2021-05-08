<template>
  <div id="cnnodeWrapper">
      <div>
          <span>cnnode论坛</span>
      </div>
      <div>
          <li v-for="(value, index2) in this.topicsArr" :key="index2">
              <span>
                  <img id="avatar" :src="value.author.avatar_url" alt="">
              </span>
              <span>
                  {{value.title}}
              </span>
              <span>
                  
              </span>
          </li>
      </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            topicsArr: []
        }
    },
    beforeCreate(){
        // console.log("this is before")
    },
    created(){
        // console.log("this is vue")
        let that = this;
        Axios.get('https://cnodejs.org/api/v1/topics').then(function(response){
            // console.log(response)
            if(response.data.success){
                that.topicsArr = response.data.data
            }
        })
    }
}
</script>

<style>
    #avatar{
        width: 20px;
        height: 20px;
    }
</style>