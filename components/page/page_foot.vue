<template>
	<footer class="page_foot">
		<div class="warp">
			<el-row>
				<el-col :span="4">
					<nav_foot :label="$lang('company')" :list="nav" />
				</el-col>
				<el-col :span="8">
					<address>
						<h4>{{ $lang('foot_contact_us') }}</h4>
						<p>{{ $lang('foot_address') }}</p>
						<p><strong>0755-86728963</strong></p>
					</address>
				</el-col>
				<el-col :span="8">
					<div class="call">
						<p>{{ $lang('foot_slogan') }}</p>
						<div class="search_foot"><button class="btn_rrs"><i class="fa fa-long-arrow-right"></i></button>
							<el-input :placeholder="$lang('rrs_new')"></el-input>
						</div>
					</div>
				</el-col>
				<el-col :span="4">
					<figure class="qrcode">
						<img src="/img/qrcode.jpg" />
						<figcaption>{{ $lang('public_wechat') }}</figcaption>
					</figure>
				</el-col>
				<el-col :span="24">
					<p class="copyright">{{ $lang('foot_copyright') }}</p>
				</el-col>
			</el-row>
		</div>
	</footer>
</template>

<script>
	import nav_foot from '~/components/nav/nav_foot.vue';

	export default {
		components: {
			nav_foot
		},
		data() { return {
			nav: this.$store.state.web.nav_foot,
			keyword: ""
		}
		},
		computed: {}
	}
</script>

<style>
	footer {
		width: 100%;
		height: 10rem;
		background: #2E2E2E;
		/*#31384a;*/
		padding: 5rem 0;
		color: #ccc;
	}
	footer h4 { color: inherit; margin-bottom: .5rem; }
	
	address strong {
		font-size: 1.5rem;
		font-weight: 600;
	}
	
	.call input {
		background: none;
		border: none;
		border-bottom: 2px solid #4D4D4D;
		border-radius: 0;
		padding: 0;
	}

	.call input::-webkit-input-placeholder {
		color: #999;
	}

	.call input::-moz-input-placeholder {
		color: #999;
	}

	.call input::-ms-input-placeholder {
		color: #999;
	}

	.call i {
		color: #BF1D25;
	}

	.search_foot {
		position: relative;
	}

	.search_foot .btn_rrs {
		border: none;
		background: none;
		position: absolute;
		right: 0;
		top: 25%;
		transform: translateY(50%);
	}

	.qrcode {
		width: 6.25rem;
		text-align: center;
		overflow: hidden;
		margin: 0 auto;
		font-size: 1rem;
		color: #ccc;
	}

	.qrcode img {
		width: 100%;
		margin-bottom: .25rem;
	}

	.copyright {
		font-size: 0.75rem;
		text-align: right;
		margin-right: 3rem;
		color: #666;
	}
</style>
