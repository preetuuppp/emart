// for Add Items in cart
export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}


// FOR DELETE ITEM\

export const delCart=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}