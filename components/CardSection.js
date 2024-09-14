// import React from 'react';
// import { Container, Grid, Paper, Typography } from '@mui/material';
// import flowerImage from '../Asset/flower2.png';
// import fruitImage from '../Asset/fruit.png';
// import leafImage from '../Asset/Leaf2.png';
// import barkImage from '../Asset/Bark1.png';

// const CardSection = ({ cards, handleCardClick }) => {
//   return (
//     <Container sx={{
//       marginTop: '100px',
//       marginBottom: '100px',
//       // background: '#030202, 
//     }}>
//       <Typography
//         variant="h3"
//         component="h2"
//         gutterBottom
//         sx={{
//           textAlign: 'center',
//           fontWeight: 'bold',
//           fontFamily: 'Poppins, sans-serif',
//           color: 'linear-gradient(135deg, #ff9a9e 10%, #fad0c4 100%)',
//           textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//         }}
//       >
//         Make Your Plant Selections
//       </Typography>
//       <Typography
//         variant="body1"
//         component="p"
//         sx={{
//           textAlign: 'center',
//           marginBottom: '40px',
//           fontFamily: 'Poppins, sans-serif',
//           color: '#1D5FA1',
//           textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
//         }}
//       >
//         "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {cards.map((card, index) => {
//           let cardImage;
//           switch (card.name) {
//             case 'Flower':
//               cardImage = flowerImage;
//               break;
//             case 'Fruit':
//               cardImage = fruitImage;
//               break;
//             case 'Leaf':
//               cardImage = leafImage;
//               break;
//             case 'Bark':
//               cardImage = barkImage;
//               break;
//             default:
//               cardImage = "https://via.placeholder.com/150";
//           }

//           return (
//             <Grid item key={index} xs={12} sm={6} md={3}>
//               <Paper
//                 elevation={5}
//                 sx={{
//                   textAlign: 'center',
//                   padding: '8px',
//                   background: 'linear-gradient(180deg, #A8F2E7 10%, #5151e5 100%)',
//                   cursor: 'pointer',
//                   borderRadius: '15px',
//                   boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
//                   '&:hover': {
//                     // background: 'linear-gradient(135deg, #ff9a9e 10%, #fad0c4 100%)',
//                     color: '#fff',
//                     transform: 'scale(1.07) rotate(0deg)',
//                     boxShadow: '0 12px 25px rgba(0, 0, 0, 0.3)',
//                   },
//                   transition: 'transform 0.4s, background 0.4s, box-shadow 0.4s',
//                 }}
//                 onClick={() => handleCardClick(card.route)}
//               >
//                 <img
//                   src={cardImage}
//                   alt={card.name}
//                   style={{
//                     marginBottom: '20px',
//                     width: '100%',
//                     borderRadius: '15px',
//                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//                     transition: 'transform 0.4s',
//                     '&:hover': {
//                       transform: 'scale(1.1)',
//                     },
//                   }}
//                 />
//                 <Typography
//                   variant="h6"
//                   component="div"
//                   sx={{
//                     fontWeight: 'bold',
//                     fontFamily: 'Poppins, sans-serif',
//                     color: '#fff',
//                     textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
//                   }}
//                 >
//                   {card.name}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   component="p"
//                   sx={{
//                     fontFamily: 'Poppins, sans-serif',
//                     color: '#f0f0f0',
//                     fontSize: '0.9rem',
//                     marginTop: '10px',
//                   }}
//                 >
//                   I am putting myself to the fullest possible use, which is all I think any conscious entity can ever
//                   hope to do.
//                 </Typography>
//               </Paper>
//             </Grid>
//           );
//         })}
//       </Grid>

//     </Container>
//   );
// };

// export default CardSection;
import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import flowerImage from '../assets/FLOWER.png';
import fruitImage from '../assets/FRUIT.png';
import leafImage from '../assets/LEAF.png';
import barkImage from '../assets/BARK.png';

const CardSection = ({ cards, handleCardClick }) => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: '100px', marginBottom: '100px' }}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Poppins, sans-serif',
          color: '#000',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          padding: '0 16px', // Added padding
        }}
      >
        Make Your Plant Selections
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          textAlign: 'center',
          marginBottom: '90px',
          fontFamily: 'Poppins, sans-serif',
          color: '#1D5FA1',
          textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
          padding: '0 16px', // Added padding
        }}
      >
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
      </Typography>
      <Grid container spacing={4} justifyContent="space-between">
        {cards.map((card, index) => {
          let cardImage;
          switch (card.name) {
            case 'Flower':
              cardImage = flowerImage;
              break;
            case 'Fruit':
              cardImage = fruitImage;
              break;
            case 'Leaf':
              cardImage = leafImage;
              break;
            case 'Bark':
              cardImage = barkImage;
              break;
            default:
              cardImage = "https://via.placeholder.com/150";
          }

          return (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Paper
                elevation={5}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 0,
                  background: '#fff',
                  cursor: 'pointer',
                  borderRadius: '10px',
                  border: '1.25px solid #B2F8DA', 
                  boxShadow: '0 20px 18px rgba(0, 0, 0, 0.4)',
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                  transition: 'box-shadow 0.3s',
                }}
                onClick={() => handleCardClick(card.route)}
              >
                <img
                  src={cardImage}
                  alt={card.name}
                  style={{
                    width: '100%',
                    height: '200px', // Set a fixed height for images
                    objectFit: 'cover',
                    borderRadius: '10px 10px 0 0',
                  }}
                />
                <div style={{ padding: '16px', width: '100%' }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Poppins, sans-serif',
                      color: '#000',
                      textAlign: 'center', // Center-aligned text
                      padding: '0 16px', // Added padding
                    }}
                  >
                    {card.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                      color: '#555',
                      fontSize: '0.9rem',
                      marginTop: '10px',
                      textAlign: 'center', // Center-aligned text
                      padding: '0 16px', // Added padding
                    }}
                  >
                    I am putting myself to the fullest possible use, which is all I think any conscious entity can ever hope to do.
                  </Typography>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardSection;
