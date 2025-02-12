import { useParams, useSearchParams } from 'react-router-dom';

const Edit = () => {
    const params = useParams();

    return (
        <div>{params.id}번 기사 수정페이지입니다</div>
    );
};

export default Edit;