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

    .container {
      display: flex;
      flex-direction: column;

      ul {
        padding: 20px;
        background: var(--grey-3);
        width: 100%;
        list-style: none;
        flex-direction: column;
        flex-direction: column;
        border-radius: 4px;

        li {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--grey-4);
          padding: 16px;
          border-radius: 4px;
          margin: 15px 0;

          h2 {
            font-size: 14px
          }

          .groupButtons {
            display: flex;
            align-items: center;

            p {
              margin-right: 10px;
              color: var(--grey-1);
            }

            button {
              border: none;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 20px;
              background: none;
              cursor: pointer;
            }

            .trash { color: #707070; margin-right: 10px}

            .edit { color: var(--color-primary); }
          }
        }
      }
    }

    .createTechs {
      margin-bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        cursor: pointer;
        background: var(--grey-3);
        padding: 10px;
        color: white;
        font-size: 20px;      
        border-radius: 4px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`

export default DashboardStyle