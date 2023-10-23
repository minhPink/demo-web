import { fetchApi } from "./fectchApi.js";
import {textSearch, buttonSearch, prev, so, next, hienThi} from "./documents.js"
import { objectBien } from "./variable.js";

export const drawProducts = () => {

    var thayDoi = "";
    if(objectBien.category != ""){
        thayDoi = `&category=${objectBien.category}`;
    }

    const api = `http://localhost:3000/products?q=${objectBien.q}&_page=${objectBien.page}&_limit=${objectBien.limit}&_sort=${objectBien.sort}&_order=${objectBien.order}${thayDoi}`
    fetchApi(api)
    .then(data => {
    
        const newArr = data.map((item) => {
            return `
            <div class="inner-item">
                <div class="inner-img">
                    <img src="${item.thumbnail}" alt="">
                </div>
                <div class="inner-price">
                    <span>${item.price}$</span>
                </div>
                <div class="inner-brand">
                    <span>${item.brand}</span>
                </div>
                <div class="inner-giamgia">
                    <span>${item.discountPercentage}</span>
                </div>
            </div>
            `;
        });
        const string = newArr.join("");
        hienThi.innerHTML = string;
    })
}