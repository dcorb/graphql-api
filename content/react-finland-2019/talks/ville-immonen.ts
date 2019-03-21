import Keyword from "../../../server/schema/keywords";
import { Session } from "../../../server/schema/Session";
import { SessionType } from "../../../server/schema/types";
import speaker from "../../people/ville-immonen";

const talk: Session = {
  people: [speaker],
  title: "Toolchain for building modular React Native plugins",
  description: ``,
  type: SessionType.TALK,
  keywords: [Keyword.REACT_NATIVE, Keyword.UNIVERSAL_REACT],
};

export default talk;
