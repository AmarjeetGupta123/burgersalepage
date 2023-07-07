class Amar {
    constructor() {
        document.write(`
        <nav>
           <ul>
               <li><a href ="#">Home</a></li>
               <li><a href ="#">Menu</a></li>
               <li><a href ="#">About</a></li>
               <li><a href ="#">Booktable</a></li>
               <li><a href ="#">Contactus</a></li>
               <li  style="float:right"><a class="icn" href ="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
               <li  style="float:right"><a class="icn" href ="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
               <li  style="float:right"><a class="icn" href ="#"><ion-icon name="logo-youtube"></ion-icon></a></li>
               <li  style="float:right"><a class="icn" href ="#"><ion-icon name="search-outline"></ion-icon></a></li>
               <li  style="float:right"><a class="icn-color" href ="#">order online</a></li>
           </ul>
        </nav>
        <div class="brand">
        <h1>burgry maxi</h1>
        <h3>exprees food to raise your mood!</h3>
        <h4>$10.98</h4>
        <p>BUY NOW</p>
        </div>
        `)
    }
    welcome(user){
        document.write(`<h1>amarjeet${user}<h1>`)
    }
    products={
        product1:"burger",
        price:"$10"
    }
}
    const app=new Amar();
    document.write(app.products.product1);
    document.write(app.products.price);
