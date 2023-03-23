import Nav from "./NavBar/Nav";
import ItemListContainer from "./ItemListContainer/ItemListContainer";




function Container(props){
    return (
    <div className="flex flex-col">
        <Nav />
        <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
    );
}

export default Container;