import React, { useEffect, useState } from 'react';
import { fetchAnalyticsData } from '../services/api';
import SocialCard from './SocialCard';
import SentimentChart from './Chart';

const Dashboard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchAnalyticsData().then((res) => {
            setData(res);
        });
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
            <h1>Social Media Analytics</h1>
            <div className="social-cards">
                <SocialCard title="Followers" value={data.followers} />
                <SocialCard title="Posts" value={data.posts} />
                <SocialCard title="Engagement Rate" value={`${data.engagementRate}%`} />
            </div>
            <SentimentChart data={data.sentimentAnalysis} />
            <div className="latest-posts">
                <h3>Latest Posts</h3>
                <ul>
                    {data.latestPosts.map((post, index) => (
                        <li key={index}>
                            <h4>{post.title}</h4>
                            <p>Likes: {post.likes}</p>
                            <p>Comments: {post.comments}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
