const CategoryInfo = ({category}) => {
    const CategoryContent = () => {
        switch(category) {
            case "campus":
                return (
                    <div>
                        <h2>Campus</h2>
                        <p>campus</p>
                    </div>
                );
            case "society":
                return (
                    <div>
                        <h2>Society</h2>
                        <p>society</p>
                    </div>
                );
            case "business":
                return (
                    <div>
                        <h2>Business</h2>
                        <p>business</p>
                    </div>
                );
            case "culture":
            return (
                <div>
                    <h2>Culture</h2>
                    <p>culture</p>
                </div>
            );
            case "science":
                return (
                    <div>
                        <h2>Science</h2>
                        <p>science</p>
                    </div>
                );
            case "archieve":
                return (
                    <div>
                        <h2>Archieve</h2>
                        <p>archieve</p>
                    </div>
                );
        };
    };
    return <div>{CategoryContent()}</div>
};

export default CategoryInfo;
