import './itemlistcontainer.css';

function ItemListContainer ( {children} ) {
    return (
        <div className="container">
            <h2 className="container-titulo">{children}</h2>
        </div>
    );
}

export default ItemListContainer;