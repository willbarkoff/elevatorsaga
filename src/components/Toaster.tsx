/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"
import Toast, { ToastStyle } from "./Toast"
import "./Toaster.scss"

const nextId = (() => { let i = 0; return () => i++ })()

interface Toast {
	content: string
	style: ToastStyle
	timeout?: number
}

interface ToastWithID extends Toast {
	ID: number
}

type ToastContextData = {
	toasts: ToastWithID[]
	addToast(toast: Toast): void
}

interface ToasterProps {
	children: React.ReactNode
}

const ToastContext = createContext<ToastContextData | null>(null)

export const useToast = () => {
	const context = useContext(ToastContext)
	if (!context) {
		throw new Error("useToast must be used within a Toaster provider")
	}
	return context.addToast
}

const Toaster = ({ children }: ToasterProps) => {
	const [toasts, setToasts] = useState<ToastWithID[]>([])
	const destroyToast = (ID: number) => {
		setToasts((toasts) => toasts.filter(toast => toast.ID != ID))
	}
	const addToast = (newToast: Toast) => {
		const ID = nextId()
		setToasts((toasts) => [...toasts, { ...newToast, ID }])
		if (newToast.timeout) {
			setTimeout(() => destroyToast(ID), newToast.timeout)
		}
	}

	return <ToastContext.Provider value={{ toasts, addToast }}>
		{children}
		<div className="Toaster">
			{toasts.map((toast, i) => <Toast
				key={i}
				{...toast}
				destroy={() => destroyToast(toast.ID)}
			/>)}
		</div>
	</ToastContext.Provider>

}

export default Toaster