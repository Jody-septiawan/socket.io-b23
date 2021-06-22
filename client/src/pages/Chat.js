import { useState, useEffect} from 'react'
import { io } from 'socket.io-client'
import { useHistory } from "react-router-dom";
  
import FormSendMessage from '../components/forms/FormSendMessage';
import ListMessage from '../components/Lists/ListMessage'

let socket

export default function Chat({ user }) {
    let history = useHistory();

    const [ messages, setMessages ] = useState([])

    const loadMessage = async () => {
        await socket.on('messages', (data) => {
            setMessages(data)
        })
    }

    if(!user?.username){
        history.push('/auth')
    }

    setInterval(()=>{
        loadMessage()
    },2000)

    useEffect(()=>{
        socket = io('http://localhost:5000/chat')

        return () =>{
            socket.disconnect()
        }
    },[])

    const handleAddMessage = (data) => {
        socket.emit('add message', data)
    }


    return (
        <div className="chat" style={{height: '100vh'}}>
            <ListMessage messages={messages} user={user} />
            <FormSendMessage user={user} handleAddMessage={handleAddMessage} />
        </div>
    )
}
