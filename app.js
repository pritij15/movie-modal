const cl = console.log;
const openModal = document.getElementById("openModal");
const backDrop = document.getElementById("backDrop");
const ourModal = document.getElementById("ourModal");
const closeModal = [...document.querySelectorAll(".closeModal")]

const movieForm = document.getElementById("movieForm");
const movieTitleControl = document.getElementById("movieTitle");
const imageUrlControl = document.getElementById("imageUrl");
const movieRatingControl = document.getElementById("movieRating");
const movieCardContainer = document.getElementById("movieCardContainer");



let moviesArray = [
    {
    title : "Ved",
    imageUrl : `data:image/jpeg;base64,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`,
    rating : 5

}
];

const templating = (arr)=>{
    let result = ``;
    arr.forEach(ele =>{
        result += `
                <div class="col-md-4 mb-4">
                     <div class="card">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h2>${ele.title}</h2>
                            <small>Rating: ${ele.rating}</small>
                        </div>

                        <div class="card-body">
                            <img src="${ele.imageUrl}" alt="" class="movieImg">
                        </div>

                        <div class="card-footer d-flex justify-content-between">
                            <button class="btn btn-primary">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                        </div>
                     </div>
                </div>
                `
    })

    movieCardContainer.innerHTML = result;
}

templating(moviesArray);

const modalHandler = ()=>{
    backDrop.classList.toggle("active");
    ourModal.classList.toggle("active");
}

const onMovieSubmit = (eve) =>{
    eve.preventDefault()
    cl(`Form Submitted`);

let obj = {
    title : movieTitleControl.value,
    imageUrl : imageUrlControl.value,
    rating : movieRatingControl.value
}

moviesArray.unshift(obj);
templating(moviesArray);
cl(moviesArray);
movieForm.reset();
modalHandler()
}

openModal.addEventListener("click",modalHandler);

closeModal.forEach(ele => {
    cl(ele)
    ele.addEventListener("click",modalHandler);
})

movieForm.addEventListener("submit",onMovieSubmit)
