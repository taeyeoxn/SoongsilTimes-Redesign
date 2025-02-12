import { useParams, useSearchParams } from 'react-router-dom';

const Article = () => {
    const params = useParams();

    return (
        <div>{params.id}번 기사입니다</div>
    );
};

export default Article;