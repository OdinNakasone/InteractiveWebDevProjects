let search = document.getElementById('search');
let limit_field =document.getElementById('limit_field')
let category_select = document.getElementById('category_select')
let joke_list = document.getElementById('joke_list');
joke_list.style.display = "none"


const handleClick = evt => {
    joke_list.style.display = "block"
    
    const limit = limit_field.value;
    const category = category_select.options[category_select.selectedIndex].value;
    let url = `http://localhost:3000/api?limit=${limit}&category=${category}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        renderList(data);
        console.log(data);
    });

}

const renderList = list =>{
    let entry_list = document.getElementById('joke_list');
    entry_list.innerHTML = "";
    for (let entry of list) {
        let entry_html = "<li>" + `<b>Joke:</b> ${entry.joke}, <b>Answer:</b> ${entry.answer}, <b>Category:</b> ${entry.category}` + "</li>";
        entry_list.innerHTML = entry_list.innerHTML + entry_html;
    }
}

search.addEventListener('click', handleClick);
