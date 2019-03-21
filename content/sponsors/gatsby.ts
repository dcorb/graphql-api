import { Contact } from "../../server/schema/Contact";
import { ContactType } from "../../server/schema/types";

const sponsor: Contact = {
  name: "Gatsby",
  about: "Modern Development, for the Content Web",
  image: {
    url: "sponsors/gatsby.svg",
  },
  social: {
    homepage: "https://www.gatsbyjs.com/",
    github: "gatsbyjs",
    twitter: "gatsbyjs",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "San Francisco",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
