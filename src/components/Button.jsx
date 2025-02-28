import './Button.css';

const Button = ({text, onClick}) => {
    return (
        <div className='Button-container'>
            <button onClick={onClick} className='Button'>
            {text}
            </button>
        </div>
    );
};

export default Button;