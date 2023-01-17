var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function p(){
    if(xhr.readyState == 4 && xhr.status == 200){
        alert('ola mundo');
        console.log(xhr.response);
    }else{
        alert('ERROR 404');
    }
}

xhr.open("GET","https://gorest.co.in/public/v2/users");

xhr.send();