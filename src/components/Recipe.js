import styled from "styled-components";

const StyledRecipe = styled.div`
  padding: 1rem 1rem;
  margin: 1rem 0rem;
  border-radius: 0.6rem;
  background-color: rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export default function Recipe() {
  return (
    <StyledRecipe>
      <h3>Name</h3>
      <p>Description</p>

      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Date Created:</p>
        <div style={{ display: "flex" }}>
          <button className="btn-primary">Edit</button>
          <button className="btn-primary">Delete</button>
        </div>
      </div>
    </StyledRecipe>
  );
}
