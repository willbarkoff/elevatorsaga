import MonacoEditor, { EditorProps } from "@monaco-editor/react"
import placeholder from "../placeholder.ts?raw"


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

const Editor = () => {
	return <>
		<MonacoEditor defaultValue={placeholder} language="typescript" {...monacoProps} />
	</>
}

export default Editor