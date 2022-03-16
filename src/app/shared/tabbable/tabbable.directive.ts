import { Directive } from '@angular/core';

@Directive({
  selector: "[click]:not([href]):not([tabindex='-1'])",
	host: {
		tabindex: "0",
		style: "cursor:pointer",
		"(keydown.enter)": "$event.preventDefault(); $event.target.click();",
	},
})
export class TabbableDirective {}
