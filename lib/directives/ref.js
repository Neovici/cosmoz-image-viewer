import { directive } from 'lit-html';

export const ref = directive(ref => part => {
	ref.current = part.startNode.parentNode;
});
