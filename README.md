# REACT NATIVE
## 21.06.04
#### Redux란?
+ Redux는 '자바스크립트 앱을 위한 예측 가능한 state 컨테이너'로 정의한다.
+ 앱에 단 하나밖에 없는 전역 상태의 객체이다.
+ 이 전역 state객체는 리액트 네이티브 컴포넌트에서 props로 전달된다.
+ Redux state의 데이터가 변경되면, 변경된 새 데이터가 전체 앱에 props로 전달한다.
+ Redux는 앱의 state를 모두 store라는 곳으로 이동시켜 데이터 관리를 편리하게 한다.
+ Redux는 React의 context 기능을 이용해서 동작한다.
+ context는 전역 state를 만들고 관리하는 메커니즘이다.
#### context를 이용해서 앱의 전역 상태 관리하기
+ context는 전역변수를 만드는 React API이다.
+ context를 전달받는 컴포넌트는 context를 만든 컴포넌트의 자식 컴포넌트라야 한다.
+ 일반적으로 데이터를 전달하려면 컴포넌트 구조의 단계별로 props를 전달하지만 context를 이용하면 props를 사용할 필요가 없다. 왜냐하면 전역 객체이기 때문에 앱 전체에서 context를 참조할 수 있기 때문이다.
#### React Native 앱에 Redux 구현하기
+ npm install redux react-redux 명령어를 입력하여 redux 패키지와 react-redux 패키지를 설치해야한다.
## 21.05.28
#### React Navigation을 사용하여 네비게이션 바 만들기
+ 우측의 링크에 들어가면 여러가지 기능들의 예제가 있다. https://reactnavigation.org/
+ 위 링크의 기능들을 사용하려면 하단의 코드를 command창에서 npm이나 yarn으로 설치해야 한다. yarn명령어는 위 링크를 참조
```
npm install @react-navigation/native
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
+ [화면 중앙의 버튼을 클릭할 때마다 stack을 쌓아서 같은 화면을 무한으로 출력하는 코드](NaviApp/stack.js)
+ [디바이스의 하단에 Tab navigation바를 출력하는 코드](NaviApp/tab_navigation.js)
+ [디바이스의 화면에서 좌측부터 우측으로 드래그 했을 때 사이드 메뉴가 출력되는 drawer navigation코드](NaviApp/drawer.js)
+ [하단의 탭바에서 메뉴 클릭 시 해당하는 페이지로 넘어가고 focus된 페이지의 탭바는 tomato색상으로 변경되어 출력되는 코드](expoproject/materialbottomtabnavigator.js)
+ [하단의 탭바에서 메뉴 클릭 시 메뉴별로 백그라운드 색상이 변경되어 출력되는 코드](expoproject/bottomnavigation.js)
#### expo와 react-native cli의 차이
+ react-native cli는 react-native의 개발진들이 만들고 운영하는 개발도구이고 expo는 expo팀에서 react-native개발을 쉽게 하기위해 만든 SDK이다.
+ react-native cli는 업데이트가 빠르게 반영되는 반면 expo는 react-native cli에 비해 업데이트가 늦다.
+ react-native cli에서 개발된 어플을 빌드하려면 Android Studio나 Xcode를 써야하는 번거로움이 있지만 expo는 웹에서 혹은 expo go 어플리케이션을 통해 직접 구현할 수 있다.
+ expo는 카메라, 위치, 알림, 센서 등에 접근할 수 있는 라이브러리가 존재한다.
## 21.05.21
#### Text컴포넌트 vs View컴포넌트
+ flex속성을 제외하고는 View에서 사용되는 대부분의 스타일을 Text에서도 사용할 수 있다.
+ 반대로 Text에서 사용하는 스타일을 View에서는 사용할 수 없다.
#### font family 지정하기
+ css와는 다르게 fontFamily 속성에 여러 개의 폰트를 지정할 수 없다.
+ iOS에서는 monospace 옵션을 사용할 수 없으며, 사용할 경우 오류가 발생한다.
  - "Unrecognized font family 'monospace'"
+  안드로이드에서는 지원하지 않는 폰트가 지정되면 기본 폰트를 사용한다.
+  기본 폰트 외에 다른 폰트를 사용하려면 Platform 컴포넌트를 이용한다.
#### 기타 폰트 속성
+ [ fontSize ] 텍스트의 크기를 조정하며, 기본 크기는  14px이다.
+ [ fontStyle ] normal과 italic 두개의 옵션만 사용이 가능하다.
+ [ fontWeight ] 기본값은 normal또는 400이다.
  - 'normal', 'bold', '100', '200', '300, '400', '500', '600', '700', '800', '900'
#### 텍스트 장식하기
+ 플랫폼별 지원 스타일
+ iOS와 안드로이드: lineHeight, textAlign, textDecorationLine, textShadowColor, textShadowOffset, textShadowRadius
+ 안드로이드: textAlignVertical
+ iOS: letterSpacing, textDecorationColor, textDecorationStyle, writingDirection
#### 네비게이션 개요
+ 앱의 가장 핵심기능 중 하나이다.
+ 앱을 개발하기 전에 네비게이션과 라우팅 계획을 반드시 수립해야 한다.
+ 대표적인 네비게이션으로는 탭(tab-based) 네비게이션, 스택(stack-based) 네비게이션, 드로어(drawer-based) 네비게이션이 있다.
  - [ 탭 네비게이션 ]: 화면의 위나 아래에 탭이 있고, 탭을 터치하면 연결된 페이지로 라우팅 되는 형태이다. SNS 등에서 이 방식을 사용하고 있다.
  - [ 스택 네비게이션]: 기존의 화면위에 다른 화면이 스택 구조로 쌓이는 방법으로, 화면 이동 후에는 스택에 있는 이전 화면으로 되돌아가거나 계속해서 다음 화면으로 이동할 수 있다. 실제 구현은 배열로 한다. 배열에 새 컴포넌트를 추가하면 새 화면이 나타나고, 이전으로 돌아가려면 마지막 화면을 스택에서 꺼내면 된다. 네비게이션 라이브러리는 이렇게 스택에 추가하고, 삭제하는 과정을 대신 처리해 준다.
  - [ 드로어 네비게이션 ]: 화면의 왼쪽 혹은 오른쪽에서 나오는 전형적인 사이드 메뉴이다. 메뉴 항목을 선택하면, 드로어가 닫히고 메뉴 화면으로 이동한다.
+ 리액트 네이티브에서는 네비게이션 라이브러리를 지원하지 않는다.
+ 따라서 서드 파티의 네비게이션 라이브러리를 사용해야 한다.
+ React Navigation은 자바스크립트로 구현 되어있으며, React Native의 개발진이 추천하는 라이브러리이다.
+ 네이티브 방식으로 네비게이션을 구현에 관해 알고싶다면, Wix의 개발자들이 개발하고 관리하는 오픈소스 라이브러리인 React Native Navigation을 참고한다.
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
#### View 컴포넌트에 스타일 적용하기
+ View 컴포넌트는 다른 요소를 감싸고 View 컴포넌트 내에 UI 코드 블록을 만들 수 있다는 점에서 HTML의 div 태그와 유사
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
#### 스타일 구성하기
+ 웹에서는 스타일이 모든 페이지에 적용되지만, React Native에서는 컴포넌트 단위로 적용
+ React Native는 컴포넌트가 중심이고, 따라서 컴포넌트를 재사용 가능하도록 하는 것을 목표로 함
+ React Native 커뮤니티에서는 다음 2가지의 적용 방법을 권장
  - 컴포넌트 내에 스타일시트 선언
  - 컴포넌트 파일과는 별도의 스타일 시트 선언
+ 컴포넌트 내에 스타일 시트를 선언하는 방법의 장점은 하나의 파일에 컴포넌트와 컴포넌트가 사용할 스타일을 완전히 캡슐화 할 수 있다는 것임 이때 스타일은 컴포넌트 이후에 작성
+ 별도의 스타일 파일을 만드는 경우 파일명은 임의로 정할 수 있지만 일반적으로 styles.js로 함    ※확장자가 css가 아니라 js
  이 경우 컴포넌트와 스타일 파일은 같은 경로에 저장
