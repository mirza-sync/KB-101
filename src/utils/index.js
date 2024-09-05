export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    
    return `Updated ${new Intl.DateTimeFormat('en-US', options).format(date)}`;
};

export function formatDaysAgo(date) {
    const now = new Date();
    const givenDate = new Date(date);
    const diffInMs = now - givenDate;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays < 7) {
        return `Updated ${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    } else if (diffInDays < 30) {
        const diffInWeeks = Math.floor(diffInDays / 7);
        return `Updated ${diffInWeeks} week${diffInWeeks !== 1 ? 's' : ''} ago`;
    } else if (diffInDays < 365) {
        const diffInMonths = Math.floor(diffInDays / 30);
        return `Updated ${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`;
    } else {
        const diffInYears = Math.floor(diffInDays / 365);
        return `Updated ${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`;
    }
}
