


var submit_button_1 = document.querySelector('#sub');
submit_button_1.addEventListener("click",(e)=>{
    e.preventDefault()
    var input_bar = document.querySelector('.input_bar');
    var input_bar_value = input_bar.value
    // console.log(input_bar_value)
    // console.log("clicking")
   

    input_bar.value = ''

var name_ = input_bar_value
// console.log(name_)
var api = `https://api.spoonacular.com/recipes/complexSearch?query=${name_}&apiKey=e513f8790be242e4aa69d755c37d1e0b`



async function recipes(){
   try{ 
    let food_name = await fetch(api)
    let food_name_json = await food_name.json()
     var food_result =  food_name_json.results
    //  console.log(food_result);
 
    for(let i=0; i<food_result.length; i++){
        var id_ =  food_result[i].id
        // console.log(id_)
    
    
    var api2 =`https://api.spoonacular.com/recipes/${id_}/information?includeNutrition=false&apiKey=e513f8790be242e4aa69d755c37d1e0b`
    let information_id = await fetch(api2)
    let information_id_json = await information_id.json()
    // console.log(information_id_json)
    // for(let i of information_id_json){
    //     console.log(i)
    // }
    let get_tittle = information_id_json.title
    let img = information_id_json.image
    let summary = information_id_json.instructions
   
    // console.log(get_tittle)


    var  main = document.querySelector(".discription")
    var des = document.querySelector(".discription")


  

    var discription = document.createElement("div")
       discription.classList.add("col-md-1")
       discription.setAttribute("id", "discription_inside")
    discription.innerHTML = ` <div>
    <h2 class="heading">${get_tittle}</h2>
    </div>
    <div class="discription_container">
    <img class="dish_img" src="${img}">
   <p class="discription_line">
     ${summary}
     </p>
    </div>`
    main.append(discription)

    }

   }
    catch(rej){
       console.log(rej)
       console.log("error")
    }
}
recipes()



})


 