import { Component, OnInit } from "@angular/core";
import { QuestionsService } from "../questions.service";

@Component({
	selector: "app-conclusion-page",
	templateUrl: "./conclusion-page.component.html",
	styleUrls: ["./conclusion-page.component.scss"],
})
export class ConclusionPageComponent implements OnInit {
	public resultsMessage: string = "";
	constructor(private readonly questionsService: QuestionsService) {}

	public ngOnInit(): void {
		const results = this.questionsService.getQuestionResults();
		this.resultsMessage = `You got ${
			results.filter((value) => value === true).length
		} out of ${results.length} correct.`;
	}
}
