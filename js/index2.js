let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let totale = document.getElementById('totale');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');


let mod = 'create';
let tmp;

function gettotale(){
    if(price.value != ''){
    let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
    totale.innerHTML=result;
    totale.style.background='green';
    }else{
        totale.innerHTML='';
        totale.style.background='rgb(104, 8, 8)';
    }

}

let datapro=[];

if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product);
}else{
    let datapro = [];

}



submit.onclick = function(){
    let newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        totale:totale.innerHTML,
        count:count.value,
        category:category.value,
    }
    if(title.value != '' &&price.value != ''&&category.value != ''&&newpro.count < 100){
            if(mod === 'create'){
    if (newpro.count > 1){
        for(let i = 0;i < newpro.count;i++){
        datapro.push(newpro)
        }
        }else{
            datapro.push(newpro)

        }
    }else{
        datapro[  tmp  ] = newpro;
        mod = 'create';
        submit.innerHTML='create';
        count.style.display='block';
    }
    cleardata()
    }



    localStorage.setItem('product', JSON.stringify(datapro));
    showdata()
    mod = 'create';

}


function cleardata(){
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    totale.innerHTML = '';
    count.value = '';
    category.value = '';

}


function showdata(){
    gettotale()
    let table ='';
    for(let i = 0;i < datapro.length;i++){
        table += `
        <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].totale}</td>
        <td>${datapro[i].category}</td>
        <td><button onclick=" update(${i})" id="update" >update</button></td>
        <td><button onclick=" deletedata(${i})" id="delete">delete</button></td>
    </tr>
        ` 
    }
    document.getElementById('tbody').innerHTML = table;
    console.log(table)
    let deleteall = document.getElementById('deleteAll');
    if(datapro.length > 0 ){
        deleteall.innerHTML = `
        <button onclick="deleteAll()">delete all (${datapro.length})</button>

        `
    }else{
        deleteall.innerHTML = '';
    }
}
showdata()

function deletedata(i){
    datapro.splice(i,1);
    localStorage.product = JSON.stringify(datapro)
    showdata()
    console.log(i)
}
function deleteAll(){
    localStorage.clear()
    datapro.splice(0)
    showdata()
}

function update(i){
    title.value = datapro[i].title;
    price.value = datapro[i].price;
    taxes.value = datapro[i].taxes;
    ads.value = datapro[i].ads;
    discount.value = datapro[i].discount;
    gettotale(  )
    count.style.display='none'; 
    category.value = datapro[i].category;
    submit.innerHTML='update';
    mod = 'update';
    tmp = i;
    scroll({
        top:0,
        behavior:'smooth'
    })    
}

let searchmod = 'title';

function searchdata(id){
    let search = document.getElementById('search')
    if(id == 'searchtitle'){
        searchmod = 'title';
        search.placeholder = 'search by title';
    }else{
        searchmod = 'category';
        search.placeholder = 'search by category';

    }
    search.focus()
    search.value = '';
    showdata()
    console.log(searchmod)
}

function searchdeta(value){
    let table = '';
    if(searchmod == 'title'){
        for(let i = 0;i < datapro.length;i++){
            if(datapro[i].title.includes(value)){

                    table += `
                    <tr>
                    <td>${i}</td>
                    <td>${datapro[i].title}</td>
                    <td>${datapro[i].price}</td>
                    <td>${datapro[i].taxes}</td>
                    <td>${datapro[i].ads}</td>
                    <td>${datapro[i].discount}</td>
                    <td>${datapro[i].totale}</td>
                    <td>${datapro[i].category}</td>
                    <td><button onclick=" update(${i})" id="update" >update</button></td>
                    <td><button onclick=" deletedata(${i})" id="delete">delete</button></td>
                </tr>
                    ` 
            }
        }
    }else{
        for(let i = 0;i < datapro.length;i++){
            if(datapro[i].category.includes(value   )){

                    table += `
                    <tr>
                    <td>${i}</td>
                    <td>${datapro[i].title}</td>
                    <td>${datapro[i].price}</td>
                    <td>${datapro[i].taxes}</td>
                    <td>${datapro[i].ads}</td>
                    <td>${datapro[i].discount}</td>
                    <td>${datapro[i].totale}</td>
                    <td>${datapro[i].category}</td>
                    <td><button onclick=" update(${i})" id="update" >update</button></td>
                    <td><button onclick=" deletedata(${i})" id="delete">delete</button></td>
                </tr>
                    ` 
            }
        }
    }
    document.getElementById('tbody').innerHTML = table;

}