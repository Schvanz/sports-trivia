import { Component, OnInit } from "@angular/core";
import { QuestionsService } from "../questions.service";

@Component({
	selector: "app-intro-page",
	templateUrl: "./intro-page.component.html",
	styleUrls: ["./intro-page.component.scss"],
})
export class IntroPageComponent implements OnInit {
	constructor(private readonly questionsService: QuestionsService) {}

	ngOnInit(): void {
		this.questionsService.resetGame();
	}
}
