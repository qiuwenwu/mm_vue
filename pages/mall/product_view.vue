<template>
	<div id="mall_product_view" class="main page_mall">
		<div class="warp">
			<el-row>
				<el-col :span="12" class="product_show">
					<list_show :list="product.imgs" />
				</el-col>
				<el-col :span="12" class="product_buy">
					<h2>{{ product.title }}</h2>
					<p v-html="product.sale"></p>
					<ul class="product_param">
						<li><img src="/img/hashrate.svg" /><span>{{ $lang('hashrate') }}：</span><span>{{ param.hashrate }}TH/s</span></li>
						<li><img src="/img/weight.svg" /><span>{{ $lang('weight') }}：</span><span>{{ param.weight }}kg</span></li>
						<li><img src="/img/delivery_date.svg" /><span>{{ $lang('delivery_date') }}：</span><span>{{ param.delivery_date_min }} - {{ param.delivery_date_max }}</span></li>
					</ul>
					<div class="product_panel">
						<el-input-number class="fr" v-model="buy_num" :min="1" :max="9999" label="购买数量"></el-input-number>
						<div class="price"><span class="unit">{{ $lang('unit') }}</span><span>{{ product.price }}</span></div>
					</div>
					<div class="product_count">{{ $lang('total') }}: {{ product.price }} * {{ buy_num }} = {{ count }}</div>
					<div class="product_btn">
						<el-button type="info">{{ $lang('add_shopping_cart') }}</el-button>
						<el-button type="primary">{{ $lang('buy_now') }}</el-button>
					</div>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="24">
				  <el-tabs class="product_body" v-model="tabName">
					<el-tab-pane :label="$lang('product_description')" name="info"><div v-html="product.content"></div></el-tab-pane>
					<el-tab-pane :label="$lang('product_reminder')" name="tip"><div v-html="product.tip"></div></el-tab-pane>
					<el-tab-pane :label="$lang('product_buy_way')" name="pay"><div v-html="pay_way"></div></el-tab-pane>
					<el-tab-pane :label="$lang('product_contact')" name="contact"><div v-html="contact"></div></el-tab-pane>
					<el-tab-pane :label="$lang('product_service')" name="service"><div v-html="service"></div></el-tab-pane>
					<el-tab-pane :label="$lang('product_help')" name="help"><div v-html="help"></div></el-tab-pane>
				  </el-tabs>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import list_show from '~/components/list/list_show.vue';
export default {
  components: {
	  list_show
  },
	data() {
	  return {
		  tabName: 'info',
		  buy_num: 1,
		  product:{
			pid: 1,
			title: "水冷矿机支架",
			desc: "适用于S9 Hydro",
			price: 1020.00,
			sale: "促销语句，打完八折，打九折",
			type: "矿机",
			imgs: ["/upload/pw1.png", "/upload/pw2.png", "/upload/pw3.png"],
			param: "{ \"hashrate\": 23, \"weight\": 10, \"delivery_date_min\": \"2019.02.15\", \"delivery_date_max\": \"2019.02.28\"}",
			"content": `
		<div data-v-63a32c95="" data-v-1b41da19="" class="info"><p style="text-align:left"><img alt="" src="https://file11.bitmain.com/shop-product/product_mode/e882c728-a296-4f7f-ad11-79f8c6bae666" style="width: 1200px; height: 1148px;"></p>
<p style="text-align:left"><img alt="" src="https://file11.bitmain.com/shop-product/product_mode/78c3d81f-ea0a-4702-a851-cc4b27527531" style="width: 1200px; height: 1554px;"></p>
<p style="text-align:left"><img alt="" src="https://file11.bitmain.com/shop-product/product_mode/c893ba08-747e-4566-b26b-254ba19b6bee" style="width: 1200px; height: 579px;"></p>
<p style="text-align:left"><span style="font-size:medium"><strong><span style="color:rgb(255, 0, 0)">注意事项：</span></strong></span></p>
<p style="text-align:left"><span style="font-size:medium">1.机箱变形或者散热片脱落，请不要通电，联系售后处理。</span></p>
<p style="text-align:left"><span style="font-size:medium">2.建议使用蚂蚁矿池( www.antpool.com&nbsp;)和BTC.com矿池(https://pool.btc.com）</span></p></div>
			`,
			tip:`
<div data-v-63a32c95="" data-v-1b41da19="" class="info"><p style="text-align:left"><span style="font-size:medium">1.本商品包含电源，需全额付款。</span></p>

<p style="text-align:left"><span style="text-align:left;"><span style="font-size:medium;">2.</span></span><span style="text-align:left;"><span style="font-size:medium;">发货时间：2019.02.15-2019.02.28</span></span><span style="text-align:left;"><span style="font-size:medium;">。</span></span></p>

<p style="text-align:left"><span style="font-size:medium">3.本产品支持顺丰（默认空运）、顺丰特惠、德邦物流、德邦快递、顺达航空、圆通快递配送，其中顺达航空运费仅限到付，具体费用请咨询物流服务供应商。 </span></p>

<p style="text-align:left"><span style="text-align:left;"><span style="font-size:medium;">4.请点击查看<a href="https://blog.bitmain.com/cn/%E8%9A%82%E8%9A%81%E7%9F%BF%E6%9C%BA%E5%90%88%E5%90%8C%E6%A8%A1%E6%9D%BF/%E8%BF%90%E8%BE%93%E4%BF%9D%E9%99%A9%E4%B8%BB%E8%A6%81%E6%9D%A1%E6%AC%BE.html">运输保险的主要条款</a>，一旦发生保险事故，经您请求，<wbr>我们将代为向保险公司索赔，如因您未能提交真实、准确、<wbr>完整的资料导致保险公司拒绝赔付全部或部分款项，<wbr>您自行承担责任。</span></span></p>

<p style="text-align:left"><span style="color:#FF0000"><span style="font-size:medium">注意：因各个国家和地区电源插头不一样，电源不包含220V端电源线。</span></span></p></div>`
			},
			pay_way:`
<div data-v-63a32c95="" data-v-1b41da19="" class="info"><p><span style="font-size:medium"><span style="font-size:18px;"><strong>付款方式</strong></span><br>
1.银行转账<br>
线下支付唯一指定收款账户如下：<br>
账户名称： 福建湛华智能科技有限公司<br>
银行账户： 20000037327800022315804<br>
银行名称： 北京银行上地支行&nbsp;<br>
请在提交订单且选择银行转账支付方式后24小时内完成支付，付款后，请登录官网用户中心，选择“我的订单”，点击订单后的“上传付款证明”，填写付款人姓名和付款金额等信息。<br>
2. 在线支付<br>
请在提交订单且选择相应的在线支付方式后30分钟内，通过微信支付、支付宝或网银支付完成在线支付。在线支付仅能开个人普通发票，如需要公司发票，请选择银行转账方式付款。<br>
&nbsp;<br>
【合同与发票】按照目前我国税务法规，订单的付款方（个人或公司）必须与合同购买方以及发票抬头一致；如果付款方、合同购买方、发票抬头不一致，或者一个订单内含有多个付款方（个人或公司）的情况，则无法提供该订单的合同与发票。&nbsp;<br>
请点击<a href="https://blog.bitmain.com/cn/category/%E8%9A%82%E8%9A%81%E7%9F%BF%E6%9C%BA%E5%90%88%E5%90%8C%E6%A8%A1%E6%9D%BF">合同模板</a>，查阅相应产品的合同模板。<br>
&nbsp;<br>
<span style="font-size:18px;"><strong>风险提示：</strong></span><br>
特定虚拟商品价格决定矿机价值，付款后即锁定本批订单数量和价格，基于特定虚拟商品价格上涨，本订单不会加价，反之特定虚拟商品价格下跌，本订单也不会退款。</span></p></div>
			`,
			contact:`
			<p><span style="font-size:medium"><span style="font-size:18px;"><strong>付款方式</strong></span><br>
1.银行转账<br>
线下支付唯一指定收款账户如下：<br>
账户名称： 福建湛华智能科技有限公司<br>
银行账户： 20000037327800022315804<br>
银行名称： 北京银行上地支行&nbsp;<br>
请在提交订单且选择银行转账支付方式后24小时内完成支付，付款后，请登录官网用户中心，选择“我的订单”，点击订单后的“上传付款证明”，填写付款人姓名和付款金额等信息。<br>
2. 在线支付<br>
请在提交订单且选择相应的在线支付方式后30分钟内，通过微信支付、支付宝或网银支付完成在线支付。在线支付仅能开个人普通发票，如需要公司发票，请选择银行转账方式付款。<br>
&nbsp;<br>
【合同与发票】按照目前我国税务法规，订单的付款方（个人或公司）必须与合同购买方以及发票抬头一致；如果付款方、合同购买方、发票抬头不一致，或者一个订单内含有多个付款方（个人或公司）的情况，则无法提供该订单的合同与发票。&nbsp;<br>
请点击<a href="https://blog.bitmain.com/cn/category/%E8%9A%82%E8%9A%81%E7%9F%BF%E6%9C%BA%E5%90%88%E5%90%8C%E6%A8%A1%E6%9D%BF">合同模板</a>，查阅相应产品的合同模板。<br>
&nbsp;<br>
<span style="font-size:18px;"><strong>风险提示：</strong></span><br>
特定虚拟商品价格决定矿机价值，付款后即锁定本批订单数量和价格，基于特定虚拟商品价格上涨，本订单不会加价，反之特定虚拟商品价格下跌，本订单也不会退款。</span></p>
			`,
			service:`
			<div data-v-63a32c95="" data-v-1b41da19="" class="info"><p style="text-align:left"><strong><span style="font-size:16px">扫码关注“蚂蚁售前服务”公众号，获取最新矿机销售信息：</span></strong></p>

<p style="text-align:left"><strong><span style="font-size:16px"><img alt="" src=" https://file11.bitmain.com/shop-product/product_mode/2fbfdf35-0ee7-40bd-98fd-bd5913964566" style="height:130px; width:130px"></span></strong></p>

<p style="text-align:left"><span style="font-size:medium"><strong>QQ客服1：</strong>2852369779（早9：00-晚9：00）</span></p>

<p style="text-align:left"><span style="font-size:medium"><strong>QQ客服2：</strong>2852369780（早9：00-晚9：00）</span></p>

<p style="text-align:left"><span style="font-size:medium"><strong>QQ客服3：</strong>2852368903（早9：00-晚9：00） </span></p>

<p style="text-align:left"><span style="font-size:medium">QQ群：646128116</span></p>

<p style="text-align:left"><span style="font-size:medium">电话：400-890-8855（早9：00-晚9：00）</span></p></div>
			`,
			help: `<p>下载App</p>`
		}
	},
	computed:{
		param(){
			return JSON.parse(this.product.param);
		},
		count(){
			return this.product.price * this.buy_num;
		}
	}
}
</script>

<style>
	#mall_product_view .el-row { background: #fff; padding: 2rem; }
	.product_body .el-tabs__item { font-size: 1.25rem; margin-bottom: 1rem; padding: 0 2rem; }
	.product_img { height: 25rem; position: relative; overflow: hidden; }
	.product_img img { position: absolute; left:50%; top:50%; transform: translate(-50%,-50%); }
	.product_panel { margin-top: 1.5rem; font-size: 2rem; }
	.product_btn { padding-top: 3rem; text-align: center; }
	.product_btn button { width: 40%; padding: 1rem 0; }
	.product_btn .el-button+.el-button { margin-left: 1rem; }
	.product_param { overflow: hidden; padding-left: 0; margin-top: 1.5rem; }
	.product_param li { float: left; margin-right: 2.5rem; position: relative; padding: 1rem 0; padding-left: 3rem; }
	.product_param img { position: absolute; left:0; top: 50%; transform: translateY(-50%); }
	.product_buy h2 { margin-top: 2rem; margin-bottom: 1rem; }
	.product_buy p { margin: 1rem 0; color: #333; }
	.product_count { text-align: right; color: #999; padding: 1rem 0; }
</style>
