import './button.css';

function Button ({text, onClick}) {
    return (
        <button onClick={onClick} className='button is-large is-warning'>{text}</button>
    )
}

export default Button;