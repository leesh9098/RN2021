import React from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { addBook } from './actions'

import { connect } from 'react-redux'

const initialState = {
    name: '',
    author: ''
}