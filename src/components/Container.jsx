import Nav from "./NavBar/Nav";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";



function Container(props){
    return (
    <div className="flex flex-col">
        <Nav />
        <ItemListContainer greeting={'Bienvenidos'}/>
        <ItemDetailContainer />

    </div>
    );
}

export default Container;