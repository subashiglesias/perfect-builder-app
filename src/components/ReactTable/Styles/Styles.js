import styled from "styled-components";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    thead tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
    }

    th {
        background-color: #282c34;
        color: #ffffff;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
    },
    td {
      padding: 12px 15px;

      :last-child {
        border-right: 0;
      }
    }
    
    th:last-of-type {
        padding-left:1rem;
        padding-right:2rem;
    }
    
    tbody tr {
    border-bottom: 1px solid #dddddd;
    }
    
    tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
    }
    
    tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
    }
    
    tbody tr.active-row {
    font-weight: bold;
    color: #009879;
    }
  }
`

export default Styles;