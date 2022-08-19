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
