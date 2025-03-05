import { useParams, useSearchParams } from 'react-router-dom';
import Editor from '../components/Editor';

const Edit = () => {
    const params = useParams();

    return (
        <div>
            <Editor/>
        </div>
    );
};

export default Edit;