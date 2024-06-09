<template>
	<div id="options">
		<div id="main">
			<div id="title">
				<strong>{{ renderTitle }}</strong>
			</div>
			<div id="description">
				<span>{{ renderDescription }}</span>
			</div>
			<div id="others">
				<ul>
					<li>{{ attentionInfo }}</li>
				</ul>
			</div>
		</div>
		<div id="footer">
			<strong>{{renderTitle}}</strong>
			&nbsp;
			<span>Powered by</span><a href="https://www.npmjs.com/package/@vxt/cli" target="_blank">~⭐@VXT/CLI</a>
			&nbsp;
			<img src="https://static.npmjs.com/da3ab40fb0861d15c83854c29f5f2962.png" alt="">
		</div>
	</div>
</template>
<script lang="ts" setup>
import {onMounted, ref} from "vue";

const renderTitle = chrome.i18n.getMessage("appName")
const renderDescription = chrome.i18n.getMessage("appDesc")
const attentionInfo = chrome.i18n.getMessage("attentionInfo")
onMounted(() => {
	document.title = renderTitle
})

</script>
<style lang="scss">
html, body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0
}

#app {
	width: 100%;
	height: 100%;
}

* {
	font-size: 1.05rem;
}

#options {
	width: 100%;
	height: 100%;
	text-align: center;
	margin: 0 auto;
	background-color: #f0f0f0;
	box-sizing: border-box;
	padding: 5%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	#main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	#title, #description {
		padding: 2rem;
		box-sizing: border-box;
	}

	#title {
		> strong {
			font-size: 3rem;
			color: #0000;
			background-image: linear-gradient(90deg, pink, #FFC0CBa0, aqua, #00FFFF20);
			-webkit-background-clip: text;
			letter-spacing: .5rem;
		}
	}

	#description {
		color: #999;
	}

	#others {
		color: #999;
		* {
			font-size: 14px;
		}
	}
	#footer {
		display: flex;
		align-items: center;
		> * {
			color: #999;
			font-size: 14px;
		}
	}

}
</style>
