### 申请添加SRC或者漏洞平台
1. Fork 该项目
2. 修改assets/js/data目录下的srcs.js或者vuldb.js数据文件,在尾部添加dict,格式如下
```
{
    "title": "腾讯安全应急响应中心（TSRC, Tencent Security Response Center）", //必填，中文标题 (缩写，英文全称)
    "logo": "tsrc.png", //必填，logo图片文件名，最佳尺寸104*104px
    "qr_img": "tsrc.jpg", // 二维码图片名称，最佳尺寸258*258px
    "anchor": "tsrc", //必填，平台英文缩写，注意小写
    "home_title": "https://security.tencent.com", //平台主页地址，需要包含https/http，要求平台地址或者联系邮箱二者必填之一
    "home_link": "https://security.tencent.com", //同上
    "weibo_title": "@腾讯安全应急响应中心", //微博名称，格式@微博名称
    "weibo_link": "http://weibo.com/tsrcteam", //微博地址,http://weibo.com/ 开头
    "twitter_title": "@tsrc_team", //Twitter名称
    "twitter_link": "https://twitter.com/tsrc_team", //Twitter地址
    "weixin_title": "腾讯安全应急响应中心", //微信公众号名称
    "weixin_link": "http://weixin.sogou.com/weixin?type=1&query=%E8%85%BE%E8%AE%AF%E5%AE%89%E5%85%A8%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94%E4%B8%AD%E5%BF%83", //微信公众号地址，统一为搜狗微信搜索地址
    "envelope_title": "security@tencent.com", //邮箱
    "envelope_link": "mailto:security@tencent.com", //mailto:邮箱
  },
```
3. 替换填写相关内容，注意必填项
4. 将上面内容中涉及的图片资源根据上面命名放到对应资源目录下
  * `assets/i/srcs` 添加SRC Logo放置该目录下，微信公众号二维码放到该目录子目录`weixin`下
  * `assets/i/vuldbs` 添加漏洞平台 Logo放置该目录下，微信公众号二维码放到该目录子目录`weixin`下
5. 本地访问测试相关图片显示正常，同时搜索中文标题和英文缩写正常
6. 提交MR申请合并
7. 审核通过合并成功即添加成功

### 问题反馈
请直接提ISSUE

### 联系方式
E-mail: f00y1n9@gmail.com
