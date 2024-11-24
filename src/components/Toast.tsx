import "./Toast.scss"

export type ToastStyle = "normal" | "light" | "red" | "orange" | "yellow" | "green" | "purple"

interface ToastProps {
    content: string
    style: ToastStyle
    destroy(): void
}

const Toast = ({ content, style, destroy }: ToastProps) => {
	return <div className={`Toast ${style}`} onClick={destroy}>
		{content}
	</div>
}

export default Toast;