import MonacoEditor, { EditorProps } from "@monaco-editor/react"
import { useEffect } from "react"
import { useToast } from "./Toaster"

const monacoProps: EditorProps = {
	height: "100%",
	width: "100%",
	options: {
		readOnly: false,
		minimap: { enabled: false },
		fontFamily: "Space Mono",
		fontSize: 15,
		lineHeight: 1.7
	},
	theme: "nord"
}

interface editorProps {
	editorState: string
	handleEditorChange: (newValue: string) => void
}

const Editor = ({ editorState, handleEditorChange }: editorProps) => {
	const toast = useToast()

	useEffect(() => {
		const listener = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.code === "KeyS") {
				toast({ content: "Don't worry! Your data is saved automatically.", style: "normal", timeout: 3000 })
				e.preventDefault();
			}
		}
		document.addEventListener("keydown", listener, false);
		return () => document.removeEventListener("keydown", listener, false)
	})

	return <>
		<MonacoEditor language="typescript" value={editorState} onChange={(value) => value && handleEditorChange(value)} {...monacoProps} />
	</>
}

export default Editor