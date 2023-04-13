

let productos = [
    { id: "1", nombre: "Cucha rosa", categoria: "Cuchas", descripcion: "lorem ipsum", img: "pippa-ecom/images/cucha1.webp", precio: "10000", stock: "5" },
    { id: "2", nombre: "Cucha gris", categoria: "Cuchas", descripcion: "lorem ipsum", img: "pippa-ecom/images/cucha2.webp", precio: "12000", stock: "5" },
    { id: "3", nombre: "Camiseta argentina", categoria: "Ropa", descripcion: "lorem ipsum", img: "pippa-ecom/images/ropa1.webp", precio: "2500", stock: "5" },
    { id: "4", nombre: "Buzo rosa y azul", categoria: "Ropa", descripcion: "lorem ipsum", img: "pippa-ecom/images/ropa2.webp", precio: "5000", stock: "5" },
    { id: "5", nombre: "Comedero negro", categoria: "Comederos", descripcion: "llorem ipsum", img: "pippa-ecom/images/comedero1.webp", precio: "6000", stock: "5" },
    { id: "6", nombre: "Comedero blanco", categoria: "Comederos", descripcion: "lorem ipsum", img: "pippa-ecom/images/comedero2.webp", precio: "6000", stock: "5" },
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        },)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        },)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoryId))
        },)
    })
}