const slugify = (trailName='') => {
    let slug = '';

    for (let char of trailName) {
        if (char === ' ') slug += '-';
        else slug += char;
    }

    return slug;
};

export default slugify;