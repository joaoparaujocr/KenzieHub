import styled from "styled-components";

const DashboardStyle = styled.div`
  margin: 0 auto;
  width: 100%;

  .container { 
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header {
    button {
      background-color: var(--grey-3);
      color: white;
      padding: 6px 16px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      font-size: 12px;
    }
  }

  section {
    padding: 45px 0;
    border: 1px solid var(--grey-3);
    border-width: 1px 0 1px 0;
    color: white;

    p {
      color: var(--grey-1);
      font-weight: 400;
      font-size: 15px;
    }
  }

  main {
    color: white;
  }
`

export default DashboardStyle