<template>
	<div class="calculation_desc">
		<div v-if="lang.now == 'chinese'">
			<h5>注意事项：</h5>
			<dl>
				<dt>法律声明</dt>
				<dd>矿机共享共享服务在以下国家或地区被禁止:克里米亚、古巴、伊朗、朝鲜、叙利亚、香港和中国大陆。请确认矿机共享服务在您的国家或地区是合法的。否则，您将承担一切法律后果。</dd>
				<dt>无法退款</dt>
				<dd>按照协议规定，一旦您购买完成，将不支持退款。</dd>
				<dt>定价规则</dt>
				<dd>矿机共享套餐的定价会根据数字货币价格等多因素调整。实际购买价格以用户付款时为准，后续即使价格发生变化，DigBig也不会对这个订单进行差价补偿。</dd>
				<dt>算力波动说明</dt>
				<dd>DigBig提供的套餐对应的为真实算力，真实算力由于网络、矿机功率等不稳定因素会导致波动，DigBig不承诺100%稳定运行。</dd>
				<dt>不可控风险声明</dt>
				<dd>DigBig不对以下不可控风险所造成的损失负责：不能预见、不能避免或不能克服的客观事件，包括自然灾害如洪水、火山爆发、地震、山崩、火灾、被中国政府部门评定为百年不遇级别以上的风暴和恶劣气候等，政府行为和政府指令，城市级别的电网供电事故，以及社会异常事件如战争、罢工、动乱等。</dd>
				<dt>使用范围声明</dt>
				<dd>用户不得将DigBig提供的算力用于攻击网络等违法违规行为，否则DigBig有权强行收回您的算力。</dd>
			</dl>
		</div>
		<div v-else>
			<h5>Note: </h5>
			<dl>
				<dt>Legal Notice</dt>
				<dd>Mineral sharing services are prohibited in the following countries: Crimea, Cuba, Iran, North Korea, Syria,
					Hong Kong and China. Please confirm that the mining machine sharing service is legal in your country or region.
					Otherwise, you will bear all legal consequences. </dd>
				<dt>Unable to refund</dt>
				<dd>According to the agreement, once your purchase is completed, the refund will not be supported. </dd>
				<dt>Pricing Rules</dt>
				<dd>The pricing of the mining machine sharing package will be adjusted according to various factors such as the
					digital currency price. The actual purchase price is subject to the user's payment, and even if the price changes,
					DigBig will not compensate the order for the difference. </dd>
				<dt>Description of power fluctuations</dt>
				<dd>DigBig provides the actual computing power, and the actual computing power will cause fluctuations due to
					unstable factors such as network and mining machine power. DigBig does not promise 100% stable operation. </dd>
				<dt>Uncontrollable Risk Claim</dt>
				<dd>DigBig is not liable for damages caused by uncontrollable risks: objective events that cannot be foreseen,
					avoided or cannot be overcome, including natural disasters such as floods, volcanic eruptions, earthquakes,
					landslides, fires, and ratings by the Chinese government for a hundred years. The above storms and bad weather,
					government actions and government directives, city-level power grid accidents, and social anomalies such as war,
					strikes, turmoil, etc. </dd>
				<dt>Use scope statement</dt>
				<dd>Users should not use the computing power provided by DigBig to attack illegal activities such as the Internet,
					otherwise DigBig has the right to forcibly recover your computing power. </dd>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				lang: this.$store.state.lang
			}
		}
	}
</script>

<style>
</style>
