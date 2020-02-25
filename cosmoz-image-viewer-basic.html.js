import { html } from '@polymer/polymer/lib/utils/html-tag';
export default html`
	<style>
		html,
		body {
			margin: 0;
			font-family: sans-serif;
		}
		body {
			overflow: visible;
		}
		#image {
			overflow-y: auto;
			width: 100%;
		}
		#actions {
			position: fixed;
			left: 0;
			top: 0;
			background-color: rgba(0, 0, 0, 0.6);
			width: 100%;
			height: 64px;
			opacity: 0.1;
			display: flex;
			align-items: center;
			-webkit-transition: opacity .25s ease-in-out;
			-moz-transition: opacity .25s ease-in-out;
			-ms-transition: opacity .25s ease-in-out;
			-o-transition: opacity .25s ease-in-out;
			transition: opacity .25s ease-in-out;
			transition-delay: 0s;
			color: rgba(255, 255, 255, 0.87);
			z-index: 10;
		}
		#actions:hover {
			opacity: 1;
			transition-delay: 0s;
		}
		.fa {
			color: #fff;
			font-size: 1.2em;
			cursor: pointer;
		}
		.btn {
			font-size: 2em;
		}
		#pageNumber {
			width: 100%;
			text-align: center;
			font-size: 1.1em;
			letter-spacing: 0.2em;
		}
		.action-box {
			padding: 0 48px;
			display: -ms-flexbox;
			display: -webkit-flex;
			display: flex;
			-ms-flex-direction: row;
			-webkit-flex-direction: row;
			flex-direction: row;
		}
		.action-box > * {
			padding-right: 24px;
		}
		.icon-btn {
			position: inline-block;
			width: 40px;
			height: 40px;
			border-radius: 20px;
			background-color: rgba(0, 0, 0, 0.44);
			padding: 8px;
			outline: none;
			cursor: pointer;
			box-sizing: border-box !important;
			margin: 6px;
		}
		.icon-btn[disabled] {
			cursor: default;
			background-color: rgba(0, 0, 0, 0.2);
			color: rgba(255, 255, 255, 0.4);
		}
		.icon-only {
			width: 24px;
			height: 24px;
			cursor: pointer;
		}
		.icon {
			pointer-events: none;
			display: block;
			width: 100%;
			height: 100%;
			fill: currentColor;
		}
		[hidden] {
			visibility: hidden;
		}
		@media print {
			.hide-on-print {
				display: none !important;
			}
			.print-image {
				display: block;
				page-break-inside: avoid;
				page-break-after: always;
				max-height: 100%;
				width: 100%;
			}
		}
		.fullscreen {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			background-color:#eee;
			opacity: 0.7;
		}
		#error.fullscreen {
			display: none;
			opacity: 0.95;
		}
		.center-holder {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -40px;
			margin-top: -40px;
		}
		#error .center-holder {
			margin-left: -150px;
		}
		.center-content {
			width: 80px;
			height: 80px;
			position: relative;
		}
		#error .center-content {
			width: 300px;
			text-align: center;
		}
		.sk-circle .sk-child {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
		}
		.sk-circle .sk-child:before {
			content: '';
			display: block;
			margin: 0 auto;
			width: 15%;
			height: 15%;
			background-color: rgb(95, 90, 146);
			border-radius: 100%;
			-webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
			animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
		}
		.sk-circle .sk-circle2 {
			-webkit-transform: rotate(30deg);
			-ms-transform: rotate(30deg);
			transform: rotate(30deg);
		}
		.sk-circle .sk-circle3 {
			-webkit-transform: rotate(60deg);
			-ms-transform: rotate(60deg);
			transform: rotate(60deg);
		}
		.sk-circle .sk-circle4 {
			-webkit-transform: rotate(90deg);
			-ms-transform: rotate(90deg);
			transform: rotate(90deg);
		}
		.sk-circle .sk-circle5 {
			-webkit-transform: rotate(120deg);
			-ms-transform: rotate(120deg);
			transform: rotate(120deg);
		}
		.sk-circle .sk-circle6 {
			-webkit-transform: rotate(150deg);
			-ms-transform: rotate(150deg);
			transform: rotate(150deg);
		}
		.sk-circle .sk-circle7 {
			-webkit-transform: rotate(180deg);
			-ms-transform: rotate(180deg);
			transform: rotate(180deg);
		}
		.sk-circle .sk-circle8 {
			-webkit-transform: rotate(210deg);
			-ms-transform: rotate(210deg);
			transform: rotate(210deg);
		}
		.sk-circle .sk-circle9 {
			-webkit-transform: rotate(240deg);
			-ms-transform: rotate(240deg);
			transform: rotate(240deg);
		}
		.sk-circle .sk-circle10 {
			-webkit-transform: rotate(270deg);
			-ms-transform: rotate(270deg);
			transform: rotate(270deg);
		}
		.sk-circle .sk-circle11 {
			-webkit-transform: rotate(300deg);
			-ms-transform: rotate(300deg);
			transform: rotate(300deg);
		}
		.sk-circle .sk-circle12 {
			-webkit-transform: rotate(330deg);
			-ms-transform: rotate(330deg);
			transform: rotate(330deg);
		}
		.sk-circle .sk-circle2:before {
			-webkit-animation-delay: -1.1s;
			animation-delay: -1.1s;
		}
		.sk-circle .sk-circle3:before {
			-webkit-animation-delay: -1s;
			animation-delay: -1s;
		}
		.sk-circle .sk-circle4:before {
			-webkit-animation-delay: -0.9s;
			animation-delay: -0.9s;
		}
		.sk-circle .sk-circle5:before {
			-webkit-animation-delay: -0.8s;
			animation-delay: -0.8s;
		}
		.sk-circle .sk-circle6:before {
			-webkit-animation-delay: -0.7s;
			animation-delay: -0.7s;
		}
		.sk-circle .sk-circle7:before {
			-webkit-animation-delay: -0.6s;
			animation-delay: -0.6s;
		}
		.sk-circle .sk-circle8:before {
			-webkit-animation-delay: -0.5s;
			animation-delay: -0.5s;
		}
		.sk-circle .sk-circle9:before {
			-webkit-animation-delay: -0.4s;
			animation-delay: -0.4s;
		}
		.sk-circle .sk-circle10:before {
			-webkit-animation-delay: -0.3s;
			animation-delay: -0.3s;
		}
		.sk-circle .sk-circle11:before {
			-webkit-animation-delay: -0.2s;
			animation-delay: -0.2s;
		}
		.sk-circle .sk-circle12:before {
			-webkit-animation-delay: -0.1s;
			animation-delay: -0.1s;
		}
		@-webkit-keyframes sk-circleBounceDelay {
			0%,
			80%,
			100% {
				-webkit-transform: scale(0);
				transform: scale(0);
			}
			40% {
				-webkit-transform: scale(1);
				transform: scale(1);
			}
		}
		@keyframes sk-circleBounceDelay {
			0%,
			80%,
			100% {
				-webkit-transform: scale(0);
				transform: scale(0);
			}
			40% {
				-webkit-transform: scale(1);
				transform: scale(1);
			}
		}
	</style>

	<img id="image" class="hide-on-print" src="[[currentImage]]" on-load="_onImageLoad" on-error="_onImageError">
	<div id="printContainer"></div>
	<div id="actions" class="hide-on-print">
		<div id="navs" class="action-box">
			<div id="prevImg" class="icon-btn nav" on-click="prev">
				<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
					<g><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
				</svg>
			</div>
			<div id="nextImg" class="icon-btn nav" on-click="next">
				<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
					<g><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
				</svg>
			</div>
		</div>
		<span id="pageNumber"></span>
		<div class="action-box">
			<div class="icon-only" on-click="downloadImages">
				<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
					<g><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
				</svg>
			</div>
			<div class="icon-only" on-click="printPage">
				<svg class="icon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
					<g><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3
					11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
				</svg>
			</div>
		</div>
	</div>
	<div id="loading" class="fullscreen">
		<div class="center-holder">
			<div class="sk-circle center-content">
				<div class="sk-circle1 sk-child"></div>
				<div class="sk-circle2 sk-child"></div>
				<div class="sk-circle3 sk-child"></div>
				<div class="sk-circle4 sk-child"></div>
				<div class="sk-circle5 sk-child"></div>
				<div class="sk-circle6 sk-child"></div>
				<div class="sk-circle7 sk-child"></div>
				<div class="sk-circle8 sk-child"></div>
				<div class="sk-circle9 sk-child"></div>
				<div class="sk-circle10 sk-child"></div>
				<div class="sk-circle11 sk-child"></div>
				<div class="sk-circle12 sk-child"></div>
			</div>
		</div>
	</div>
	<div id="error" class="fullscreen">
		<div class="center-holder">
			<div class="center-content">
				<h2>An error occurred while loading the image.</h2>
			</div>
		</div>
	</div>
`;
