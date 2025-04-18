import axios from 'axios';

export const fetchAnalyticsData = () => {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                followers: 2000,
                posts: 120,
                engagementRate: 4.5,
                latestPosts: [
                    { title: 'Post 1', likes: 300, comments: 10 },
                    { title: 'Post 2', likes: 500, comments: 15 },
                    { title: 'Post 3', likes: 200, comments: 5 },
                ],
                sentimentAnalysis: {
                    positive: 80,
                    neutral: 15,
                    negative: 5
                }
            });
        }, 1500);
    });
};
