import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberToAlphaPipe } from './number-to-alpha/number-to-alpha.pipe';



@NgModule({
	declarations: [
		NumberToAlphaPipe
	],
	imports: [
		CommonModule
	],
	exports: [
		NumberToAlphaPipe
	]
})
export class PipesModule { }
