import './SearchResult.css'
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ArticleStateContext } from '../App';
import ArticleList from './ArticleList'; // ArticleList 불러오기

const SearchResult = () => {
    const location = useLocation();
    const articles = useContext(ArticleStateContext);
    const query = new URLSearchParams(location.search).get('query') || '';
    
    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className='SearchResult'>
            <h2>Search Results for "{query}"</h2>
            {filteredArticles.length > 0 ? (
                <div className='article-list'>
                    {filteredArticles.map(article => (
                        <ArticleList 
                            key={article.id}
                            id={article.id}
                            category={article.category}
                            image={article.image}
                            title={article.title}
                            reporter={article.reporter}
                            content={article.content}
                        />
                    ))}
                </div>
            ) : (
                <p>No articles found.</p>
            )}
        </div>
    );
};

export default SearchResult;