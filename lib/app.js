// Javascript Codes for Blogging
console.log('If you see the "stable" after the Version Text, This Web App is stable. If not, then try updating your Web Browser and try again.')
console.log('Version 1.0.0(unnstable)')


function blog(){ 
    var username = document.getElementById('blog_input').value
    var Blog_content = document.getElementById('blog1').value;
    document.getElementById('author').innerHTML = username;
    document.getElementById('desc').innerHTML = Blog_content;
    document.getElementById('blog_input').style.display = 'none';
    document.getElementById('blog1').style.display = 'none';
    document.getElementById('helloworld2').style.display = 'block';
    document.getElementById('helloworld').style.display = 'none';
    document.getElementById('verbose').style.marginTop = '200px'
    
}
function addblog(){
    document.getElementById('blog_input').style.display = 'block';
    document.getElementById('blog1').style.display = 'block'
    document.getElementById('helloworld').style.display = 'block'
    document.getElementById('helloworld2').style.display = 'none';
}

function version(){
    window.open('../views/version.html')
}
