import { drawProducts } from "./draw.js";
import {textSearch, buttonSearch, prev, so, next, change} from "./documents.js"
import { objectBien } from "./variable.js";

// Danh mục sản phẩm
drawProducts();

// Tìm kiếm sản phẩm

buttonSearch.addEventListener("click", () => {
    const input = textSearch.value;
    objectBien.q = input;
    drawProducts()
});

textSearch.addEventListener("keydown", (active) => {
    if(active.key == "Enter"){
        const input = textSearch.value;
        objectBien.q = input;
        drawProducts()
    };
});

// Phân trang sản phẩm
next.addEventListener("click", () => {
        objectBien.page = objectBien.page + 1;
        so.innerHTML = objectBien.page;
        drawProducts();
})
prev.addEventListener("click", () => {
        if(objectBien.page > 1){
            objectBien.page = objectBien.page - 1;
            so.innerHTML = objectBien.page;
            drawProducts();
        }
})

// Bắt sự kiên onchange
change.addEventListener("change", () => {
    console.log(change.value);
    if(change.value == "macdinh"){
        objectBien.q = "";
        objectBien.page = 1;
        objectBien.limit = 10;
        objectBien.sort = "";
        objectBien.order ="";
        objectBien.category ="";
        drawProducts();
    }
    else if(change.value == "tangdan"){
        objectBien.sort = "price";
        objectBien.order = "asc";
        drawProducts();
    }
    else if(change.value == "giamdan"){
        objectBien.sort = "price";
        objectBien.order = "desc";
        drawProducts();
    }
    else{
        objectBien.sort = "discountPercentage";
        objectBien.order = "asc";
        drawProducts();
    }
})
