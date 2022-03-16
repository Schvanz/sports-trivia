import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { IQuestion, questions } from "./data/questions";

@Injectable({
	providedIn: "root",
})
export class QuestionsService {
	private readonly TOTAL_QUESTIONS: number = 10;
	private randomizedQuestions = questions.slice().sort(() => Math.random() - 0.5);
	private currentQuestion: number = 0;
	private score: boolean[] = [];
	private questions$$: BehaviorSubject<number> = new BehaviorSubject<number>(
		this.currentQuestion,
	);

	constructor(private readonly router: Router) {}

	public getQuestion$: Observable<IQuestion> = this.questions$$.asObservable().pipe(
		map((questionNumber) => ({
			...this.randomizedQuestions[questionNumber],
			questionNumber: questionNumber + 1,
		})),
		tap((result) => {
			if (
				!result.question ||
				result.questionNumber > this.TOTAL_QUESTIONS
			) {
				this.router.navigate(["/conclusion"]);
			}
		}),
	);

	public setQuestionResult(result: boolean): void {
		this.score.push(result);
	}

	public getQuestionResults(): boolean[] {
		return this.score;
	}

	public nextQuestion(): void {
		this.questions$$.next(++this.currentQuestion);
	}

	public resetGame(): void {
		this.questions$$.next((this.currentQuestion = 0));
		this.score = [];
		this.randomizedQuestions = this.randomizeQuestions(questions);
	}

	private randomizeQuestions(questions: Readonly<IQuestion[]>): IQuestion[] {
		return questions.slice().sort(() => Math.random() - 0.5);
	}
}
