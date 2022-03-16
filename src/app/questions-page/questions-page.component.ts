import {
	AfterViewInit,
	Component,
	ElementRef,
	OnDestroy,
	Renderer2,
	ViewChild,
} from "@angular/core";
import { Observable, take, tap } from "rxjs";
import { IQuestion } from "../data/questions";
import { NumberToAlphaPipe } from "../pipes/number-to-alpha/number-to-alpha.pipe";
import { QuestionsService } from "../questions.service";

@Component({
	selector: "app-questions-page",
	templateUrl: "./questions-page.component.html",
	styleUrls: ["./questions-page.component.scss"],
	providers: [NumberToAlphaPipe],
})
export class QuestionsPageComponent implements AfterViewInit, OnDestroy {
	public vm$: Observable<IQuestion> = this.questionsService.getQuestion$;
	public feedback: string = "";
	public correctFeedback: string = "That is correct! Good job!";
	public timer: number = 0;
	private timerInterval: any;
	private TIME_ALLOWED: number = 15;

	@ViewChild("timerBar") public timerBar: ElementRef;

	constructor(
		private readonly numberToAlpha: NumberToAlphaPipe,
		private readonly questionsService: QuestionsService,
		private readonly renderer2: Renderer2,
	) {}

	public ngAfterViewInit(): void {
		this.startTimer(this.TIME_ALLOWED);
		this.timerBar;
	}

	public ngOnDestroy(): void {
		this.stopTimer();
	}

	public onOptionClicked(e: MouseEvent, index: number): void {
		this.vm$
			.pipe(
				take(1),
				tap((questionData) => {
					this.stopTimer();
					if (index === questionData.correctAnswer) {
						this.renderer2.addClass(
							e.target,
							"selected-correct",
						);
						this.feedback = this.correctFeedback;
						this.questionsService.setQuestionResult(
							true,
						);
					} else {
						this.renderer2.addClass(
							e.target,
							"selected-incorrect",
						);
						this.feedback = `Nope, the correct answer was: ${
							questionData.options[
								questionData
									.correctAnswer
							]
						}`;
						this.questionsService.setQuestionResult(
							false,
						);
					}
				}),
			)
			.subscribe();
	}

	public nextQuestion(): void {
		this.resetQuestion();
		this.questionsService.nextQuestion();
		this.startTimer(this.TIME_ALLOWED);
	}

	private resetQuestion(): void {
		this.feedback = "";
	}

	private startTimer(seconds: number) {
		this.timer = seconds;
		const timerBarIncrement = 100 / this.TIME_ALLOWED;
		let timerBarWidth = 0;
		this.renderer2.setStyle(this.timerBar.nativeElement, "width", 0);

		this.timerInterval = setInterval(() => {
			if (this.timer === 0) {
				this.stopTimer();
				this.timeExpired();
			} else {
				this.timer = this.timer - 1;
				this.renderer2.removeClass(
					this.timerBar.nativeElement,
					"reset-bar",
				);
				this.renderer2.setStyle(
					this.timerBar.nativeElement,
					"width",
					`${(timerBarWidth += timerBarIncrement)}%`,
				);
			}
		}, 1000);
	}

	private stopTimer(): void {
		if (this.timerInterval) {
			this.renderer2.addClass(this.timerBar.nativeElement, "reset-bar");
			clearInterval(this.timerInterval);
		}
	}

	private timeExpired(): void {
		this.vm$
			.pipe(
				take(1),
				tap((questionData) => {
					this.feedback = `Sorry, you ran out of time. The correct answer was: ${
						questionData.options[
							questionData.correctAnswer
						]
					}`;
					this.questionsService.setQuestionResult(false);
				}),
			)
			.subscribe();
	}
}
