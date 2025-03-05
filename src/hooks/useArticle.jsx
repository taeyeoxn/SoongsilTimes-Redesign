import { useContext, useState, useEffect } from 'react';
import { ArticleStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

// 함수 앞에 use가 붙으면 custom hook의 기능을 가짐
const useArticle = (id) => {
    const data = useContext(ArticleStateContext);
    const [curArticleItem, setCurArticleItem] = useState();
    const nav = useNavigate();

    useEffect(() => {
        const currentArticleItem = data.find(
            (item) => String(item.id) === String(id));

    // 존재하지 않는 기사에 접근했을 경우
    if(!currentArticleItem) {
        window.alert("존재하지 않는 기사입니다.")
        nav('/', {replace:true});
    }

    setCurArticleItem(currentArticleItem);
    }, [id, data]);
};

export default useArticle;