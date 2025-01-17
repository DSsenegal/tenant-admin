import { Avatar } from "@saleor/macaw-ui";
import React from "react";

interface UserAvatarProps {
  url?: string;
  initials?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  url,
  initials,
  ...rest
}) =>
  url ? (
    <Avatar.User scheme="accent1" src={url} {...rest} />
  ) : (
    <Avatar.User scheme="accent1" initials={initials} {...rest} />
  );
