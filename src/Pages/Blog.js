
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Location from "../Components/Location";
import DateCreation from "../Components/DateCreation";
import Tags from "../Components/Tags";
import CardBlog from "../Components/CardBlog";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #D9D9D9;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const GapContainer = styled.div`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

function Blog({ initialData }) {

  const [dateFilter, setDateFilter] = useState("");
  const [filteredData, setFilteredData] = useState(Array.isArray(initialData) ? initialData : []);

  const handleDateChange = (event) => {
    const { value } = event.target;
    console.log("Selected date:", value); // Log the selected date
    setDateFilter(value);

    if (Array.isArray(initialData)) {
      const filtered = initialData.filter((item) => {
        console.log("Item date:", item.date); // Log the date of each item
        return item.date === value;
      });

      console.log("Filtered data:", filtered); // Log the filtered data
      setFilteredData(filtered);
    } else {
      console.error("Initial data is not an array.");
      setFilteredData([]);
    }
  };

  return (
    <div>
      <img src="images/Travel Tips for you.png" alt="" style={{ width: "100%" }} />
      <GlobalStyle />
      <Container>
        <GapContainer>
          <Location />
          <DateCreation value={dateFilter} onChange={handleDateChange} />
          <Tags />
        </GapContainer>
        <GapContainer>
          {/* Pass an empty array if data is not iterable */}
          <CardBlog data={filteredData} />
        </GapContainer>
      </Container>
    </div>
  );
}

export default Blog;































// import React from "react";
// import { useState } from "react";
// import Location from "../Components/Location";
// import DateCreation from "../Components/DateCreation";
// import Tags from "../Components/Tags";
// import CardBlog from "../Components/CardBlog";
// import { createGlobalStyle } from "styled-components";
// import styled from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: #D9D9D9;
//     margin: 0;
//     padding: 0;
//     font-family: Arial, sans-serif;
//   }
// `;

// const Container = styled.div`
//   padding: 20px;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   flex-wrap: wrap;
// `;

// const GapContainer = styled.div`
//   margin-top: 20px;
//   justify-content: center;
//   align-items: center;
//   flex: 1;
// `

// function Blog({ initialData }) {

//   const [dateFilter, setDateFilter] = useState('');
//   const [filteredData, setFilteredData] = useState(initialData);

//   const handleDateChange = (event) => {
//     const { value } = event.target;
//     setDateFilter(value);

//     const filtered = initialData.filter(item => {
//       return item.date === value;
//     });

//     setFilteredData(filtered);
//   };

//   return (
//     <div>
//       <img src='images/Travel Tips for you.png' alt='' style={{ width: '100%' }} />
//       <GlobalStyle />
//       <Container>
//         <GapContainer>
//           <Location />
//           <DateCreation value={dateFilter} onChange={handleDateChange} />
//           <Tags />
//         </GapContainer>
//         <GapContainer>
//           <CardBlog data={filteredData} />
//         </GapContainer>
//       </Container>
//     </div>
//   )
// }

// export default Blog;
