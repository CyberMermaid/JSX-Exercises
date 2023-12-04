// Define a Tweet component which takes as props the username of the user 
// who wrote the tweet, the name of the user who wrote the tweet, 
// the date of the tweet, and the message being tweeted.
const Tweet = (props) => {
    return (
        <ul>
           <li>{props.username}</li> 
            {/* Name of User who wrote the tweet */}
            <li>{props.name}</li>
            {/* Date of the tweet */}
            <li>{props.date}</li>
            {/* Message tweeted */}
            <li>{props.msg}</li>
        </ul>
    );
}