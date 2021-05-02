import {useEffect, useState} from "react";
import axiosInstance from '../services/api';

export default function PostFullComponent({userId, title, body}){
    let [user, setUser] = useState([]);

    useEffect(() => {
        axiosInstance.get(`/users/${userId}`)
            .then(value => setUser(value.data))
    }, [user]);

    return (
        <div className={'fullPost'}>
            <h1>{ title }</h1>
            <p>{ body }</p>
            <div>
                User: { user.name || 'user' }
            </div>
        </div>
    );
}