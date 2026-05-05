"use client";

import { getPosts } from "@/database/postdb";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

const ServerActionPage = () => {
  const posts = getPosts();
  return (
    <div className="container mx-auto mt-10 space-y-10">
      <h2 className="text-green-500 text-2xl font-bold">Server Action</h2>
      <Form className="w-full max-w-96">
        <Fieldset>
         
          <FieldGroup>
            <TextField
              isRequired
              name="title"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Title</Label>
              <Input placeholder="Enter your title" />
              <FieldError />
            </TextField>
           
            <TextField
              isRequired
              name="description"
              validate={(value) => {
                if (value.length < 10) {
                  return "description must be at least 10 characters";
                }
                return null;
              }}
            >
              <Label>Description</Label>
              <TextArea placeholder="Tell us about yourself..." />
              <Description>Minimum 10 characters</Description>
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">
              <FloppyDisk />
              Save changes
            </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
      <div className="grid grid-cols-3 gap-3  ">
        {posts.map((post) => (
          <div className="border-2 p-5" key={post.id}>
            <h1 className="text-xl font-bold">{post?.title}</h1>

            <p>{post?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerActionPage;
