/*把code写到#code和style标签里*/
function writeCss(prefix, code, fn){
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = prefix +  code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 70)
}
function writeMarkdown(markdown, fn){
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 35)
}

var css1 = `/* 
 * 您好，我是Arley
 * 只用文字做介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{
  transition: all 1s;
}
html{
  background-image: url(images/bg.jpg);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.7;
  z-index: -1;
}
#code{
  border: 1px solid #fff0;
  padding: 16px;
}

/* 我需要一点代码高亮 */
.token.selector{ color: #690; }
.token.property{ color: #905; }

/* 加一个呼吸效果 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* 现在正式开始 */
/* 我需要一张白纸 */
#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;
}
#paper > .content {
 display: block;
}

/* 于是我就可以在白纸上写字了，请看右边 */
`
var css2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`
var md = `
# 自我介绍

欢迎来到我的小站呀，很高兴遇见你！ヾ(≧O≦)〃嗷~

### **🏠 关于本站**

这里是我的个人博客，是一个学习实用类小站，记录所得，分享所获.

### 👨‍ **博主是谁**

Arley,技术宅大叔

###  ☎ **联系我呀**

Telegram:https://t.me/Arley_cn<br>邮箱 ：arley@arley.cn

### ❈ **关于版权**

本站除注明原创外，其他内容均来源于网络收集，如有侵权，请告知站长，将第一时间删除侵权内容！
`
let css3 = `
/*
 * 谢谢观看!
 */
`
writeCss('', css1, ()=>{ // writeCss call the function
  createPaper(() => {
    writeMarkdown(md, ()=> {
      writeCss(css1, css2, ()=>{
        convertMarkdownToHtml(()=>{
          writeCss(css1 + css2, css3, ()=> {
            console.log('完成')
          })
        })
      })
    })
  })
})

function createPaper(fn){
  var paper = document.createElement('div') 
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn && fn.call()
}

function convertMarkdownToHtml(fn){
  var div = document.createElement('div')  
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}

