<template>
	<!-- 提现记录页面 -->
	<div class="page_calculation" id="calculation_cny_record">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<!-- 格子 -->
					<mm_col>
						<mm_block>
							<mm_head class="font_small">
								<mm_title><text>总提现：{{ counts }}</text><text class="unit">元</text></mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item v-for="(o,k) in list" :key="k">
										<mm_main>
											<mm_title>{{ o.time }}</mm_title>
											<mm_desc class="font_warning">
												<text>-{{ $double($num(o.entryMoney)) }}</text><text class="unit">元</text>
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
				</mm_grid>
			</mm_warp>
		</mm_bodyer>
	</div><!-- /view -->
</template>

<script>
	import mixin from '@/mixins/page'

	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				oauth: true,
				url_get_list: "~/achievement/flow",
				query: {
					index: "0",
					size: 1000,
					type: 2,
					state: "0"
				}
			}
		},
		methods: {
			get_list_after(json, status) {
				if (json.data) {
					var ct = json.data.content;
					if (ct) {
						this.list.clear();
						var _this = this;
						ct.forEach(function(item) {
							if (item.source.indexOf('提现') != -1) {
								_this.list.push(item);
							}
						})
					}
				}
			}
		},
		computed: {
			counts(){
				var count = 0;
				var lt = this.list;
				for(var i = 0; i < lt.length; i++){
					count += Number(lt[i].entryMoney)
				}
				return this.$double(count);
			}
		}
	}
</script>

<style>
	.font_warning {
		font-weight: 600;
	}
</style>
