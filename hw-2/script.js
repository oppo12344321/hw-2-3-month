// Перед началом выполнения запроса убираем класс hidden
document.getElementById('loader').classList.remove('hidden');

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);

    for (let i=0; i<data.length;i++){
        document.querySelector('.information').innerHTML += `
        <div class="information_item "> 
        <h2>Body:${data[i].body}</h2>
        <h2>Id:${data[i].id}</h2>
        <h2>Title:${data[i].title}</h2>
        <h2>User:${data[i].userId} </h2>
        <div>
        `

    }

    
    document.getElementById('loader').classList.add('hidden');
})
.catch((error) => {
    console.error('Error:', error);
    
    document.getElementById('loader').classList.add('hidden');
});
