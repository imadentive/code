## 语法

#### 索引访问类型

##### 索引类型查询

```typescript
keyof Type
```

```typescript
interface Point {
  x: number;
  y: number;
}

type T = keyof Point; // 'x' | 'y'
```

##### 索引访问类型

```typescript
T[K];
```

##### 索引类型的应用

> K extends keyof T

```typescript
 function getProperty<T, K extends keyof T>(
   obj: T, key: K
 ): T[K] {
     return obj[key];
 }

 interface Circle {
     kind: 'circle';
     radius: number;
 }

 function f(circle: Circle) {
    // 正确，能够推断出 radius 的类型为 'circle' 类型
     const kind = getProperty(circle, 'kind');

    // 正确，能够推断出 radius 的类型为 number 类型
     const radius = getProperty(circle, 'radius');

    // 错误
     const unknown = getProperty(circle, 'unknown');
     //                                   ~~~~~~~~~
     // 编译错误：'unknown'类型不能赋值给'kind' |'radius'
 }
```

#### 短路求值

```typescript
obj?.age;
```

二元逻辑运算符“&&”和“||”也具有短路求值的特性

#### 空值合并运算符

```typescript
a ?? b;
```

## 接口

### 接口声明

▪ 属性签名
▪ 调用签名
▪ 构造签名
▪ 方法签名
▪ 索引签名

#### 属性签名

> 语法：PropertyName: Type

```typescript
interface Point {
  x: number;
  y: number;
}
```

#### 调用签名

> 语法：(ParameterList): Type

```typescript
interface ErrorConstructor {
  (message?: string): Error;
}
```

#### 构造签名

> 语法：new (ParameterList): Type

```typescript
interface ErrorConstructor {
  new (message?: string): Error;
}
```

#### 方法签名

方法签名是声明函数类型的属性成员的简写。

> 语法：PropertyName(ParameterList): Type

```typescript
interface Document {
  getElementById(elementId: string): HTMLElement | null;
}
```

下面我们通过一个真实的例子来演示这三种可以互换的接口定义方式：

```typescript
interface A {
  f(x: boolean): string; // 方法签名
}

interface B {
  f: { (x: boolean): string }; // 属性签名和对象类型字面量
}

interface C {
  f: (x: boolean) => string; // 属性签名和函数类型字面量
}
```

#### 属性签名

> 语法：PropertyName: Type;

```typescript
interface Point {
  x: number;
  y: number;
}
```

#### 属性签名

> 语法：PropertyName: Type

```typescript
interface Point {
  x: number;
  y: number;
}
```

### 接口的继承

```typescript
interface Shape {
  name: string;
}

interface Circle extends Shape {
  radius: number;
}
```

## 泛型

### 泛型函数

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

#### 泛型约束

```typescript
interface Point {
  x: number;
  y: number;
}

function identity<T extends Point>(x: T): T {
  return x;
}
```

### 泛型接口

```typescript
interface MyArray<T> extends Array<T> {
  first: T | undefined;
  last: T | undefined;
}
```

### 泛型类型别名

```typescript

```

### 泛型类

```typescript

```

## 参考资料

https://github.com/tstutorial/code
