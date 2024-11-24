import { useState } from "react";

import "./Game.scss"
import { executeSolution, parseSolution } from "../simulator/simulator";
import { useToast } from "./Toaster";

interface gameProps {
	solution: string
}

const Game = ({ solution }: gameProps) => {
	const [showChanges, setShowChanges] = useState(false)

	const toast = useToast()

	return <div className="Simulator">
		<p>
			Welcome to Elevator Saga. Your job is to deliver the most people to their floor in the least amount of time possible.
		</p>

		<p>
			This version of Elevator Saga is based off of <a href="https://play.elevatorsaga.com/">the original</a> by Magnus Wolffelt. While the core
			gameplay has not been modified, {showChanges ? "some changes have been made:" : <><a onClick={() => setShowChanges(true)}>some changes have been made</a>.</>}
		</p>

		{showChanges && <ul>
			<li>The game has been ported to <a href="https://typescriptlang.org">TypeScript</a>.</li>
			<ul>
				<li>The API has been slightly modified to enable stricter typing and increase ease of use. This includes the some breaking changes.</li>
			</ul>
			<li>The site has updated with a new design and been made easier to use; for example, the editor now provides autocompletion.</li>
			<li>Your progress is now saved to your browser's local storage. This means that you won't lose your progress when you leave the page.</li>
			<li>Much of the game has changed under the hood, including a complete rewrite of the game engine, and a new React-based client.</li>
		</ul>}

		<button onClick={() => {
			const solutionClass = parseSolution(solution)
			executeSolution(solutionClass)
		}}>Execute solution</button>

		<button onClick={() => toast({ content: "Hello!", style: "normal", timeout: 1000 })}>Cook toast</button>
	</div>
}

export default Game;