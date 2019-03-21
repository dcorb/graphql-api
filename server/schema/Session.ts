import { Field, ObjectType } from "type-graphql";
import { Contact } from "./Contact";
import Keyword from "./keywords";
import { Location } from "./Location";
import SessionType from "./types/SessionType";

@ObjectType()
export class SessionUrls {
  @Field(_ => String, { nullable: true })
  public web?: string;

  @Field(_ => String, { nullable: true })
  public slides?: string;

  @Field(_ => String, { nullable: true })
  public video?: string;
}

@ObjectType()
export class Session {
  @Field(_ => SessionType)
  public type!: SessionType;

  @Field(_ => String)
  public title!: string;

  // TODO: Eliminate and push title customization to frontend?
  @Field(_ => Boolean)
  public hasTitle?: boolean;

  @Field(_ => String, { nullable: true })
  public description?: string;

  @Field(_ => [String], { nullable: true })
  public keywords?: Keyword[];

  @Field(_ => Location, { nullable: true })
  public location?: Location;

  @Field(_ => [Contact], { nullable: true })
  public people?: Contact[];

  @Field(_ => SessionUrls, { nullable: true })
  public urls?: SessionUrls;
}
