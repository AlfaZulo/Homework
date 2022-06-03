let fetchBtn = document.getElementById('fetchbtn');
fetchBtn.addEventListener('click', getData);

function getData(){
    function getData(){
        let xhr = new XMLHttpRequest();
    

    xhr.open('GET', 'data.txt', true);
    xhr.send();

    // xhr.onprogress = function(){
    //     document.getElementById('data').textContent = 'Loading';
    // }
    xhr.onload = function(){
        document.getElementById('data').textContent = xhr.responseText;
    }
}
}