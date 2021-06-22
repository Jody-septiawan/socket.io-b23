import { useState } from 'react'
import { 
    Form, 
    Button, 
    InputGroup, 
    FormControl} from 'react-bootstrap'

export default function FormSendMessage({ handleAddMessage, user }) {

    const [ form, setForm ] = useState({
        username: user?.username,
        message: ''
    })

    const { message } = form;

    const onChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        handleAddMessage(form)
        setForm({
            username: user.username,
            message: ''
        })
    }

    return (
        <div className="fixed-bottom p-1">
            <Form onSubmit={onSubmit}>
                <InputGroup className="mb-2">
                    <FormControl
                        placeholder="Write here .."
                        type="text"
                        name="message"
                        value={message}
                        onChange={onChange}
                    />
                    <Button type="submit" variant="primary" id="button-addon2">
                        Send
                    </Button>
                </InputGroup>
            </Form>
        </div>
    )
}
