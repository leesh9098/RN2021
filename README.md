# REACT NATIVE
### 21.04.30
- - -
#### React Native에서 Style적용하고 관리하기
+ React Native는 내장 컴포넌트를 제공하는데, 이들 컴포넌트에는 특정한 스타일을 지원함
  그러나 한 컴포넌트의 특정 스타일은 다른 컴포넌트에 적용할 수도 있고 아닐 수도 있음
  Ex) fontWeight속성은 Text컴포넌트에서는 지원하지만 View컴포넌트에서는 지원하지 않음 반면에 flex속성은 View컴포넌트에만 지원
+ View컴포넌트는 shadowTColor를, Text컴포넌트는 textShadowColor를 지원
+ 스타일 적용방법 3가지 예제

+ 인라인 스타일
```javascript
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
     <View style={{marginLeft: 20, marginTop: 20}}>
      <Text style={{fontsize: 18, color: 'red'}}>Some Text</Text>
     </View>
    )
  )
}
```
+ StyleSheet에 정의된 스타일 참조
```javascript
import React,  { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style-{styles.container}>
        <Text style={[styles.message,styles.warning]}>Some Text</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 20
  },
  message: {
    fontSize: 18
  },
  warning: {
    color: 'red'
  }
});
```
+ 스타일 파일을 외부로 분리 및 가져오기
```javascript
//styles.js
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    backgroundColor: '#ededed',
    flexWrap: 'wrap'
  }
})

const buttons = StyleSheet.create({
  primary: {
    flex: 1,
    height: 70,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  }
})

export { styles, buttons }
```

```javascript
// App.js
import React, { Component } from 'react'
import { Text, View, Touchablehighlight } from 'react-native'
import { Text, View, Touchablehighlight } from 'react-native'
import { styles, buttons } from './component/styles'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Touchablehighlight style={buttons.primary}>
          <Text>Sample Text</Text>
        </Touchablehighlight>
      </View>
    )
  }
}
```
+ Stylesheet에서는 style객체를 생성해서 각 스타일을 개별적으로 참조
+ render 메서드에서 스타일을 분리하는 것이 가독성이 좋으며 재활용에도 용의
+ 만일 중복된 property가 있을 때는 마지막으로 전달된 스타일이 이전 스타일을 재정의
- - -
#### 스타일 구성하기
+ 웹에서는 스타일이 모든 페이지에 적용되지만, React Native에서는 컴포넌트 단위로 적용
+ React Native는 컴포넌트가 중심이고, 따라서 컴포넌트를 재사용 가능하도록 하는 것을 목표로 함
+ React Native 커뮤니티에서는 다음 2가지의 적용 방법을 권장
  - 컴포넌트 내에 스타일시트 선언
  - 컴포넌트 파일과는 별도의 스타일 시트 선언
+ 컴포넌트 내에 스타일 시트를 선언하는 방법의 장점은 하나의 파일에 컴포넌트와 컴포넌트가 사용할 스타일을 완전히 캡슐화 할 수 있다는 것임 이때 스타일은 컴포넌트 이후에 작성
+ 별도의 스타일 파일을 만드는 경우 파일명은 임의로 정할 수 있지만 일반적으로 styles.js로 함    ※확장자가 css가 아니라 js
  이 경우 컴포넌트와 스타일 파일은 같은 경로에 저장
