# react-native  

React Native使你能够在Javascript和React的基础上获得完全一致的开发体验，构建世界一流的原生APP。

React Native着力于提高多平台开发的开发效率 —— 仅需学习一次，编写任何平台。(Learn once, write anywhere)

Facebook已经在多项产品中使用了React Native，并且将持续地投入建设React Native。

## 运行方法

### windows + android 4.x 或 mac + android 4.x
```
git clone https://github.com/mah93/react-native.git
cd react-native
npm install
react-native run-android

# 需要确保手机和电脑在同一个局域网
# 手机进入 app,晃动手机选择 dev setting -> Debug server host & port for device 设置本机IP+8081
# 比如本机IP是 192.168.2.233 那么就需要填写 192.168.2.233:8081
```

### windows + android 5.x(国产手机)
```
git clone https://github.com/mah93/react-native.git
cd react-native
npm install
run_android.bat

# 需要确保手机和电脑在同一个局域网
```

### mac + android 5.x(国产手机)
```
git clone https://github.com/mah93/react-native.git
cd react-native
npm install
./run_android

# 需要确保手机和电脑在同一个局域网
```

### mac + iphone虚拟机
```
git clone https://github.com/mah93/react-native.git
cd react-native
npm install
react-native run-ios
```

## 项目说明

* ### react-native-segment
  segment分段选择器适配ios和和android
  ```
    <SegmentControl 
      style = {{width:full_width,height:40,backgroundColor:'#fff',flexDirection:'row'}}
      titleArray = {titleList}
      exchange = {(msg)=>this.exchange(msg)}
    />   
  ```

* ### shopping
  用mobx编写的购物车，了解mobx工作原理。
  
  
* ### flatlist
  学习FlatList写法，比较其与ListView的性能


