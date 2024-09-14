import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import heroSectionVideo from '../Asset/heroSectionVideo.mp4';
import { TypeAnimation } from 'react-type-animation';

// const glow = keyframes`
//   0% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #1B1C1B, 0 0 40px #1B1B1B, 0 0 50px ##1B1C1B, 0 0 60px ##1B1C1B, 0 0 70px ##1B1C1B; }
//   100% { text-shadow: 0 0 20px #fff, 0 0 30px ##1B1C1B, 0 0 40px #1B1B1B, 0 0 50px #1B1B1B, 0 0 60px #1B1B1B, 0 0 70px #1B1B1B, 0 0 80px #1B1B1B; }
// `;

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '50vh',
        overflow: 'hidden',
        textAlign: 'center',
        color: '#fff',
        padding: '100px 0',
      }}
    >
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -1,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <source src={heroSectionVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      
      <Container>
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Poppins, sans-serif',
            // animation: `${glow} 1.5s infinite alternate`,
            fontSize: '100px',
            marginTop: '70px',
          }}
        >
          Aranya
        </Typography>
        {/* <TypeAnimation
          sequence={[
            'Unlock the power of data-driven insights, tailored for a rapidly evolving digital landscape.',
            2000,
            'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.',
          ]}
          wrapper="Typography"
          cursor={true}
          repeat={Infinity}
          style={{
            fontFamily: 'Poppins, sans-serif',
            textShadow: '1px 2px 8px rgba(0, 0, 0, 0.3)',
            animation: 'fadeIn 4s ease-in-out',
            marginBottom: '40px',
            fontSize: '500px',
          }}
        /> */}


<Typography
          variant="h6"
          component="div"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            textShadow: '1px 2px 8px rgba(0, 0, 0, 0.3)',
            animation: 'fadeIn 4s ease-in-out',
            marginBottom: '40px',
            fontSize: '25px', // Adjust the font size here
          }}
        >
          <TypeAnimation
            sequence={[
              'Unlock the power of data-driven insights, tailored for a rapidly evolving digital landscape.',
              2000,
              'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.',
            ]}
            cursor={true}
            repeat={Infinity}
          />
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;



















// 

// import React from 'react';
// import { Container, Box, Typography, Button } from '@mui/material';
// import { keyframes } from '@mui/system';
// import heroSectionVideo from '../Asset/heroSectionVideo.mp4';

// const HeroSection = () => {
//   return (

//     <Box
//     sx={{
//       position: 'relative',
//       width: '100%',
//       height: '50vh',
//       overflow: 'hidden',
//       textAlign: 'center',
//       color: '#fff',
//       padding: '100px 0',
//     }}
//   >
//     <video
//       autoPlay
//       muted
//       loop
//       style={{
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         minWidth: '100%',
//         minHeight: '100%',
//         width: 'auto',
//         height: 'auto',
//         zIndex: -1,
//         transform: 'translate(-50%, -50%)',
//       }}
//     >
//       <source src={heroSectionVideo} type="video/mp4" />
//       {/* <source src="https://media.istockphoto.com/id/1134911129/video/the-sun-casts-its-beautiful-rays-into-the-fresh-green-forest-time-lapse.mp4?s=mp4-640x640-is&k=20&c=OTzLHat11FI5sIP8YcKyBGLRiduWHKJQ9qwuABguVNQ=" type="video/mp4" /> */}
//       Your browser does not support HTML5 video.
//     </video>
    
//     <Container>
//       <Typography
//         variant="h4"
//         component="h3"
//         gutterBottom
//         sx={{
//           fontWeight: 'bold',
//           fontFamily: 'Poppins, sans-serif',
//           textShadow: '2px 4px 10px rgba(0, 0, 0, 0.5)',
//           animation: 'fadeIn 4s ease-in-out',
//           fontSize: '90px', // Adjusted font size
//           marginTop: '70px',
//         }}
//       >
//         Aranya
//       </Typography>
//       <Typography
//         variant="h6"
//         component="p"
//         sx={{
//           marginBottom: '40px',
//           fontFamily: 'Poppins, sans-serif',
//           textShadow: '1px 2px 8px rgba(0, 0, 0, 0.3)',
//           animation: 'fadeIn 2.5s ease-in-out',
//         }}
//       >
//         Unlock the power of data-driven insights, tailored for a rapidly evolving digital landscape. There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.
//       </Typography>
//     </Container>
//   </Box>
  

//   );
// };

// export default HeroSection;











// // import React from 'react';
// // import { Container, Box, Typography, Button } from '@mui/material';
// // import { keyframes } from '@mui/system';

// // const float = keyframes`
// //   0%, 100% {
// //     transform: translateY(0);
// //   }
// //   50% {
// //     transform: translateY(-20px);
// //   }
// // `;

// // const HeroSection = () => {
// //   return (
// //     <Box
// //       sx={{
// //         background: 'linear-gradient(135deg, #2A2A72, #263035, #FF347E)',
// //         padding: '100px 0',
// //         textAlign: 'center',
// //         color: '#fff',
// //         position: 'relative',
// //         overflow: 'hidden',
// //       }}
// //     >
// //       <Box
// //         sx={{
// //           position: 'absolute',
// //           top: '-50px',
// //           left: '-50px',
// //           width: '300px',
// //           height: '300px',
// //           background: 'rgba(255, 255, 255, 0.2)',
// //           borderRadius: '50%',
// //           animation: `${float} 6s ease-in-out infinite`,
// //         }}
// //       />
// //       <Box
// //         sx={{
// //           position: 'absolute',
// //           bottom: '-50px',
// //           right: '-50px',
// //           width: '400px',
// //           height: '400px',
// //           background: 'rgba(255, 255, 255, 0.1)',
// //           borderRadius: '50%',
// //           animation: `${float} 8s ease-in-out infinite reverse`,
// //         }}
// //       />
// //       <Container>
// //         <Typography
// //           variant="h3"
// //           component="h3"
// //           gutterBottom
// //           sx={{
// //             fontWeight: 'bold',
// //             fontFamily: 'Poppins, sans-serif',
// //             textShadow: '2px 4px 10px rgba(0, 0, 0, 0.5)',
// //             animation: 'fadeIn 2s ease-in-out',
// //           }}
// //         >
// //           Modern Analytics for the Modern World
// //         </Typography>
// //         <Typography
// //           variant="h6"
// //           component="p"
// //           sx={{
// //             marginBottom: '40px',
// //             fontFamily: 'Poppins, sans-serif',
// //             textShadow: '1px 2px 8px rgba(0, 0, 0, 0.3)',
// //             animation: 'fadeIn 2.5s ease-in-out',
// //           }}
// //         >
// //           Unlock the power of data-driven insights, tailored for a rapidly evolving digital landscape.
// //         </Typography>
// //         <Button
// //           variant="contained"
// //           size="large"
// //           sx={{
// //             borderRadius: '50px',
// //             padding: '12px 30px',
// //             background: 'linear-gradient(45deg, #FF619B, #FFD700)',
// //             boxShadow: '0px 10px 20px rgba(255, 97, 155, 0.5)',
// //             transition: 'transform 0.3s ease-in-out',
// //             '&:hover': {
// //               transform: 'scale(1.1)',
// //               boxShadow: '0px 15px 25px rgba(255, 97, 155, 0.7)',
// //             },
// //           }}
// //         >
// //           We just raised a Series B
// //         </Button>
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default HeroSection;





// import React from 'react';
// import { Container, Box, Typography, Button } from '@mui/material';
// import { keyframes } from '@mui/system';
// import heroSectionVideo from '../Asset/h';
// // const float = keyframes`
// //   // 0%, 100% {
// //   //   transform: translateY(0);
// //   // }
// //   // 50% {
// //   //   transform: translateY(-20px);
// //   // }
// //   0% { transform: translate(0, 0); }
// //   20% { transform: translate(50px, -50px); }
// //   40% { transform: translate(-100px, 100px); }
// //   60% { transform: translate(50px, 50px); }
// //   80% { transform: translate(-200px, -50px); }
// //   100% { transform: translate(0, 0); }
// // `;

// const HeroSection = () => {
//   return (

//     <Box
//     sx={{
//       position: 'relative',
//       width: '100%',
//       height: '50vh',
//       overflow: 'hidden',
//       textAlign: 'center',
//       color: '#fff',
//       padding: '100px 0',
//     }}
//   >
//     <video
//       autoPlay
//       muted
//       loop
//       style={{
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         minWidth: '100%',
//         minHeight: '100%',
//         width: 'auto',
//         height: 'auto',
//         zIndex: -1,
//         transform: 'translate(-50%, -50%)',
//       }}
//     >
//       <source src="../" type="video/mp4" />
//       {/* <source src="https://media.istockphoto.com/id/1134911129/video/the-sun-casts-its-beautiful-rays-into-the-fresh-green-forest-time-lapse.mp4?s=mp4-640x640-is&k=20&c=OTzLHat11FI5sIP8YcKyBGLRiduWHKJQ9qwuABguVNQ=" type="video/mp4" /> */}
//       Your browser does not support HTML5 video.
//     </video>
//     {/* <Box
//       sx={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         background: 'linear-gradient(135deg, rgba(10, 0, 0, 0.5), rgba(10, 0, 0, 0.5), rgba(169, 35, 306, 0.5))',
//         zIndex: 1,
//       }}
//     /> */}
//     {/* <Box
//       sx={{
//         position: 'absolute',
//         top: '-20px',
//         left: '+70px',
//         width: '300px',
//         height: '300px',
//         background: 'rgba(255, 255, 255, 0.2)',
//         borderRadius: '50%',
//         animation: `${float} 7s ease-in-out infinite`,
//       }}
//     /> */}
//     {/* <Box
//       sx={{
//         position: 'absolute',
//         bottom: '-50px',
//         right: '-50px',
//         width: '400px',
//         height: '400px',
//         background: 'rgba(255, 255, 255, 0.1)',
//         borderRadius: '50%',
//         animation: `${float} 7s ease-in-out infinite reverse`,
//       }}
//     /> */}
//     <Container>
//       <Typography
//         variant="h4"
//         component="h3"
//         gutterBottom
//         sx={{
//           fontWeight: 'bold',
//           fontFamily: 'Poppins, sans-serif',
//           textShadow: '2px 4px 10px rgba(0, 0, 0, 0.5)',
//           animation: 'fadeIn 4s ease-in-out',
//           fontSize: '90px', // Adjusted font size
//         }}
//       >
//         Aranya
//       </Typography>
//       <Typography
//         variant="h6"
//         component="p"
//         sx={{
//           marginBottom: '40px',
//           fontFamily: 'Poppins, sans-serif',
//           textShadow: '1px 2px 8px rgba(0, 0, 0, 0.3)',
//           animation: 'fadeIn 2.5s ease-in-out',
//         }}
//       >
//         Unlock the power of data-driven insights, tailored for a rapidly evolving digital landscape. There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.
//       </Typography>
//     </Container>
//   </Box>
  
//   //   <Box
//   //   sx={{
//   //     background: 'linear-gradient(135deg, rgba(10, 0, 0, 0.5),rgba(10, 0, 0, 0.5), rgba(169, 35, 306, 0.5)), url("https://media.istockphoto.com/id/1134911129/video/the-sun-casts-its-beautiful-rays-into-the-fresh-green-forest-time-lapse.mp4?s=mp4-640x640-is&k=20&c=OTzLHat11FI5sIP8YcKyBGLRiduWHKJQ9qwuABguVNQ=")',
//   //     // backgroundRepeat: 'linear-gradient(135deg, rgba(10, 0, 0, 0.5),rgba(10, 0, 0, 0.5), rgba(169, 35, 306, 0.5)), url("https://th.bing.com/th/id/OIP.CxvK3t1-S9miUnONNka85gHaEo?rs=1&pid=ImgDetMain")',
//   //     backgroundSize: 'cover',
//   //     backgroundPosition: 'center',
//   //     padding: '100px 0',
//   //     textAlign: 'center',
//   //     color: '#fff',
//   //     position: 'relative',
//   //     overflow: 'hidden',
//   //   }}
//   //  >
//   //     <Box
//   //       sx={{
//   //         position: 'absolute',
//   //         top: '-20px',
//   //         left: '+70px',
//   //         width: '300px',
//   //         height: '300px',
//   //         background: 'rgba(255, 255, 255, 0.2)',
//   //         borderRadius: '50%',
//   //         animation: `${float} 7s ease-in-out infinite`,
//   //       }}
//   //     />
//   //     <Box
//   //       sx={{
//   //         position: 'absolute',
//   //         bottom: '-50px',
//   //         right: '-50px',
//   //         width: '400px',
//   //         height: '400px',
//   //         background: 'rgba(255, 255, 255, 0.1)',
//   //         borderRadius: '50%',
//   //         animation: `${float} 7s ease-in-out infinite reverse`,
//   //       }}
//   //     />
//   //     <Container>
//   //       <Typography
//   //         variant="h4"
//   //         component="h3"
//   //         gutterBottom
//   //         sx={{
//   //           fontWeight: 'bold',
//   //           fontFamily: 'Poppins, sans-serif',
//   //           textShadow: '2px 4px 10px rgba(0, 0, 0, 0.5)',
//   //           animation: 'fadeIn 4s ease-in-out',
//   //           fontSize: '90px', // Adjusted font size
//   //         }}
//   //       >
//   //         Aranya
//   //       </Typography>
//   //       <Typography
//   //         variant="h6"
//   //         component="p"
//   //         sx={{
//   //           marginBottom: '40px',
//   //           fontFamily: 'Poppins, sans-serif',
//   //           textShadow: '1px 2px 8px rgba(0, 0, 0, 0.3)',
//   //           animation: 'fadeIn 2.5s ease-in-out',
//   //         }}
//   //       >
//   //         Unlock the power of data-driven insights, tailored for a rapidly evolving digital landscape.There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.
//   //       </Typography>

//   //     </Container>
//   //   </Box>
//   );
// };

// export default HeroSection;


// import React from 'react';
// import { Container, Box, Typography } from '@mui/material';
// import { keyframes } from '@mui/system';
// import '../App.css'; // Make sure to create this CSS file
// import Treeinhand from '../assets/Tree-in-hand.png';

// const float = keyframes`
//   0%, 100% {
//     transform: translateY(0);
//   }
//   50% {
//     transform: translateY(-20px);
//   }
// `;

// const HeroSection = () => {
//   return (
//     <Box
//       sx={{
//         backgroundImage: 'linear-gradient(135deg, rgba(10, 0, 0, 0.5),rgba(10, 0, 0, 0.5), rgba(169, 35, 306, 0.5)), url("https://th.bing.com/th/id/OIP.CxvK3t1-S9miUnONNka85gHaEo?rs=1&pid=ImgDetMain")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: '100px 0',
//         textAlign: 'center',
//         color: '#fff',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '-20px',
//           left: '+70px',
//           width: '300px',
//           height: '300px',
//           background: 'rgba(255, 255, 255, 0.2)',
//           borderRadius: '50%',
//           animation: `${float} 2s ease-in-out infinite`,
//         }}
//       />
//       <Box
//         sx={{
//           position: 'absolute',
//           bottom: '-50px',
//           right: '-50px',
//           width: '400px',
//           height: '400px',
//           background: 'rgba(255, 255, 255, 0.1)',
//           borderRadius: '50%',
//           animation: `${float} 1.5s ease-in-out infinite reverse`,
//         }}
//       />
//       <Container>
//         <Typography
//           variant="h4"
//           component="h3"
//           gutterBottom
//           sx={{
//             fontWeight: 'bold',
//             fontFamily: 'Poppins, sans-serif',
//             textShadow: '2px 4px 10px rgba(0, 0, 0, 0.5)',
//             animation: 'fadeIn 2s ease-in-out',
//             fontSize: '90px', // Adjusted font size
//           }}
//         >
//           Aranya
//         </Typography>
//         <Typography
//           variant="h6"
//           component="p"
//           sx={{
//             marginBottom: '40px',
//             fontFamily: 'Poppins, sans-serif',
//             textShadow: '1px 2px 8px rgba(0, 0, 0, 0.3)',
//             animation: 'fadeIn 2.5s ease-in-out',
//           }}
//         >
//           Unlock the power of data-driven insights, tailored for a rapidly evolving digital landscape. There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.
//         </Typography>
//       </Container>
//     </Box>
//   );
// };



// const App = () => {
//   return (
//     <div>
//       <HeroSection />
//       {/* <Header /> */}
//     </div>
//   );
// };

// export default App;
