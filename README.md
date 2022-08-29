# 타입스크립트

## 1. Types

---

### Primitive Type (원시타입)

1. boolean
2. number
3. string
4. symbol
5. null
6. undefined

### Reference Type (참조타입)

7. object
8. array
9. tuple

### ETC (기타)

10. any
11. unknown
12. never
13. void

## 2. Type System

---

### nolmplicitAny 옵션

타입스크립트가 추론을 any라고 판단하게 되면
<br />컴파일 에러 발생 후 명시적으로 지정하도록 유도

### strictNullChecks 옵션

모든 타입에 포함되어 있는 'null', 'undefined' 를 제거

### nolmplicitReturns 옵션

함수 내에서 모든 코드가 값을 리턴하지 않으면 컴파일에러 발생

### strictFunctionTypes 옵션

함수를 할당할 시에 함수의 매개변수 타입이 같거나
<br /> 슈퍼타입인 경우가 아닌경우, 에러를통해 경고한다

---

### Structural Type Stystem

구조가 같으면 같은타입

### Nominal Type System

구조가 같아도 이름이 다르면, 다른 타입

---

### SubType

1. 같거나 서브 타입인경우, 할당 가능 => 공변
2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당 가능 => 반병

### Type Alias (타입 별칭)

기타 직접 작성해야하는 타입을 다른 이름을 지정할 수 있다
만들어진 타입의 refer로 사용하는 것이지 타입을 만드는것은 아님

## 3. Compiler

---

### compileOnSave (true / false)

파일 변경 후 저장하면 바로 컴파일을 해준다 (true일때)

### extends

클라이언트 타입스크립트와 서버사이드 타입스크립트가 있을 때, 설정이 비슷하다면 어떤 파일을 만든 후, 상속을 받아서 작은 부분만 바꿔서 쓰는 경우 사용 가능하다.

### files, include, exclude

셋다 설정이 없으면 , 전부다 컴파일

1. files
   <br />
   상대 혹은 절대 경로의 리스트 배열.
   파일별 부분 컴파일이 된다.
   exclude 보다 쎕니다. (exclude가 해놓아도 files 에 있으면 컴파일 실행된다는 뜻)
   특정 폴더를 exclude가 있어도 컴파일 된다.
   include, exclude

2. include
   <br />
   glob 패턴 (마치 .gitignore)
   exclude 보다 약하다.
   같은걸 사용하면 , .ts / .tsx / .d.ts 만 include (allowJS)

3. exclude
   <br />
   설정 안하면 4가지 (node_modules, bower_components, - jspm_packages, 'outDir')를 default 로 제외한다 .
   'outDir' 은 항상 제외합니다 . (include 에 있어도 )

### @types

TypeScript 2.0 부터 사용 가능해진 내장 type definition 시스템

아무 설정을 안하면 ?

node_modules/@types 라는 모든 경로를 찾아서 사용

typeRoots 를 사용하면 ?

배열 안에 들어있는 경로들 아래서만 가져옵니다 .

types 를 사용하면 ?

패키지 이름입니다.
<br />
배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아옵니다 .
<br />
[] 빈 배열을 넣는다는건 이 시스템을 이용하지 않겠다는 것입니다 .

typeRoots 와 types 를 같이 사용하지 않습니다 .

### target

빌드의 결과물을 어떤 버전으로 할 것이냐
<br />
지정을 안하면 es3

### lib

기본 type definition 라이브러리를 어떤 것을 사용할 것이냐
<br />
lib 를 지정하지 않을 때

target 이 ‘es3’ 이고, 디폴트로 lib.d.ts 를 사용합니다.
<br />
target 이 ‘es5’ 이면 , 디폴트로 dom, es5, scripthost 를 사용합니다 .
<br />
target 이 ‘es6’ 이면, 디폴트로 dom, es6, dom.iterable, scripthost 를 사용합니다.
<br />
es5 이후에는 문법별 쪼개서도 설정 가능

​lib 를 지정하면 그 lib 배열로만 라이브러리를 사용하니다.
<br />
​ 빈 [] => ‘no definition found ~~’

### outDir, outFile

파일을 다 모아서 하나의 컴파일된 하나의 파일로 모으고 싶을 때 outFile을 사용

소스디렉토리에 그대로 똑같이 구조를 컴파일된 상태로 옮길 때 outDir 를 사용
