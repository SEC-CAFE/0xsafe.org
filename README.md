### 说明
在线导航已合并迁移至[https://sec.cafe/links](https://sec.cafe/links)

但不影响本项目代码运行，如有需要，可单独fork本项目部署，示例可见 [0xafe.netlify.app](https://0xafe.netlify.app/)，请注明`powered by SEC.CAFE`


### 申请添加SRC或者漏洞平台
1. Fork 该项目
2. 修改assets/js/data目录下的srcs.js或者vuldb.js数据文件,在尾部添加dict,格式如下
```
{
    "title": "腾讯安全应急响应中心（TSRC, Tencent Security Response Center）", //必填，中文标题 (缩写，英文全称)
    "logo": "tsrc.png", //logo图片文件名，最佳尺寸104*104px, 如空则默认取anchor首字母
    "qr_img": "tsrc.jpg", // 二维码图片名称，最佳尺寸258*258px
    "anchor": "tsrc", //必填，平台英文缩写，注意小写
    "home": "https://security.tencent.com", //平台主页地址，需要包含https/http，要求平台地址或者联系邮箱二者必填之一
    "weibo": "@腾讯安全应急响应中心", //微博名称，格式@微博名称
    "weibo_link": "http://weibo.com/tsrcteam", //微博地址,http://weibo.com/ 开头
    "twitter": "@tsrc_team", //Twitter名称
    "weixin": "腾讯安全应急响应中心", //微信公众号名称
    "mail": "security@tencent.com", //邮箱
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
