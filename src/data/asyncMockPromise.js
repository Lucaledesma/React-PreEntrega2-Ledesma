const productos = [
    {
        id: 1,
        titulo: "Captain Tsubasa",
        imagen: "../../assets/img/deportes/01.jpg",
        stock: 5,
        precio: 1500,
        categoria: "deportes",
        detalle: ""
    },
    {
        id: 2,
        titulo: "WWE 2K22",
        imagen: "../../assets/img/deportes/02.jpg",
        stock: 5,
        precio: 1600,
        categoria: "deportes",
        detalle: ""
    },
    {
        id: 3,
        titulo: "NBA 2K23",
        imagen: "../../assets/img/deportes/03.jpg",
        stock: 5,
        precio: 1700,
        categoria: "deportes",
        detalle: ""
    },
    {
        id: 4,
        titulo: "Ryders Public",
        imagen: "../../assets/img/deportes/04.jpg",
        stock: 5,
        precio: 1800,
        categoria: "deportes",
        detalle: ""
    },
    {
        id: 5,
        titulo: "F1 2022",
        imagen: "../../assets/img/deportes/05.jpg",
        stock: 5,
        precio: 1900,
        categoria: "deportes",
        detalle: ""
    },
    {
        id: 6,
        titulo: "FIFA 2023",
        imagen: "../../assets/img/deportes/06.jpg",
        stock: 5,
        precio: 2000,
        categoria: "deportes",
        detalle: ""
    },
    {
        id: 7,
        titulo: "A Way Out",
        imagen: "../../assets/img/cooperativo/01.jpg",
        stock: 5,
        precio: 1500,
        categoria: "cooperativo",
        detalle: ""
    },
    {
        id: 8,
        titulo: "Black Blood 4",
        imagen: "../../assets/img/cooperativo/02.jpg",
        stock: 5,
        precio: 1600,
        categoria: "cooperativo",
        detalle: ""
    },
    {
        id: 9,
        titulo: "It Takes Two",
        imagen: "../../assets/img/cooperativo/03.jpg",
        stock: 5,
        precio: 1700,
        categoria: "cooperativo",
        detalle: ""
    },
    {
        id: 10,
        titulo: "Crash Team Racing",
        imagen: "../../assets/img/cooperativo/04.jpg",
        stock: 5,
        precio: 1800,
        categoria: "cooperativo",
        detalle: ""
    },
    {
        id: 11,
        titulo: "Mortal Kombat 11",
        imagen: "../../assets/img/cooperativo/05.jpg",
        stock: 5,
        precio: 1900,
        categoria: "cooperativo",
        detalle: ""
    },
    {
        id: 12,
        titulo: "Little Nightmares 2",
        imagen: "../../assets/img/cooperativo/06.jpg",
        stock: 5,
        precio: 2000,
        categoria: "cooperativo",
        detalle: ""
    },
    {
        id: 13,
        titulo: "Battlefield 2042",
        imagen: "../../assets/img/disparos/01.jpg",
        stock: 5,
        precio: 1500,
        categoria: "disparos",
        detalle: ""
    },
    {
        id: 14,
        titulo: "DOOM Eternal",
        imagen: "../../assets/img/disparos/02.jpg",
        stock: 5,
        precio: 1600,
        categoria: "disparos",
        detalle: ""
    },
    {
        id: 15,
        titulo: "COD Modern Warfare 2",
        imagen: "../../assets/img/disparos/03.jpg",
        stock: 5,
        precio: 1700,
        categoria: "disparos",
        detalle: ""
    },
    {
        id: 16,
        titulo: "Sniper Elite 5",
        imagen: "../../assets/img/disparos/04.jpg",
        stock: 5,
        precio: 1800,
        categoria: "disparos",
        detalle: ""
    },
    {
        id: 17,
        titulo: "Insurgency Sandstorm",
        imagen: "../../assets/img/disparos/05.jpg",
        stock: 5,
        precio: 1900,
        categoria: "disparos",
        detalle: ""
    },
    {
        id: 18,
        titulo: "MAFIA 3",
        imagen: "../../assets/img/disparos/06.jpg",
        stock: 5,
        precio: 2000,
        categoria: "disparos",
        detalle: ""
    },
    {
        id: 19,
        titulo: "Elder Ring",
        imagen: "../../assets/img/mundo-abierto/01.jpg",
        stock: 5,
        precio: 1500,
        categoria: "mundoabierto",
        detalle: ""
    },
    {
        id: 20,
        titulo: "GOW Ragnarok",
        imagen: "../../assets/img/mundo-abierto/02.jpg",
        stock: 5,
        precio: 1600,
        categoria: "mundoabierto",
        detalle: ""
    },
    {
        id: 21,
        titulo: "Red Dead Redemption 2",
        imagen: "../../assets/img/mundo-abierto/03.jpg",
        stock: 5,
        precio: 1700,
        categoria: "mundoabierto",
        detalle: ""
    },
    {
        id: 22,
        titulo: "The Witcher 3",
        imagen: "../../assets/img/mundo-abierto/04.jpg",
        stock: 5,
        precio: 1800,
        categoria: "mundoabierto",
        detalle: ""
    },
    {
        id: 23,
        titulo: "Assasins Creed Valhalla",
        imagen: "../../assets/img/mundo-abierto/05.jpg",
        stock: 5,
        precio: 1900,
        categoria: "mundoabierto",
        detalle: ""
    },
    {
        id: 24,
        titulo: "Far Cry 6",
        imagen: "../../assets/img/mundo-abierto/06.jpg",
        stock: 5,
        precio: 2000,
        categoria: "mundoabierto",
        detalle: ""
    }
];

export default function getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 0);
    });
}

export function getSingleItem(itemid) {

    let singleItem = productos.find( (producto) => {
        return producto.id === parseInt(itemid);
    }); 

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (singleItem !== undefined) resolve(singleItem);
        else reject("Item no encotrado.");
      }, 0);
    });
}