export interface WordRef {
	language: string;
	name: string;
}

export interface Origin {
	word: WordRef;
	description?: string;
}

export interface Meaning {
	meaning: string;
	origins: Origin[];
	lexicalCategory: string;
}

export interface Word {
	name: string;
	meanings: Meaning[];
	language: string;
}
