# pull代码请先star~~~


# wxapp-flower
花城小程序

- 注意`wx.navigateTo`和`wx.switchTab`的区别
- 在做分类页时，用到了`scroll-view`，但是随着页面内容的增多，滚动页面时，左边导航栏和右边分类内容都会滚动，这时设置整个页面和最外层`view`的样式为：
```css
page,.container{
    height:100vh;
}
```
即设置整个页面为一屏的高度。
- 内容超过一屏时，`scroll-view`产生滚动条，嗯，这严重影响美观，通过以下样式隐藏：
```css
::-webkit-scrollbar{  
  height: 0;
  width: 0;
  color: transparent;
}
```
- `scroll-view`的值应为它的子元素的`id`值，但是这个id**不能以数字开头**，否则会报错：`id属性格式错误，如不能包含数字`（还是要仔细看看开发手册::>_<::）

  # 项目展示
![1e668887accadebd2e6856567ae8b7f](https://github.com/heweijiqn/flowerShop/assets/95403358/10482a4d-0f66-4b6b-93ab-84c94e61cf13)  \
![9219c2d4e192a9a95358cf95d9df09c](https://github.com/heweijiqn/flowerShop/assets/95403358/9f1538a4-3732-4b22-b7cb-182d90c67542) \
![ec0c2f0c1f6d2d016d297811a3b688b](https://github.com/heweijiqn/flowerShop/assets/95403358/f10cad2a-9b31-418d-b678-47440317d821) \
![20ffc14ba15614ce3cc59def3a2c5e6](https://github.com/heweijiqn/flowerShop/assets/95403358/711a62a8-1a41-4f5d-a776-400c9ac50702) \
![93cf8801644a39857280059c454abd3](https://github.com/heweijiqn/flowerShop/assets/95403358/008f5686-97bb-4456-9f95-66b0f09737d7) \
![250dd708b8dac984099001028cd1179](https://github.com/heweijiqn/flowerShop/assets/95403358/8a3fd25d-3637-40a6-8012-f45f744667e5) \
![0a5ec3521ecb37126ac00d3c16a3c14](https://github.com/heweijiqn/flowerShop/assets/95403358/42ef6c60-c51e-4112-9b6f-7cc7fd22451e)
