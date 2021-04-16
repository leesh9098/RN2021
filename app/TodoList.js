import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'
const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
    todos = todos.map((todo, i) => {
        return (
            <Todo deleteTodo={deleteTodo} toggleComplete={toggleComplete} key={todo.todoIndex} todo={todo} /> // 3.20 코드 추가
        )
    })
    return (
        <View>
            {todos}
        </View>
    )
}
export default TodoList