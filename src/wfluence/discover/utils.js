export const getColor = () => {
    let colors = [
        'red',
        'volcano',
        'orange',
        'gold',
        // 'lime',
        'green',
        'cyan',
        'blue',
        'geekblue',
        'purple',
    ];
    let random = Math.floor(Math.random() * 9);
    return colors[random];
};