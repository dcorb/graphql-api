import { Contact } from "../../server/schema/Contact";
import { ContactType } from "../../server/schema/types";

const sponsor: Contact = {
  name: "Geniem",
  about: "Creative Web Development",
  image: {
    url: "sponsors/geniem.svg",
  },
  social: {
    homepage: "https://www.geniem.fi/in-english/",
    facebook: "geniemfi",
    twitter: "geniemfi",
    linkedin: "company/geniem-ltd-",
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
