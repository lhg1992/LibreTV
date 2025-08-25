const CUSTOMER_SITES = {
    baofeng1:{
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源'
    },
    baofeng2:{
        api: 'http://by.bfzyapi.com/api.php/provide/vod',
        name: '暴风备用'
    },
    maotai:{
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源'
    },
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
