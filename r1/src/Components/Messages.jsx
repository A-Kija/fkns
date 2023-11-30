export default function Messages({ messages, removeMessage }) {

    if (messages.length === 0) {
        return null;
    }

    return (

        <div className="messages-bin">
            {
                messages.map(message => (
                    <div key={message.id} className={'alert alert-' + message.type + ' alert-dismissible fade show'} role="alert">
                        {message.text}
                        <button type="button" onClick={_ => removeMessage(message.id)} className="btn-close"></button>
                    </div>
                ))
            }
        </div>



    );

}
