function Message() {

    //JSX: JavaScript XML - it allows to create dynamic content
    const name = "Yared";
    if (name) {
        return <h1>Hello {name}</h1>
    } else {
        return <h1>Hello Unknown User</h1>;
    }
}

export default Message;