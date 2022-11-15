# toyproject-website

E-Mail: b635032_@daum.net

HTML, CSS, Javascript 연습을 위한 웹 사이트 제작 토이 프로젝트

책 'Do it HTML+CSS+자바스크립트 웹 표준 정석' 최종 프로젝트 예제를 클론 코딩한다.

웹 사이트 개발 과정을 하나씩 분석하도록 한다. 아래의 이미지와 설명만을 참조해서 웹 사이트를 다시 만들 수 있어야 한다.


![doitresult](https://user-images.githubusercontent.com/62477958/201807695-df506f38-167e-40ed-970f-173103711754.png)


## 1. 웹 사이트 기획

'제주도 여행 정보 및 예약'을 위한 웹 사이트를 개발하는 시나리오이다.

웹 사이트의 \<body>는 header, body, footer 세 부분으로 나뉜다. 하나씩 알아보자.

### 1.1 \<header>

\<header>에는 logo 요소과 navigation(메뉴바) div로 구성된다.

### 1.2 body

body 영역에는 slideShow, contents 2가지 div가 있다.

slideShow는 메인화면에 나타날 이미지를 슬라이드 쇼 형태로 만들어진다.

contents는 tabMenu(notice(공지사항), gallery(갤러리)), links div가 있다.

### 1.3 footer

footer 영역에는 bottomMenu, sns, company 3가지 div가 있다.

각 div에 대해서 하나씩 분석하면서 웹 사이트를 개발하도록 하자.

우선, 웹 사이트를 기획한대로 \<div> 태그와 id를 통해 레이아웃을 구성하도록 한다.

원하는 레이아웃을 만들기 위해 CSS의 속성을 이용하도록 한다.

**+ 사용된 CSS 속성: float, clear**

***

## 2. Logo 제작

### 2.1 HTML 요소 삽입

Logo 영역에는 웹 사이트를 나타내는 제목이 필요하고, 또 제목을 클릭하면 다시 웹 사이트로 redirection을 위한 링크가 필요하다.

그러므로, \<h1>, \<a> 태그를 추가하도록 하자.

### 2.2 스타일 설정

특별하게 사용되는 CSS 속성은 아래와 같다.

+ text-decoration: none; -> \<a> 태그가 기본적으로 밑줄로 나오는 것을 제거.
+ line-height: (height와 동일한 px) -> 글씨를 Logo div의 가운데에 위치.
+ float, padding: Logo div 내에 글씨를 적절히 위치.

***

## 3. 네비게이션 제작

네비게이션(메뉴)를 제작하기 위해서는 HTML 리스트를 활용한다.

### 3.1 HTML 요소 삽입

최상단 메뉴바를 \<ul>, \<li> 태그를 통해 생성한다. 만약 최상단 메뉴바에 하위 메뉴가 있다면 \<ul>, \<li>가 중첩되도록 만든다.

반대로 메뉴바에 하위 메뉴가 없다면, 해당 링크로 갈 수 있도록 \<a> 태그를 사용한다.

### 3.2 스타일 설정

특별하게 사용되는 CSS 속성은 아래와 같다

+ list-style: none; -> \<ul>의 불릿 기호를 없애기 위함.
+ display: block; float: left; -> li에 block과 float를 설정해 좌로 배치함.
+ hover: (color); -> 요소에 마우스를 갖다 놓을 때 변화가 일어나도록 함.
**+ position: (relative | absolute); -> 서브 메뉴의 위치를 조정하기 위해 사용됨. 메인 메뉴를 기준으로 잡기 위해 relative 설정 필요함.
+ left: 서브 메뉴의 위치를 조정하기 위해 사용함.

***

## 4. 이미지 슬라이드 쇼 제작

여러 개의 사진 요소를 삽입한 후, 화살표를 클릭하면 다음 이미지 슬라이드로 넘어가도록 구현한다.

다음 이미지 슬라이드를 넘어가기 위해 클릭이 필요하고, 현재 이미지가 무엇인지 계속 추적해야 한다. 여기서 자바스크립트가 필요하다.

### 4.1 HTML 요소 삽입

사진들과 클릭을 위한 버튼을 삽입한다. 그러므로, \<img src="...">와 \<button> 태그를 사용한다.

슬라이드 사진 위치를 설정하기 위해 postion 속성을 지정해야 하므로, div가 중첩되는 구조로 만들자.

### 4.2 스타일 설정

특별히 필요한 CSS 속성은 아래와 같다.

+ position: (relative | absolute); -> 이미지와 버튼 위치 설정.
+ left: 0; -> 버튼을 왼쪽에 붙이기 위함
+ right: 0; -> 버튼을 오른쪽으로 붙이기 위함.

### 4.3 javascript 설정

코드와 주석을 통해 알아보자. 구체적인 코드는 생략한다.

```js
var slides = document.querySelectorAll("#slides > img"); /* 모든 이미지를 리스트로 가져옴 */
var prev = document.getElementById("prev"); /* 이전 버튼 가져옴 */
var next = document.getElementById("next"); /* 다음 버튼 가져옴 */

slides.forEach((slide)->{
  slide.style.display = "none";
});

/*
  이후, currentIdx만 display를 block으로 처리하고, prev와 next onClick 기능을 완성한다.
*/
```
***

## 5. 탭 메뉴 제작

탭을 클릭할 때 마다 다른 컨텐츠가 나오도록 한다. 자바스크립트를 이용할 수 있지만 HTML의 radio 기능을 이용해 자바스크립트 없이 구현할 수도 있다.

### 5.1 HTML 요소 삽입

탭 메뉴에는 공지사항, 앨범 두가지만 있다고 하자.

두 탭을 번갈아가며 열기 위한 radio 타입의 \<input> 2개, 그리고 탭의 내용을 담은 \<div> 2개를 만들자.



