let express= require('express')
let app=express()
let bodyParser= require('body-parser');


let jsonParser = bodyParser.json();

let lencodeParder = bodyParser.urlencoded({extended:false});

app.use(express.static(__dirname));

// 跨域
app.all('*',function(request,response,net){
    response.header('Access-Control-Allow-Origin','*');
    next();
})
// 获取消息列表

