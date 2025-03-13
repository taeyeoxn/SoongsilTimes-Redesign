import { useEffect } from 'react';

const usePageTitle = (title) => {
    useEffect(() => {
        const $title = document.getElementsByTagName("title")[0];
        $title.innerText = "새로운 기사 작성"
    }, [title]);

};

export default usePageTitle;