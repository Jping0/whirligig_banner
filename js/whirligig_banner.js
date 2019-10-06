;(function(window,document){
    function whirligig_ban(config){
        // 默认设置
        var default_set ={
            main_box: '.whirligig_ban',
            li_width: '50%',
            show_num: 3,
            isauto:{
                autoplay: false,
                duration: 2000
            },
            change_prev:'',
            change_next:''
        }
        var main_el = '';
        var elements = '';
        var select_el = default_set.main_box +' li';
        var change_index = 0;
       
        if(change_index<0){
            change_index = elements.length;
        }else if(change_index>elements.length){
            change_index = 0;
        }
        if(config.main_box){
            default_set.main_box = config.main_box;
            select_el = config.main_box +' li';
            main_el = document.querySelectorAll(config.main_box)[0];
            elements = document.querySelectorAll(select_el);
        }
        if(config.li_width){
            var li_widthNum = config.li_width.split('%');
            default_set.li_width = li_widthNum[0];
        }else{
            var li_widthNum = default_set.li_width.split('%');
            default_set.li_width = li_widthNum[0];
        }
        if(config.show_num){
            if(config.show_num%2 == 0){
                default_set.show_num = config.show_num-1;
            }
            default_set.show_num = config.show_num;
        }
        if(config.isauto){
            default_set.isauto.autoplay = config.isauto.autoplay;
            default_set.isauto.duration = config.isauto.duration;
            var auto_ban = setInterval(() => {
                if(change_index>=elements.length-1){
                    change_index = 0;
                }else{
                    change_index++;
                }
                setban(elements,default_set,elements.length,change_index);
            }, config.isauto.duration);
            main_el.addEventListener('mouseenter',function(){
                clearInterval(auto_ban);
            })
            main_el.addEventListener('mouseleave',function(){
                auto_ban = setInterval(() => {
                    if(change_index>=elements.length-1){
                        change_index = 0;
                    }else{
                        change_index++;
                    }
                    setban(elements,default_set,elements.length,change_index);
                }, default_set.isauto.duration);
            })
        }
        if(config.change_prev){
            default_set.change_prev = config.change_prev;
            var prev_el = document.querySelectorAll(default_set.change_prev);
            prev_el[0].addEventListener('click',function(){
                if(change_index<=0){
                    change_index = elements.length-1;
                }else{
                    change_index--;
                }
                setban(elements,default_set,elements.length,change_index);
            })
        }
        if(config.change_next){
            default_set.change_next = config.change_next;
            var next_el = document.querySelectorAll(default_set.change_next);
            next_el[0].addEventListener('click',function(){
                if(change_index>=elements.length-1){
                    change_index = 0;
                }else{
                    change_index++;
                }
                setban(elements,default_set,elements.length,change_index);
            })
        }
        elements.forEach((element,i) => {
            // 给所有元素添加点击事件
            element.onclick = function(){
                setban(elements,default_set,elements.length,i);
                change_index = i;
            }
            element.setAttribute('ban-index',i);
        });
        setban(elements,default_set,elements.length,0);//初始化
    }
    function setban(elements,default_set,ban_length,cur_num){
        elements.forEach((element,index) => {
            elements[index].style.cssText = 'width:'+default_set.li_width+'%;';
        });
        change_index = cur_num;
        elements[cur_num].style.cssText = 'transform: translateX(-50%) scale(1);z-index:101;width:'+default_set.li_width+'%;opacity: 1;';
        var Surplus = (100-default_set.li_width)/2/((default_set.show_num-1)/2);
        var ceng_num = Math.ceil(default_set.show_num/2);
        var scales = 0.2;
        var z_indexs = 100;
        for(var li_index=1;li_index<ceng_num;li_index++){
            var surplus = Surplus*li_index;
            if(cur_num+1-li_index<=0){
                setStyle(elements,ban_length-1-Math.abs(cur_num+1-li_index),1-scales*li_index,z_indexs-li_index,default_set.li_width,-surplus,(cur_num+li_index),surplus);
            }else if((cur_num+1-li_index>0)&&(cur_num+li_index<=ban_length-1)){
                setStyle(elements,cur_num-li_index,1-scales*li_index,z_indexs-li_index,default_set.li_width,-surplus,cur_num+li_index,surplus);
            }else if((cur_num+li_index>ban_length-1)&&cur_num+li_index-(ban_length-1)+li_index>ceng_num){
                setStyle(elements,cur_num-li_index,1-scales*li_index,z_indexs-li_index,default_set.li_width,-surplus,cur_num+1+li_index-ban_length-1,surplus);
            }else{
                setStyle(elements,cur_num-li_index,1-scales*li_index,z_indexs-li_index,default_set.li_width,-surplus,cur_num+li_index-ban_length,surplus);
            }
        }
    }
    function setStyle(elements,el_index_prev,el_scale,el_zindex,el_width,el_surplus_prev,el_index_next,el_surplus_next){
        elements[el_index_prev].style.cssText = 'transform: translateX(-50%) scale('+el_scale+');z-index:'+el_zindex+';width:'+el_width+'%;margin-left:'+el_surplus_prev+'%;opacity: 1;';
        elements[el_index_next].style.cssText = 'transform: translateX(-50%) scale('+el_scale+');z-index:'+el_zindex+';width:'+el_width+'%;margin-left:'+el_surplus_next+'%;opacity: 1;';
    }
    window.whirligig_ban = whirligig_ban;
    var style_text = '.whirligig_ban * {margin: 0;padding: 0;box-sizing:border-box;}.whirligig_ban{height: 300px;}.whirligig_ban ul{position: relative;margin-bottom: 0px;}.whirligig_ban li{position: absolute;top: 0;left: 50%;transform: translateX(-50%) scale(0);transition: all 0.5s;z-index: -10;list-style: none;opacity: 0;}.whirligig_ban img{width: 100%;display: block;height: 300px;object-fit: cover;}@media(max-width:768px){.whirligig_ban,.whirligig_ban img{height: 150px;}}'
    var H = document.getElementsByTagName('head')[0];
    var styles = document.createElement('style');
    styles.innerHTML = style_text;
    H.appendChild(styles);
})(window,document)