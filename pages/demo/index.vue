<template>
  <mm_page class="page_demo" id="demo_index">
    <mm_header>
      <mm_grid col="3" class="nav_top">
        <mm_col>
          <mm_div>
            <mm_btn type="link" class="btn_back">
              <mm_icon src="/img/btn_back_b.png"></mm_icon>
            </mm_btn>
          </mm_div>
        </mm_col>
        <mm_col class="center">
          标题
        </mm_col>
        <mm_col class="right">
           <mm_icon src="/img/btn_back_b.png" class="mr"></mm_icon>
        </mm_col>
      </mm_grid>
    </mm_header>
    <mm_bodyer>
      <mm_warp>
        <mm_div>
          轮播12123
        </mm_div>
      </mm_warp>
      <mm_warp>
        <mm_grid col="2">
          <mm_col>
            左边
          </mm_col>
          <mm_col>
            右边
          </mm_col>
        </mm_grid>
      </mm_warp>
    </mm_bodyer>
    <mm_footer>
      <mm_warp>
        <tool></tool>
      </mm_warp>
    </mm_footer>
  </mm_page>
</template>

<script>
  import tool from '@/components/tool'
  import mixin from '@/mixins/page'

  export default {
    mixins: [mixin],
    components: {
      tool: tool
    },
    data() {
      return {
        oauth: false,
      }
    }
  }
</script>

<style>

</style>
