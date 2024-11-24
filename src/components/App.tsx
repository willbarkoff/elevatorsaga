import Editor from './Editor'
import Header from './Header'
import Game from './Game'
import Nord from "monaco-themes/themes/Nord.json"
import loader from '@monaco-editor/loader'
import { useState } from 'react'

import ElevatorLib from "../types/ElevatorLib.d.ts?raw"
import placeholder from "../placeholder.ts?raw"
import "./App.scss"
import Toaster from './Toaster'

const STORAGE_KEY_FILE = "ES_active_file";


(async () => {
	const monaco = await loader.init()
	// we don't have a good type for this.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	monaco.editor.defineTheme("nord", Nord as any)
	monaco.editor.setTheme("nord")
	monaco.languages.typescript.typescriptDefaults.addExtraLib(ElevatorLib, "ts:filename/ElevatorLib.d.ts");
})()

const App = () => {
	const [editorState, setEditorState] = useState(localStorage.getItem(STORAGE_KEY_FILE) || placeholder)

	const updateEditorState = (newValue: string) => {
		setEditorState(newValue)
		localStorage.setItem(STORAGE_KEY_FILE, newValue)
	}

	return <div className="App">
		<Toaster>
			<Header />
			<div className="content">
				<div className="major-section editor"><Editor editorState={editorState} handleEditorChange={updateEditorState} /></div>
				<div className="major-section simulator"><Game solution={editorState} /></div>
			</div>
		</Toaster>
	</div>
}

export default App