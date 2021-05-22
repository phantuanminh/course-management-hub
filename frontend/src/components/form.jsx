import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

// FIXME: This file contains code for API call from ReactJS to any back-end. Configure the back-end proxy at package.json

const ChallengeForm = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  return (
    <Form>
      <Form.Field>
        <Input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Button
          onClick={async () => {
            const data = { name, num };
            const response = await fetch("/add_first", {
              crossDomain: true,
              method: "POST",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            if (response.ok) {
              console.log("respond work");
              const data = await response.json();
              console.log(data);
            }
          }}
        >
          {" "}
          Submit{" "}
        </Button>
      </Form.Field>
    </Form>
  );
};

export { ChallengeForm };
