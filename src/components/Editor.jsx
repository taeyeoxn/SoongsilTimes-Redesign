import './Editor.css';
import attachIcon from '../assets/attach.svg'

const Editor = () => {
    return (
        <div>
            <div className='title-input'>
                <input placeholder='Enter the Title...'/>
            </div>
            <div className='sub-input'>
                <input placeholder='Enter the Author...'/>
                <div className='sub-input-bar'></div>
                <div className='article-date'>2025.03.01.</div>
            </div>
            <div className='content-input'>
                <div className='article-image'>
                    <input type = "file" accept = "image/*"/>
                    <img src={attachIcon} alt="attach icon"/>
                </div>
                <textarea placeholder='Enter the Article... '/>
            </div>
        </div>
    )
};

export default Editor;