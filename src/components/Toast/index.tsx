import React from 'react'

type ToastVariants = 'success' | 'error' | 'simple'

type ToastProps = {
    variant: ToastVariants,
    icon: React.ReactNode,
    text: string
}

function Toast(props: ToastProps) {
    return (
        <div></div>
    )
}

export default Toast