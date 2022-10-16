import React from 'react'
type Props = {
    className: string
}

export default function BackGround({ className }: Props) {
    return (
        <div className={`bg-primary h-928px w-928px absolute rounded-full ${className ?? ''}`}></div>
    )
}