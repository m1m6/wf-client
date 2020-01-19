
export const parseProfileCategories = catItem => {
	if (catItem) {
		const cats = catItem.replace(/\s/g, "").split(",");
		return cats.slice(0, cats.length - 1);
	}

	return [];
};

export const getProfileTags = media => {
	let uniqTags = new Set();
	if (media && media.length > 0) {
		for (const { tags } of media) {
			for (const tagItem of tags) {
				uniqTags.add(tagItem.name.toLowerCase());
			}
		}
	}

    // console.log("countby", countBy([...uniqTags])) to be dpne later
	return [...uniqTags];
};
