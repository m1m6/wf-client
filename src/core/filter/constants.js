export const FILTER_KEYS = {
	gender: 'gender',
	countries: 'countries',
	languages: 'languages',
	categories: 'categories',
	followers: 'followers',
	creatorsSize: 'creatorsSize'
};

export const GENDER_LIST = [
	{ label: 'Any', value: 'Any' },
	{ label: 'Male', value: 'Male' },
	{ label: 'Female', value: 'Female' },
	{ label: 'Other', value: 'Other' }
];

export const LANGUAGE_LIST = [
	{ label: 'English', value: 'English' },
	{ label: 'Arabic', value: 'Arabic' }
];

export const CREATOR_CATEGORIES = [
	{ label: 'Nano (1K-5K)', value: [1000, 5000] },
	{ label: 'Micro (5K-20K)', value: [5000, 20000] },
	{ label: 'Mid-tier (20K-100K)', value: [20000, 100000] },
	{ label: 'Macro (100K-1М)', value: [100000, 1000000] },
	{ label: 'Mega & Celebrities (> 1M)', value: [1000000, 100000000] }
];
