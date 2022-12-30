## 接口

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
