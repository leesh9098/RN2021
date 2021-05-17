# REACT NATIVE
## 21.05.14
#### borderRadius를 이용해서 모양 만들기
+ borderRadius속성은 사각형의 모서리에 대한 속성으로 방향이 top부터 시계방향인 right, bottom, left 이기는 하나
  borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius, borderTopLeftRadius로 지정한다.
+ 다음과 같이 borderRadius속성으로 한번에 지정할 수도 있다.
  + borderRadius: top, right, bottom, left
#### 컴포넌트의 위치를 margin과 padding으로 지정하기
+ 명시적으로 지정할 수도 있지만, 반응형에는 적합하지 않다.
+ 각 컴포넌트의 위치는 다른 컴포넌트의 위치에 상대적으로 지정하는 것이 바람직하다.
+ 이 경우 한 컴포넌트를 이동하면 각 컴포넌트의 상대 위치에 따라 다른 컴포넌트가 움직이기 때문이다.
+ margin을 이용해서 컴포넌트 사이의 상대적 위치를 정의한다.
+ padding을 이용해서 컴포넌트 테두리로 부터 컴포넌트의 상대적 위치를 정의한다.
#### margin 속성 이용하기
+ margin 속성에는 margin, marginTop, marginRight, marginBottom, marginLeft가 있다.
+ 구 버전에서는 ios와 android의 스타일에 차이가 있었으나 현재는 동일하게 구현이 가능하다.
#### padding 속성 이용하기
+ padding 속성에는 padding, paddingLeft, paddingRight, paddingTop, paddingBottom 속성이 있다.
+ 컴포넌트와 부모 컴포넌트 사이의 공간을 지정하는 마진과 달리, 패딩은 컴포넌트의 테두리로부터 자식 엘리먼트에 적용된다.
#### position을 이용해서 컴포넌트 배치하기
+ 구현은 css와 유사하지만, css만큼 다양한 옵션을 지원하지는 않는다.
+ 기본적으로 리액트 네이티브에서 모든 요소는 다른 요소들에 상대적으로 배치된다.
+ position이 absolute로 지정되면, 해당 요소의 위치는 부모요소의 위치를 기준으로 배치된다.
+ position 속성에는 relative(상대값:기본값)과 absolute(절대값)가 있다.
+ css의 static, fixed는 지원하지 않는다.
## 21.05.07
#### 구조분해할당
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- - -
#### View 컴포넌트에 스타일 적용하기
+ View 컴포넌트는 다른 요소를 감싸고 View 컴포넌트 내에 UI 코드 블록을 만들 수 있다는 점에서 HTML의 div 태그와 유사
- - -
#### 배경색 설정하기
+ backgroundColor 속성

|지원되는 색 형식|Example|
|:------:|:------:|
|#rgb|'#06f'|
|#rgba|'#06fc'|
|#rrggbb|'#0066ff'|
|#rrggbbaa|'ff00ff00'|
|rgb(num, num, num)|'rgb(0, 102, 255)'|
|rgb(num, num, num, alpha)|'rgba(0, 102, 255, .5)'|
|hsl(색상, 채도, 명도)|'hsl(216, 100%, 50%)'|
|hsla(색상, 채도, 명도, alpha)|'hsl(216, 100%, 50%, .5)'|
|투명배경|'transparent'|
|CSS3 지정 색 이름(black, red, blue 외)|'dodgerblue'|
    - hue: 360도로 구성된 색상환(color wheel)의 1도를 의미. 0은 빨간색, 120은 녹색, 240은 파란색
    - saturation: 색상의 강도. 회색 음영인 0%부터 선명한 색상인 100%까지 사용가능
    - lightness: 0~100%의 값으로 0%는 검은색에 가까운 어두운색이고 100%는 흰색에 가까운 밝은색

## 21.04.30
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
