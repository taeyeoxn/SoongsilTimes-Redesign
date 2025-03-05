import './Viewer.css';

const Viewer = () => {
    return (
        <div>
            <div className='article-title'>title</div>

            <div className='sub'>
                <div className='article-reporter'>reporter</div>
                <div className='sub-bar'></div>
                <div className='article-date'>2025-03-05</div> 
            </div>

            <div className='article-image'></div>
            <div className='article-content'>
            Many changes are taking place in 2023. Among them, ST looked at the financial aspect of institutional changes. The financial and economic sectors are difficult for college students to access. If it is related to laws or systems, it will feel even more difficult. Let’s read an article that explains these things easily, so you will know more about finance. ......Ed
            </div>

        </div>
    );
};

export default Viewer;