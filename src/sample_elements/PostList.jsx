import Post from './Post';

const posts = [
    {
        writer : "임채은",
        subject : "뷰보다 더 간단한 리액트",
        regdate : Date.now()
    },
    {
        writer : "임상원",
        subject : "컴포넌트로부터 엘리먼트 생성하는 곳",
        regdate : Date.now()
    },
    {
        writer : "황성하",
        subject : "리액트를 배웁시당",
        regdate : Date.now()
    }

];

function PostList(props){
    return(
        <div>
            {
                posts.map((post) => {
                    return(
                        <Post writer={post.writer} subject={post.subject} regdate={post.regdate}/>
                    )
                })
            }
        </div>
    );
}

export default PostList;