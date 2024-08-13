
export function formatBackendDate(utcDateString) {
    const options = {
        hour: '2-digit',
        minute: '2-digit'
    };
    const lastMessageDate = new Date(utcDateString);
    const currentDate = new Date();
    if (lastMessageDate.getFullYear() !== currentDate.getFullYear()) {
        options.year = 'numeric';
        options.month = 'short';
        options.day = 'numeric';
    } else if (lastMessageDate.getMonth() !== currentDate.getMonth() || lastMessageDate.getDate() !== currentDate.getDate()) {
        options.month = 'short';
        options.day = 'numeric';
    }
    return Intl.DateTimeFormat('en-US', options).format(lastMessageDate);
}