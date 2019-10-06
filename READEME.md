# whirligig_banner 

旋转木马效果-轮播图

原生js，不依赖任何插件

```
npm安装
npm install whirligig_banner -save
或者在Git下载直接引入
```



### whirligig_banner插件说明

```
main_box	=>绑定轮播图盒子元素
li_width	=>子元素显示的宽度，必须设置百分比(默认：显示父盒子的50%)；
show_num	=>显示的数量(默认：显示3个)
isauto		=>设置是否自动轮播(默认不自动)
autoplay	=>设置true或者false(默认：false)
duration	=>切换的时间(默认：2000)
change_prev	=>绑定元素，按钮切换到上一个
change_next	=>绑定元素，按钮切换到下一个
```

```
初始化，必须设置盒子元素，且绑定的元素不可以同类名或者ID，需唯一的。
var banner1 = new whirligig_ban({main_box: '.ban1'})；
```



```
var banner1 = new whirligig_ban({
    main_box: '.ban1',
    li_width: '50%',
    show_num: 3,
    isauto:{
        autoplay: true,
        duration:2000
    },
    change_prev:'.ban_prev1',
    change_next:'.ban_next1'
})
```

```
<div class="whirligig_ban ban1">
    <ul>
        <li><img src="./image/1.jpg" alt=""></li>
        <li><img src="./image/2.jpg" alt=""></li>
        <li><img src="./image/3.jpg" alt=""></li>
        <li><img src="./image/4.jpg" alt=""></li>
        <li><img src="./image/5.jpg" alt=""></li>
        <li><img src="./image/6.jpg" alt=""></li>
        <li><img src="./image/7.jpg" alt=""></li>
    </ul>
</div>
```

####注意：

- whirligig_ban这个类名是必须设置的。
- PC和移动端显示要自行设置响应的样式 ，如果样式重复到了，你那里设置的样式需要加上!important 
- 页面元素必须要大于等于设置的显示数量。盒子高度和图片默认是300px，可自行修改高度

