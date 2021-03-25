const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    const url=req.url;
    if(url=='/'){
    res.write('welcome to home page');
    res.end();
    }
    else if(url=='/about'){
    res.end('welcome to about page');
    }
    else{
    res.end('<h1>page not found</h1> <br> <a href="/">home page</a>');
    }
});
server.listen(5000);