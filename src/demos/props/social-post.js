import "./social-post.css";

function SocialPost({content, userName, numLikes=0, numThumbsUp=0, numSparkles=0}) {

    return (
        <div className="post-container">
            <span>{content}</span>
            <div className="post-text__name">- {userName}</div>
            <div>
                <button>{numLikes}❤️</button>
                <button>{numThumbsUp}👍</button>
                <button>{numSparkles}✨</button>
            </div>
        </div>
    )
}

export default SocialPost;