export interface IQuestion {
	questionNumber?: number;
	question: string;
	options: ReadonlyArray<string>;
	correctAnswer: number;
	timeAllowed: number;
}

const defaultTime: number = 15;

export const questions: ReadonlyArray<IQuestion> = [
	{
		question: "What’s the diameter of a basketball hoop in inches?",
		options: ["10 inches", "15 inches", "18 inches", "22 inches"],
		correctAnswer: 2,
		timeAllowed: defaultTime,
	},
	{
		question: "What do you call it when a bowler makes three strikes in a row?",
		options: ["Hat trick", "Turkey", "Trio", "A good day"],
		correctAnswer: 1,
		timeAllowed: defaultTime,
	},
	{
		question: "Which boxer fought against Muhammad Ali and won?",
		options: ["Mike Tyson", "Ernie Terrell", "George Foreman", "Joe Frazier"],
		correctAnswer: 3,
		timeAllowed: defaultTime,
	},
	{
		question: "Which player has won the most NBA championships?",
		options: [
			"Michael Jordan",
			"Kareem Abdul-Jabbar",
			"Bill Russell",
			"Lebron James",
		],
		correctAnswer: 2,
		timeAllowed: defaultTime,
	},
	{
		question: "Who was the first Major League player to pitch a ball over 100 mph?",
		options: ["Dwight Gooden", "Roger Clemens", "Tom Seaver", "Nolan Ryan"],
		correctAnswer: 3,
		timeAllowed: 20,
	},
	{
		question: "In what year did beach volleyball become an Olympic sport?",
		options: ["1964", "1976", "1992", "2004"],
		correctAnswer: 2,
		timeAllowed: defaultTime,
	},
	{
		question: "How long is an Olympic sized swimming pool?",
		options: ["50 meters", "50 yards", "25 meters", "25 yards"],
		correctAnswer: 0,
		timeAllowed: defaultTime,
	},
	{
		question: "In American Football, a touchdown is worth how many points?",
		options: ["2", "3", "6", "7"],
		correctAnswer: 2,
		timeAllowed: defaultTime,
	},
	{
		question: "How many players are on a baseball team?",
		options: ["6", "9", "11", "13"],
		correctAnswer: 1,
		timeAllowed: defaultTime,
	},
	{
		question: "What is the only team in the NFL to neither host nor play in the Super Bowl?",
		options: [
			"Cleveland Browns",
			"Tampa Bay Buccaneers",
			"Jacksonville Jaguars",
			"New York Jets",
		],
		correctAnswer: 0,
		timeAllowed: 20,
	},
	{
		question: "Who holds the record for most points in an NBA basketball game?",
		options: ["Michael Jordan", "Kobe Bryant", "Wilt Chamberlain", "Lebron James"],
		correctAnswer: 2,
		timeAllowed: defaultTime,
	},
	{
		question: "What year did the players go on strike, resulting to no baseball World Series?",
		options: ["1972", "1985", "1994", "2001"],
		correctAnswer: 2,
		timeAllowed: defaultTime,
	},
	{
		question: "What sport were women allowed to play in the Olympics for the first time?",
		options: ["Volleyball", "Soccer", "Tennis", "Basketball"],
		correctAnswer: 2,
		timeAllowed: defaultTime,
	},
	{
		question: "In horse racing, the Triple Crown is awarded to a horse that wins which three races?",
		options: [
			"The Kentucky Derby, Preakness Stakes, and Belmont Stake.",
			"The Kentucky Derby, Preakness Stakes, and Breeders' Cup.",
			"The Kentucky Derby, Melbourne Cup, and Belmont Stake.",
			"The Kentucky Derby, Breeders' Cup, and Grand National.",
		],
		correctAnswer: 0,
		timeAllowed: 25,
	},
	{
		question: "What was the first NHL team to win back-to-back Stanley Cup titles?",
		options: [
			"Edmonton Oilers",
			"Montreal Canadiens",
			"Pittsburg Penguins",
			"Detroit Red Wings",
		],
		correctAnswer: 1,
		timeAllowed: 20,
	},
	{
		question: "How old was Tiger Woods when he first won the Masters?",
		options: ["19", "21", "23", "25"],
		correctAnswer: 1,
		timeAllowed: defaultTime,
	},
];
