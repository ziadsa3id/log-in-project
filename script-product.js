var productName = document.getElementById("name")
var productPrice = document.getElementById("price")
var productCategory = document.getElementById("cat")
var productDescription = document.getElementById("des")
var addBtn = document.getElementById("btn")
var arr =[]

if(localStorage.product!= null){
    arr = JSON.parse( localStorage.product)
    showData()
}else{
    arr=[];
}


addBtn.addEventListener("click" , function(){
    var product = {
        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        description: productDescription.value
    }
    arr.push(product)
    showData()
    clearData()
    localStorage.setItem('product', JSON.stringify(arr))
    console.log(product);
})

function showData(){
    var data = ``
    for( var i = 0 ; i < arr.length ; i++){
    data += ` <tr>
    <td><p id='nameProduct'>${i + 1}</p></td>
    <td><p id='nameProduct'>${arr[i].name}</p></td>
    <td><p id='priceProduct'>${arr[i].price}</p></td>
    <td><p id='catProduct'>${arr[i].category}</p></td>
    <td><p id="desProduct">${arr[i].description}</p></td>
    <td><button id="deletProduct" onclick="deleteData(${i})">delete</button></td>
    <td><button id="updateProduct" onclick="updateData(${i})">update</button></td>
    </tr>`
}
document.getElementById("info").innerHTML = data
}
function clearData(){
    productName.value=``
    productPrice.value=``
    productCategory.value=``
    productDescription.value=``
}


function deleteData(index){
    arr.splice(index,1)
    showData()
    localStorage.setItem('product', JSON.stringify(arr))
    
}

//////////////////////UPDATE 
var x
var update = document.getElementById("update-data")
function updateData(index){
    productName.value =  arr[index].name
    productPrice.value = arr[index].price;
    productCategory.value = arr[index].category;
    productDescription.value = arr[index].description;
    showData()
    addBtn.style.display= "none"
    update.style.display= "block"
    x = index
}
update.addEventListener("click" , function(){
    // var product = {
    //     name: productName.value,
    //     price: productPrice.value,
    //     category: productCategory.value,
    //     description: productDescription.value
    // }
    // arr.push(product)
    // arr[x]=product
    // deleteData()
    // showData()
    // clearData()
    // localStorage.setItem('product', JSON.stringify(arr))
    // console.log(product);
    // addBtn.style.display= "block"
    // update.style.display= "none"
    arr[x].name = productName.value
    arr[x].price = productPrice.value
    arr[x].category= productCategory.value
    arr[x].description= productDescription.value
    showData()
    addBtn.style.display= "block"
    update.style.display= "none"
    clearData()
})

var searchBar = document.getElementById("searchBar")
searchBar.addEventListener("input" , function(){
    var data = ``
    var inputSearch = searchBar.value
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i].name[0].toLowerCase().includes(inputSearch.toLowerCase()) == true ){
            data += ` <tr>
    <td><p id='nameProduct'>${i}</p></td>
    <td><p id='nameProduct'>${arr[i].name}</p></td>
    <td><p id='priceProduct'>${arr[i].price}</p></td>
    <td><p id='catProduct'>${arr[i].category}</p></td>
    <td><p id="desProduct">${arr[i].description}</p></td>
    <td><button id="deletProduct" onclick="deleteData(${i})">delete</button></td>
    <td><button id="updateProduct" onclick="updateData(${i})">update</button></td>
    </tr>`
        }else{
            console.log("sorry");
        }
        document.getElementById("info").innerHTML = data

    }
})
