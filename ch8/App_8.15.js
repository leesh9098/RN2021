// ...
import { addBook, removeBook } from './actions'
// ...
removeBook = (book) => {
    this.props.dispatchRemoveBook(book)
}
// ...

{
    books.map((book, index) => (
        <View style={styles.book} key={index}>
            <Text style={styles.name}>{book.name}</Text>
            <Text style={styles.author}>{book.author}</Text>
            <Text onPress={() => this.removeBook(book)}>
                Remove
                </Text>
        </View>
    ))
}

// ...
const mapDispatchToProps = {
    dispatchAddBook: (book) => addBook(book),
    dispatchRemoveBook: (book) => removeBook(book)
}
// ...
