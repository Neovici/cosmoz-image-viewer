import '@neovici/cosmoz-tokens';
import { html } from 'lit-html';

export default {
	decorators: [
		(story, context) => {
			const isDark = context.globals?.theme === 'dark';
			document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
			document.documentElement.classList.toggle('dark-mode', isDark);
			return html`
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
					@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
				</style>
				${story()}
			`;
		},
	],
	globalTypes: {
		theme: {
			name: 'Theme',
			toolbar: {
				icon: 'mirror',
				items: ['light', 'dark'],
				dynamicTitle: true,
			},
		},
	},
};
