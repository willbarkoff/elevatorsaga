import Editor from './Editor'
import Header from './Header'
import Simulator from './Simulator'
import Nord from "monaco-themes/themes/Nord.json"
import ElevatorLib from "../ElevatorLib.d.ts?raw"

import "./App.scss"
import loader from '@monaco-editor/loader'

(async () => {
	const monaco = await loader.init()
	monaco.editor.defineTheme("nord", Nord as any)
	monaco.editor.setTheme("nord")
	monaco.languages.typescript.typescriptDefaults.addExtraLib(ElevatorLib, "ts:filename/ElevatorLib.d.ts");
})()

const App = () => {
	return <div className="App">
		<Header />
		<div className="content">
			<div className="major-section editor"><Editor /></div>
			<div className="major-section simulator"><Simulator /></div>
		</div>
	</div>
}

export default App