const CUSTOMER_SITES = {
    tyyszy:{
        api:'https://tyyszyapi.com/api.php/provide/vod',
        name: '天涯影视'
    },
    bfzy:{
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源'
    },
    dyttzy:{
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂'
    },
    bfzy2:{
        api: 'http://by.bfzyapi.com/api.php/provide/vod',
        name: '暴风备用'
    },
    maotaizy:{
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源'
    },
    dbzy:{
        api: 'https: //caiji.dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源'
    },
    iqyzy:{
        api: 'https://iqiyizyapi.com/api.php/provide/vod',
        name: '爱奇艺资源'
    },
    bdzy:{
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度资源'
    },
    qvod:{
        api: 'https://gayapi.com/api.php/provide/vod',
        name: '快播资源'
    },
    ytzy:{
        api: 'https://apiyutu.com/api.php/provide/vod',
        name: '玉兔资源'
    },
    hsckzy:{
        api: 'https://hsckzy.vip/api.php/provide/vod',
        name: '红手指'
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
