type imageObject = {
  asset: {
    _ref: string;
    _type: string;
  };
};

type socialObject = {
  _ref: string;
  _type: string;
  _key: string;
};

interface SanityBody {
  _createdAt: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _type: string;
}

type iconObject = {
  type: string;
  asset: {
    _ref: string;
    _type: string;
  };
};

interface Social extends SanityBody {
  alt: string;
  link: string;
}

interface Info extends SanityBody {
  profilePicture: imageObject;
  email: string;
  phoneNumber: string;
  role: string;
  social: socialObject[];
  name: string;
  backgroundInfo: string;
}

interface About extends SanityBody {
  header: string;
  details: string;
  image: imageObject;
}

interface Skill extends SanityBody {
  alt: string;
  icon: iconObject;
  skillName: string;
}

interface Experience extends SanityBody {
  present: boolean;
  startDate: string;
  companyName: string;
  endDate?: string;
  highlights: string[];
  role: string;
  avatar: iconObject;
}

interface Project extends SanityBody {
  link: string;
  name: string;
  description: string;
  coverImage: imageObject;
  liveLink: string;
}
