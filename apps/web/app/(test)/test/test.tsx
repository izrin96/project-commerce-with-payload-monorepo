"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import React, { useState } from "react";
import { graphql } from "@/gql/gql";
import { Users } from "@/graphql/Users";
import { Login } from "@/graphql/Auth";
import { Button } from "@nextui-org/react";
import { Button as GeistButton } from "@geist-ui/core";
import { Button as MantineButton } from "@mantine/core";
import { useTheme } from "next-themes";
import { LoginMutationVariables } from "@/gql/graphql";

function Test() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setTheme, resolvedTheme } = useTheme();

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: (variable: LoginMutationVariables) =>
      request(
        process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
        graphql(Login),
        variable
      ),
  });

  const { isLoading, isError, data } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      request(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, graphql(Users)),
  });

  return (
    <div>
      <Button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        toggle theme
      </Button>

      <Button
        color="primary"
        onClick={() =>
          mutate({
            email: "izrin96@gmail.com",
            password: "1029384756",
          })
        }
      >
        mutate
      </Button>

      <MantineButton>mantine button</MantineButton>
      <GeistButton type="secondary">geist button</GeistButton>
      {isLoading && "Loading..."}
      {isError && "Error!"}
      {data && JSON.stringify(data.Users.docs)}
    </div>
  );
}

export default Test;
