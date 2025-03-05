import { replace, useParams, useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ArticleDispatchContext } from '../App';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import { useContext } from 'react';

const Article = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete} = useContext(ArticleDispatchContext);

    const onClickDelete = () => {
        if (
            window.confirm("기사를 정말 삭제할까요?")) {
            onDelete(params.id);
            nav('/', {replace:true});
            }
        };

    return (
        <div>
            <Viewer/>
            <div style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}>
                <Button 
                text={"기사 수정하기"}
                onClick={() => nav(`/edit/${params.id}`)}
                />
                <Button
                 text={"기사 삭제하기"}
                 onClick={onClickDelete}
                 />
            </div>
        </div>
    );
};

export default Article;