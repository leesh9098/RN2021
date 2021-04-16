import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './Heading'
import Input from './Input'
import Button from './Button'
import TodoList from './TodoList' //3.16 코드 추가
let todoIndex = 0
import TabBar from './TabBar' //3.25 코드 추가
class App extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All'
        }
        this.submitTodo = this.submitTodo.bind(this)
        // 3.17 코드 추가
        this.toggleComplete = this.toggleComplete.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        // 3.22 코드 추가
        this.setType = this.setType.bind(this)
    }

    inputChange(inputValue) {
        console.log(' inputValue: ', inputValue)
        this.setState({ inputValue })
    }

    submitTodo() {
        if (this.state.inputValue.match(/^\s*$/)) {
            return
        }
        const todo = {
            title: this.state.inputValue,
            todoIndex,
            complete: false
        }
        todoIndex++
        const todos = [...this.state.todos, todo]
        this.setState({ todos, inputValue: '' }, () => {
            console.log('State: ', this.state)
        })
    }

    // 3.17 코드
    deleteTodo(todoIndex) {
        let { todos } = this.state
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
        this.setState({ todos })
    }

    toggleComplete(todoIndex) {
        let todos = this.state.todos
        todos.forEach((todo) => {
            if (todo.todoIndex === todoIndex) {
                todo.complete = !todo.complete
            }
        })
        this.setState({ todos })
    }

    //3.22 코드 추가
    setType(type) {
        this.setState({ type })
    }

    render() {
        const { todos, inputValue, type } = this.state

        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Heading />
                    <Input inputValue={inputValue} inputChange={(text) => this.inputChange(text)} />
                    {/* 3.19 코드 추가 */}
                    {/* 3.25 코드 추가 type={type} */}
                    <TodoList type={type} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} todos={todos} />
                    <Button submitTodo={this.submitTodo} />
                </ScrollView>
                {/* 3.25 코드 추가 */}
                <TabBar type={type} setType={this.setType} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1,
        paddingTop: 60
    }
})

export default App
