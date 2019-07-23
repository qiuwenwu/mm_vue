<template>
	<!-- 邀请奖励页面 -->
	<mm_page class="page_user" id="user_bill_list">
		<mm_bodyer>
			<mm_warp>
				<mm_grid>
					<mm_col>
						<mm_block class="bt">
					<!-- 		<mm_head>
								<mm_title class="font_small">2019年5月</mm_title>
							</mm_head> -->
							<mm_body class="lr">
								<mm_list col="1">
									<mm_item class="big" v-for="(o,k) in list" :key="k">
										<mm_main>
											<mm_title v-if="o.source.indexOf('有效') != -1">自己邀请</mm_title>
											<mm_title v-else>代理邀请</mm_title>
											<mm_desc>
												{{ $toTime(o.time, 'yyyy年MM月dd日 hh:mm') }}
											</mm_desc>
											<mm_desc class="font_success">
												<text>+{{ $double($num(o.entryMoney)) }}</text><text class="unit">元</text>
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
	</mm_page>
</template>

<script>
	import mixin from '@/mixins/page'
	export default {
		mixins: [mixin],
		data() {
			return {
				oauth: true,
				url_get_list: "~/achievement/flow",
				query:{
					index: "0",
					size: 1000,
					type: 1
				}
			}
		},
		methods: {
			get_list_after(json, status) {
				if(json.data) {
					var ct = json.data.content;
					if(ct)
					{
						this.list.clear();
						var _this = this;
						ct.forEach(function(item){
							if(item.source.indexOf('推广') != -1){
								_this.list.push(item);
							}
						})
					}
				}
			}
		}
	}
</script>

<style>
	.font_success {
		position: absolute;
		right: 1rem;
		top: 50%;
		transform: translate(0, -50%);
		font-size: 0.875rem;
		font-weight: 600;
	}
</style>
