
// functions

// declaraton
function min(){
    var numList = [3,5,2,6,4,2];  // changn
    var numSorted = numList.sort(); // sort items in ascending order
    console.log(numSorted);
    console.log(numSorted[0]); 
}


// calling of functon
// min()

//dynamic
function minDynamc( numList){ // changn parameters
    var numSorted = numList.sort(); // sort items in ascending order
    console.log(numSorted);
    console.log(numSorted[0]); 
}

// minDynamc([5,5,6,3,5,0]);
// minDynamc([93,93,82,72,74,63,63]);

//multipy

function minMultipyDynamc( numList, smallest){ // changn parameters
    var numSorted = numList.sort(); // sort items in ascending order
    console.log(numSorted);
    if(smallest){
        console.log(numSorted[0]);
        // first item as smallet
    }else{
        console.log(numSorted[numList.length -1]); 
        // last item as smallet
    }
}

// minMultipyDynamc([93,93,82,72,74,63,63], false)

// synchronous function


{/* <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}

async function getAllMeal(filter) {
    const app = document.getElementById("app");
    for(var i =0; i<3; i++){
        var newEl = document.createElement("div");
        newEl.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4 bg-light">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title bg-light w-50 p-3 mb-2"></h5>
        <p class="card-text w-75 p-1 mb-3"></p>
        <p class="card-text w-25 p-1"><small class="text-muted"></small></p>
      </div>
    </div>
  </div>
</div>
        `;
        app.appendChild(newEl);
    }

    const res =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${filter}`, {
        mode:"cors"
    })
    console.log(res);

    const data = await res.json();
    console.log(data);

    app.innerHTML=""
    
    for(var i =0; i<data.meals.length; i++){
        var newEl = document.createElement("div");
        newEl.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4 bg-light">
      <img src="${data.meals[i].strMealThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title  ">${data.meals[i].strMeal}</h5>
        <p class="card-text  ">${data.meals[i].strInstructions.slice(0,123)}.......</p>
        <p class="card-text "><small class="text-muted">${data.meals[i].strTags}</small></p>
      </div>
    </div>
  </div>
</div>
        `;
        app.appendChild(newEl);
    }


}

