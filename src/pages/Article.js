import {React, useState, useEffect} from 'react'
import ArticleList from '../components/ArticleList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import articleContent from './article-content';
import NotFound from './NotFound';

const Article = ({match}) =>{
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name)
    
    const [articleInfo, setArticleInfo] = useState({upvotes:0, comments: []});
    useEffect(() =>{
        const fetchData = async () => {
        const result = await fetch(`/api/articles/${name}`)   
        const body = await result.json();
        setArticleInfo(body)   
        }
        fetchData();
        
    }, [name]);

    if(!article)
    return <NotFound />
    
    const img = '/images/'+article.image;

    const others = articleContent.filter(article => article.name!==name)
    return(
        <>
                <h1>
                    {article.author}
                </h1>            
                <img src= {img} height={250} alt={article.author}/>
                {
                    article.content.map((paragraph,key) =>(
                        <p key={key}>{paragraph}</p>
                    ))
                }
                <UpvotesSection articleName={name} upvotes = {articleInfo.upvotes} setArticleInfo = {setArticleInfo} />
                <CommentsList comments = {articleInfo.comments} />
                <AddCommentForm articleName={name} setArticleInfo = {setArticleInfo} />
                <h3>Other Articles:</h3>
                <ArticleList articles={others} />
        </>        
    );

}

export default Article;