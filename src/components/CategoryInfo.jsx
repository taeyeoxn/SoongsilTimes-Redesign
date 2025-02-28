import './CategoryInfo.css';

const CategoryInfo = ({category}) => {
    const CategoryContent = () => {
        switch(category) {
            case "campus":
                return (
                    <div className='CategoryInfo'>
                        <h2>Campus</h2>
                        <p>News on student life<br />and campus events.</p>
                    </div>
                );
            case "society":
                return (
                    <div className='CategoryInfo'>
                        <h2>Society</h2>
                        <p>Coverage of social issues, policies,<br/>and community matters.</p>
                    </div>
                );
            case "business":
                return (
                    <div className='CategoryInfo'>
                        <h2>Business</h2>
                        <p>Insights into markets, finance,<br/>and corporate trends.</p>
                    </div>
                );
            case "culture":
            return (
                <div className='CategoryInfo'>
                    <h2>Culture</h2>
                    <p>Stories on arts, entertainment,<br/>and the world of sports.</p>
                </div>
            );
            case "science":
                return (
                    <div className='CategoryInfo'>
                        <h2>Science</h2>
                        <p>Exploring discoveries and<br/>innovations in science and math.</p>
                    </div>
                );
            case "archive":
                return (
                    <div className='CategoryInfo'>
                        <h2>Archive</h2>
                        <p>A collection of past issues</p>
                    </div>
                );
        };
    };
    return <div>{CategoryContent()}</div>
};

export default CategoryInfo;
