export default function PostShortComponent({id, title, body, showPost}){
    return (
        <div className={'post'}>
            <h2>{ title }</h2>
            <p>{ body }</p>
            <button onClick={() => showPost(id)}>Show Info</button>
        </div>
    );
}