interface SanityBody {
    _created_at: string;
    _id: string;
    _rev: string;
    _updated_at: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: 'reference';
    }
};


export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    name: string;
    role: string;
    heroImage: Image;
    backgroundInformation: string;
    profilePic: Image;
    phoneNumber: string;
    address: string;
    email: string;
    socials: Social[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: 'string';
    url: string;
}


export interface Technology extends SanityBody {
    _type: 'skill';
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: 'skill';
    image: Image;
    progress: number;
    title: string;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}


export interface Info extends SanityBody {
    _type: "info";
    name: string;
    role: string;
    heroImage: Image;
    backgroundInformation: string;
    profilePic: Image;
    phoneNumber: string;
    address: string;
    email: string;
    socials: Social[];
}