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
