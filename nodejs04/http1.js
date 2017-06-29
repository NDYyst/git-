/**
 * 查看 index.html
 *
 *
 */
var http = require("http");
var fs = require("fs");
http.createServer(function(req,res){
    console.log(req.url)
    //处理 / 的请求
    //if(req.url=="/"){
    //    //发送index.html页面
    //    fs.readFile("./public/index.html","utf-8",function(err,data){
    //        if(err){
    //            console.log("读取失败");
    //            console.log(err)
    //        }else{
    //            //设置响应头 发送数据
    //            res.writeHead(200,{"content":"text/html;charset=utf8"});
    //            res.write(data);
    //            res.end("")
    //        }
    //    })
    //}else if(req.url=="/index.css"){
    //    //发送index.html页面
    //    fs.readFile("./public/index.css","utf-8",function(err,data){
    //        if(err){
    //            console.log("读取失败");
    //            console.log(err)
    //        }else{
    //            //设置响应头 发送数据
    //            res.writeHead(200,{"content":"text/css;charset=utf8"});
    //            res.write(data);
    //            res.end("")
    //        }
    //    })
    //}else if(req.url=="/index.js"){
    //    //发送index.html页面
    //    fs.readFile("./public/index.js","utf-8",function(err,data){
    //        if(err){
    //            console.log("读取失败");
    //            console.log(err)
    //        }else{
    //            //设置响应头 发送数据
    //            res.writeHead(200,{"content":"text/javascript;charset=utf8"});
    //            res.write(data);
    //            res.end("")
    //        }
    //    })
    //} else if(req.url=="/timg.jpg"){
    //    //发送index.html页面
    //    fs.readFile("./timg.jpg",function(err,data){
    //        if(err){
    //            console.log("读取失败");
    //            console.log(err)
    //        }else{
    //            //设置响应头 发送数据
    //            res.writeHead(200,{"content":"image/jpeg"});
    //            res.write(data);
    //            res.end("")
    //        }
    //    })
    //}
    var url = req.url
    switch (url){
        case "/index.html":
            fs.readFile("./public/index.html","utf-8",function(err,data){
                if(err){
                    console.log("读取失败");
                    console.log(err)
                }else{
                    //设置响应头 发送数据
                    res.writeHead(200,{"content":"text/html;charset=utf8"});
                    res.write(data);
                    res.end("")
                }
            })
            break;
        case "/index.css":
            fs.readFile("./public/index.css","utf-8",function(err,data){
                if(err){
                    console.log("读取失败");
                    console.log(err)
                }else{
                    //设置响应头 发送数据
                    res.writeHead(200,{"content":"text/css;charset=utf8"});
                    res.write(data);
                    res.end("")
                }
            })
            break;
        case "/index.js":
            fs.readFile("./public/index.js","utf-8",function(err,data){
                if(err){
                    console.log("读取失败");
                    console.log(err)
                }else{
                    //设置响应头 发送数据
                    res.writeHead(200,{"content":"text/javascript;charset=utf8"});
                    res.write(data);
                    res.end("")
                }
            })
            break;
        case "/timg.jpg":
            fs.readFile("./timg.jpg",function(err,data){
                if(err){
                    console.log("读取失败");
                    console.log(err)
                }else{
                    //设置响应头 发送数据
                    res.writeHead(200,{"content":"image/jpeg"});
                    res.write(data);
                    res.end("")
                }
            });
            break;
        case "/demo.html":
            fs.readFile("./public/demo.html","utf-8",function(err,data){
                if(err){
                    console.log("读取失败");
                    console.log(err)
                }else{
                    //设置响应头 发送数据
                    res.writeHead(200,{"content":"text/html;charset=utf8"});
                    res.write(data);
                    res.end("")
                }
            })
            break;
        case "/demo2.html":
            fs.readFile("./public/demo2.html","utf-8",function(err,data){
                if(err){
                    console.log("读取失败");
                    console.log(err)
                }else{
                    //设置响应头 发送数据
                    res.writeHead(200,{"content":"text/html;charset=utf8"});
                    res.write(data);
                    res.end("")
                }
            })
            break;
    }
}).listen(2999)