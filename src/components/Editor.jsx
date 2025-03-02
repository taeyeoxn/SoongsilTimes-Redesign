import './Editor.css';
import attachIcon from '../assets/attach.svg'
import { useState } from 'react';

// createdDate 프로퍼티에 저장된 Date 객체를 문자열로 변환
const getStringedDate = (targetDate) => {
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if (month < 10) {
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`;
    }

    return `${year}-${month}-${date}`;
};

const Editor = () => {
    const [input, setInput] = useState({
        createdDate: new Date(),
        title: "",
        reporter: "",
        content: "",
    });

    const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === 'createdDate') {
            value = new Date(value); 
        }
    
        setInput({
            ...input,
            [name]: value,
        });
    };
    
    return (
        <div>
            <div className='title-input'>
                <input 
                placeholder='Enter the Title...'
                name='title'
                value={input.title}
                onChange={onChangeInput}
                />
            </div>
            <div className='sub-input'>
                <input 
                placeholder='Enter the Reporter...'
                name='reporter'
                value={input.reporter}
                onChange={onChangeInput}
                />
                <div className='sub-input-bar'></div>
                <input 
                name='createdDate'
                onChange={onChangeInput}
                value={getStringedDate(input.createdDate)} 
                type='date'/>
            </div>
            <div className='content-input'>
                <div className='article-image'>
                    <input type = "file" accept = "image/*"/>
                    <img src={attachIcon} alt="attach icon"/>
                </div>
                <textarea 
                name='content'
                value={input.content}
                onChange={onChangeInput}
                placeholder='Enter the Article... '/>
            </div>
        </div>
    )
};

export default Editor;