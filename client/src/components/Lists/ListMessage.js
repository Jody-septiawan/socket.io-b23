import React from 'react'

export default function ListMessage({ messages, user }) {
    return (
        <>
            {messages.map((message,index)=> (
                <div className={`p-1 d-flex ${message?.username == user?.username && 'justify-content-end'}`}>
                    <div style={{backgroundColor: '#90e0ef', maxWidth: '200px'}} className="rounded px-2">
                        <small>{message.username}</small>
                        <div>{message.message}</div>
                    </div>
                </div>
            ))}
        </>
    )
}
