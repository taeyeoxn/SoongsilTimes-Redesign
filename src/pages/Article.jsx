import { useParams, useSearchParams } from 'react-router-dom';
import Button from '../components/Button';
import Viewer from '../components/Viewer';

const Article = () => {
    const params = useParams();

    return (
        <div>
            <Viewer/>
            <div style={{ display: "flex", gap: "20px", justifyContent: "flex-end" }}>
                <Button text={"기사 수정하기"} />
                <Button text={"기사 삭제하기"} />
            </div>
        </div>
    );
};

export default Article;