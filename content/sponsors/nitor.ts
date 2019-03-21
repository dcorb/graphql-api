import { Contact } from "../../server/schema/Contact";
import { ContactType } from "../../server/schema/types";

const sponsor: Contact = {
  name: "Nitor",
  about: "Digital engineering",
  image: {
    url: "sponsors/nitor.png",
  },
  social: {
    homepage: "https://www.nitor.com/en",
    facebook: "NitorCreations",
    github: "NitorCreations",
    linkedin: "company/nitor-creations-ltd",
    instagram: "nitorcreations",
    twitter: "nitorcreations",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
