import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";

export default function Todo(props) {
  return (
    <List>
      {props.list.map((doc, key) => (
        <ListItem key={key}>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary={doc} secondary="Jan 9, 2014" />
        </ListItem>
      ))}
    </List>
  );
}
