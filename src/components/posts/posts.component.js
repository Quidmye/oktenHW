import axiosInstance from '../services/api'
import {useEffect, useState} from "react";
import PostShortComponent from "./post.short.component";
import PostFullComponent from "./post.full.component";

export default function PostsComponent() {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);

    useEffect(() => {
        axiosInstance.get('/posts')
            .then((value) => setPosts([...value.data]))
    }, [])

    function showPost(id){
        let data = posts.find(value => value.id === id);
        setPost(data);
    }

    return (
        <div className={'container'}>
            <div className={'posts'}>{
                posts.map(value => <PostShortComponent key={value.id} showPost={showPost} {...value}/>)
            } </div>
            <div className={'full'}>
                {
                    post ? <PostFullComponent {...post} /> : (<div>Post will be here</div>)
                }
            </div>
        </div>
    );
}