const tweetData = {
    profileImage: "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png", // Example profile image
    name: "Hello World",
    handle: "@helloworld",
    content: "Just finished an amazing coding session! #coding #javascript",
    replies: 100,
    retweets: 100,
    likes: 100
};

const tweetContainer = document.getElementById('tweet-container');

const tweetHTML = `
    <div class="tweet-header">
        <img src="${tweetData.profileImage}" alt="Profile Image">
        <div>
            <div class="name">${tweetData.name}</div>
            <div class="handle">${tweetData.handle}</div>
        </div>
    </div>
    <div class="tweet-content">
        ${tweetData.content}
    </div>
    <div class="tweet-footer">
        <div>💬 ${tweetData.replies} Replies</div>
        <div>🔁 ${tweetData.retweets} Retweets</div>
        <div>❤️ ${tweetData.likes} Likes</div>
    </div>
`;

tweetContainer.innerHTML = tweetHTML;
