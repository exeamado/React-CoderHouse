import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
            data-target=".navbar-ex1-collapse">
                <a class="navbar-brand" href="..\App.js">Tierra Santa Shop</a>
                <button type="button" class="btn btn-default navbar-btn">1</button>
                <button type="button" class="btn btn-default navbar-btn">2</button>
                <button type="button" class="btn btn-default navbar-btn">3</button>
            </button>
        </div>   
    </nav>
    </>
    // function CartWidget() {
    //  return (
    //   <>
    //   <h3>TU_MARCA</h3>
    //   <img src="..\images\carrito.png" alt=""/>
    //   </>;
    //   );
    // }

    // function ItemListContiner(params) {
    //   return (
    //   <>
          // <ul>
          //   <li>Elemento 1</li>
          //   <li>Elemento 2</li>
          //   <li>Elemento 3</li>
          //   <li>Elemento 4</li>
          // </ul>
    //   </>;
    // }
    
  );
}   

export default Navbar;