import './Editor.css';
import Button from '../components/Button';
import attachIcon from '../assets/attach.svg';
import { useState, useEffect } from 'react';
import { getStringedDate } from '../util/get-stringed-date';

const Editor = ({onSubmit, categoryData, initData}) => {
    const [input, setInput] = useState({
        createdDate: new Date(),
        category: categoryData?.category || "",
        image: null,
        title: "",
        reporter: "",
        content: "",
    });

    useEffect(() => {
        if(initData) {
            setInput({
                ...initData,
                createdDate : new Date(Number(initData.createdDate)),
            });
        }
    }, [initData]);

    const [imagePreview, setImagePreview] = useState(null);  // 미리보기 상태 추가

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

    const onImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result); // Base64 문자열로 변환된 이미지를 미리보기 상태에 저장
                setInput({
                    ...input,
                    image: reader.result, // Base64로 변환된 문자열로 저장
                });
            };
            reader.readAsDataURL(file); // Base64로 변환
        }
    };
    
    const onClickSubmitButton = () => {
        onSubmit(input);
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
                <div className="article-image">
                    <input 
                        type="file" 
                        accept="image/*"
                        onChange={onImageChange}
                    />
                    {imagePreview ? (
                        <img src={imagePreview} alt="preview" className="image-preview" />
                    ) : (
                        <img src={attachIcon} alt="attach icon" />
                    )}
                </div>
                <textarea 
                name='content'
                value={input.content}
                onChange={onChangeInput}
                placeholder='Enter the Article... '/>
            </div>
            <Button 
            onClick={onClickSubmitButton}
            text={"기사 올리기"}/>
        </div>
    )
};

export default Editor;
