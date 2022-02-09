import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Recipe from "./Recipe";

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;
`;

export default function Recipes() {
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      axios
        .post("https://ft-secret-family-recipes.herokuapp.com/api/recipes", {
          token: storedToken,
        })
        .then((resp) => {
          const data = resp.data;
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <Wrapper className="container">
      <div className="row">
        <div className="col-12 ">
          <Recipe />
          <Recipe />
          <Recipe />
        </div>
      </div>
    </Wrapper>
  );
}
