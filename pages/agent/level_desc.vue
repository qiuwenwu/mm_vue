<template>
	<!-- 等级说明页面 -->
	<mm_page class="page_agent" id="agent_level_desc">
		<!-- 页主体 -->
		<mm_bodyer>
			<!-- 外套 -->
			<mm_warp>
				<!-- 栅格 -->
				<mm_grid col="1" class="space-x">
					<mm_col>
						<mm_block>
							<mm_head class="font_small">
								<mm_title>等级{{ user.level + 1 }} 升级条件</mm_title>
							</mm_head>
							<mm_body class="lr">
								<mm_list col="1" class="mini">
									<mm_item v-if="oj.dbd_my > 0">
										<mm_main>
											<mm_title>自己礼包数量</mm_title>
											<mm_desc>
												<mm_icon src="/img/state_success.svg" v-if="user.hold >= oj.dbd_my"></mm_icon>
												<mm_icon src="/img/state_warning.svg" v-else></mm_icon>
												{{ user.hold }}/{{ oj.dbd_my }}
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item v-if="oj.people_1 > 0">
										<mm_main>
											<mm_title>一级代理人数</mm_title>
											<mm_desc>
												<mm_icon src="/img/state_success.svg" v-if="user.people >= oj.people_1"></mm_icon>
												<mm_icon src="/img/state_warning.svg" v-else></mm_icon>
												{{ user.people }}/{{ oj.people_1 }}
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item v-if="oj.dbd_1 > 0">
										<mm_main>
											<mm_title>一级礼包总数</mm_title>
											<mm_desc>
												<mm_icon src="/img/state_success.svg" v-if="user.hold1 >= oj.dbd_1"></mm_icon>
												<mm_icon src="/img/state_warning.svg" v-else></mm_icon>
												{{ user.hold1 }}/{{ oj.dbd_1 }}
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item v-if="oj.people_2 > 0">
										<mm_main>
											<mm_title>二级代理人数</mm_title>
											<mm_desc>
												<mm_icon src="/img/state_success.svg" v-if="user.people2 >= oj.people_2"></mm_icon>
												<mm_icon src="/img/state_warning.svg" v-else></mm_icon>
												{{ user.people2 }}/{{ oj.people_2 }}
											</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item v-if="oj.dbd_2 > 0">
										<mm_main>
											<mm_title>二级礼包总数</mm_title>
											<mm_desc>
												<mm_icon src="/img/state_success.svg" v-if="user.hold2 >= oj.dbd_2"></mm_icon>
												<mm_icon src="/img/state_warning.svg" v-else></mm_icon>
												{{ user.hold2 }}/{{ oj.dbd_2 }}
											</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
							<mm_foot class="bt">
								<mm_div class="center">
									<mm_title><text class="font_danger">已达成 {{ $double(user.percentage * 100) }}%</text></mm_title>
								</mm_div>
							</mm_foot>
						</mm_block>
					</mm_col>
					<mm_col class="pn-b">
						<mm_block>
							<mm_head class="font_small">
								<mm_title>当前权益</mm_title>
							</mm_head>
							<mm_body class="ll">
								<mm_div v-if="user.level == 0" class="center">因未购买培训礼包，无法享受任何权益</mm_div>
								<mm_list col="1" class="level_desc" v-else>
									<mm_item v-if="desc['level' + (user.level)] != '0'">
										<mm_main>
											<mm_title>自己推荐</mm_title>
											<mm_desc>用户首次购买培训礼包奖励{{ desc['level' + user.level] }}元</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item v-if="desc['tow_level' + (user.level)] != '0'">
										<mm_main>
											<mm_title>一级代理推荐</mm_title>
											<mm_desc>用户首次购买培训礼包奖励{{ desc['tow_level' + user.level] }}元</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-tb">
						<mm_block>
							<mm_head class="font_small">
								<mm_title>下级权益</mm_title>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="level_desc">
									<mm_item v-if="desc['level' + (user.level + 1)] != '0'">
										<mm_main>
											<mm_title>自己推荐</mm_title>
											<mm_desc>用户首次购买培训礼包奖励{{ desc['level' + (user.level + 1)] }}元</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item v-if="desc['tow_level' + (user.level + 1)] != '0'">
										<mm_main>
											<mm_title>一级代理推荐</mm_title>
											<mm_desc>用户首次购买培训礼包奖励{{ desc['tow_level' + (user.level + 1)] }}元</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-tb" v-if="get_info(0, '') || get_info(0, 'tow_')">
						<mm_block>
							<mm_head class="font_small">
								<mm_title>当前团队津贴</mm_title>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="level_desc">
									<mm_item v-if="get_info(0, '')">
										<mm_main>
											<mm_title>自己推荐</mm_title>
											<mm_desc>获得用户所有的培训礼包数*{{ get_info(0, '') }}%所得培训礼包</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item v-if="get_info(0, 'tow_')">
										<mm_main>
											<mm_title>一级代理推荐</mm_title>
											<mm_desc>获得用户所有的培训礼包数*{{ get_info(0, 'tow_') }}%所得培训礼包</mm_desc>
										</mm_main>
									</mm_item>
								</mm_list>
							</mm_body>
						</mm_block>
					</mm_col>
					<mm_col class="pn-tb" v-if="get_info(1, '') || get_info(1, 'tow_')">
						<mm_block>
							<mm_head class="font_small">
								<mm_title>下级团队津贴</mm_title>
							</mm_head>
							<mm_body class="ll">
								<mm_list col="1" class="level_desc">
									
									<mm_item v-if="get_info(1, '')">
										<mm_main>
											<mm_title>自己推荐</mm_title>
											<mm_desc>获得用户所有的培训礼包数*{{ get_info(1, "") }}%所得培训礼包</mm_desc>
										</mm_main>
									</mm_item>
									<mm_item v-if="get_info(1, 'tow_')">
										<mm_main>
											<mm_title>一级代理推荐</mm_title>
											<mm_desc>获得用户所有的培训礼包数*{{ get_info(1, 'tow_') }}%所得培训礼包</mm_desc>
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
				url_get_obj: "~/user/level_term",
				user: this.$store.state.user,
				obj: {
					ejtg: [], // 二级推广
					ercy: [], // 二级持有
					yicy: [], // 一级持有
					yjtg: [], // 一级推广
					zjcy: [] // 自己持有dbd
				},
				desc: {
					level0: "0",
					level0_team: "0",
					level1: "0",
					level1_team: "0",
					level2: "0",
					level2_team: "0",
					level3: "0",
					level3_team: "0",
					level4: "0",
					level4_team: "0",
					level5: "0",
					level5_team: "0",
					level6: "0",
					level6_team: "0",
					tow_level0: "0",
					tow_level0_team: "0",
					tow_level1: "0",
					tow_level1_team: "0",
					tow_level2: "0",
					tow_level2_team: "0",
					tow_level3: "0",
					tow_level3_team: "0",
					tow_level4: "0",
					tow_level4_team: "0",
					tow_level5: "0",
					tow_level5_team: "0",
					tow_level6: "0",
					tow_level6_team: "0"
				}
			}
		},
		computed: {
			oj() {
				var i = this.user.level + 1;
				var o = this.obj;
				if (i > o.ercy.length) {
					i = o.ercy.length;
				}
				if (o.ercy.length > 0) {
					return {
						dbd_my: o.zjcy[i],
						dbd_1: o.yicy[i],
						dbd_2: o.ercy[i],
						people_1: o.yjtg[i],
						people_2: o.ejtg[i]
					}
				} else {
					return {
						dbd_my: 0,
						dbd_1: 0,
						dbd_2: 0,
						people_1: 0,
						people_2: 0
					}
				}
			}
		},
		methods: {
			get_info(add, two) {
				var n = this.$num(this.user.level) + add;
				var key = two + 'level' + n + '_team';
				return this.$num(this.desc[key]) * 100;
			},
			get_desc() {
				var _this = this;
				this.$get('~/user/level_rebate', function(json, status) {
					if (json) {
						if (json.data) {
							_this.$obj.push(_this.desc, json.data);
						}
					}
				});
			},
			get_obj_after(json, status) {
				if (json) {
					if (json.data) {
						this.$obj.push(this.obj, json.data);
					}
				}
				this.get_desc();
			}
		}
	}
</script>

<style>
	#agent_level_desc .mm_desc .mm_icon {
		float: right;
		margin-left: 0.5rem;
		width: 1.25rem;
		height: 1.25rem;
	}
</style>
