class Books extends React.Component {

    state = initialState

    updateInput = (key, value) => {
        this.setState({
            ...this.state,
            [key]: value
        })
    }

    addBook = () => {
        this.props.dispatchAddBook(this.state)
        this.setState(initialState)
    }
}