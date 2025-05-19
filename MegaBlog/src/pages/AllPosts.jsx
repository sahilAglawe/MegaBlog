import React, {useState, useEffect} from "react";
import { Container , PostCard} from '../components'
import appwriteService from "../appwrite/config"

function AllPosts(params) {
    const [posts, setPosts] = useState([])
    useEffect(() => {},[])
    appwriteService.getPosts([]).then((posts) => setPosts(posts))
    return (
        <div>AllPosts</div>
    )
}

export default AllPosts