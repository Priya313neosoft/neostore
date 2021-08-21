import axios from "axios";
import {SORT_BY_CATEGORY,SORT_BY_COLOR,SORT_BY_PRICE,SORT_BY_RATING} from "../CONSTANT/product-module.constant"
export const sortBycategory=payload=>({
    type:SORT_BY_CATEGORY,
    payload
})
export const sortByColor=payload=({
    type:SORT_BY_COLOR,
    payload
})
export const sortByPrice=payload=({
    type:SORT_BY_PRICE,
    payload
})
export const sortByRating=payload=>({
    type:SORT_BY_RATING,
    payload
})