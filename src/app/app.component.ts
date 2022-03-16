import { Component, HostListener } from "@angular/core";

export enum Keys {
	BackspaceKey = 8,
	TabKey = 9,
	EnterKey = 13,
	EscKey = 27,
	SpaceKey = 32,
	UpKey = 38,
	DownKey = 40,
}

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "trivia-game";

	@HostListener("document:keyup", ["$event.keyCode"])
	public onGlobalKeyUpEvent(eventKeyCode: number): void {
		if (eventKeyCode === Keys.TabKey) {
			document.querySelector("body")?.classList.remove("no-outline");
		}
	}

	@HostListener("document:click")
	public onGlobalClickEvent(): void {
		document.querySelector("body")?.classList.add("no-outline");
	}
}
