class Books extends React.Component {

    render() {
        //   </ScrollView >
        <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
                <TextInput
                    value={this.state.name}
                    onChangeText={value => this.updateInput('name', value)}
                    style={styles.input}
                    placeholder='Book name'
                />
                <TextInput
                    value={this.state.author}
                    onChangeText={value => this.updateInput('author', value)}
                    style={styles.input}
                    placeholder='Author Name'
                />
            </View>
            <TouchableOpacity onPress={this.addBook}>
                <View style={styles.addButtonContainer}>
                    <Text style={styles.addButton}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
        //    </View >
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderTopColor: '#ededed',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100
    },
    inputWrapper: {
        flex: 1
    },
    input: {
        height: 44,
        padding: 7,
        backgroundColor: '#ededed',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        marginBottom: 5
    },
    addButton: {
        fontSize: 28,
        lineHeight: 28
    },
    addButtonContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#ededed',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
})

const mapDispatchToProps = {
    dispatchAddBook: (book) => addBook(book)
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)

// }