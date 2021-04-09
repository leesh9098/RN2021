/**
 * @format
 */

import React from 'react'; // 추가
import { AppRegistry } from 'react-native';
import App from './app/App'; // 수정
const TodoApp = () => <App /> // 추가
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => TodoApp); // 수정