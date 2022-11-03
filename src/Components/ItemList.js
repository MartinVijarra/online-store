//import { useState, useEffect } from "react";

export function ItemList() {
	fetch('https://fakestoreapi.com/products/1')
	.then(res => res.json())
	.then(res => console.log(res))

}	
