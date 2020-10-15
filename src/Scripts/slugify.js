const slugify = (trailName='') => {
    let slug = '';

    for (let char of trailName) {
        if (char === ' ') slug += '_';
        else slug += char;
    }

    return slug;
};

export default slugify;