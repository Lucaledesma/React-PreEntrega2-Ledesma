import './logo.css';

function Logo ( {titulo} ) {
    return (
        <a className="logo" href="/">
            <i className="bi bi-controller"></i>
            <h2>{titulo}</h2>
        </a>  
    );
}

export default Logo;