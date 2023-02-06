import { Navigate } from "react-router-dom";
import { Box, Button, Heading, Link, Text, useId } from "@chakra-ui/react";

import Banner from "../components/Banner";
import Loader from "../components/Loader";
import Section from "../components/Section";

import useHome from "../hooks/useHome";
import useMovieRandom from "../hooks/useMovieRandom";

import { SECTIONS } from "../const/app";

const Home = () => {
  const { sections: data, error, isLoading } = useHome();
  const sections = !isLoading && data.map((section, i) => ({ ...SECTIONS[i], section }));

  const { loading: loadingMovieRandom, movie: movieRandom } = useMovieRandom()
  const id = useId();

  if (isLoading) return <Loader />;

  if (error) {
    if (error.statusCode === 404) return <Navigate to='/404' />;

    return <Heading size='md'> {error.message} </Heading>;
  }

  return  (
    <>
      <Banner backdrop={movieRandom?.backdrop_path} display='flex' justifyContent='start' alignItems='center'>
        <Box zIndex={10} m={6} mt={10} maxW="container.lg" position='relative'>
        
          {!loadingMovieRandom && 
            <Box w={"80%"}>
                  
              <Heading as='h1' fontSize={{ base: '3xl' ,sm: '4xl', md: '5xl', lg: '6xl' }} fontWeight='extrabold'>
                {movieRandom?.title ?? movieRandom?.original_title}
              </Heading>

              <Text as='span' fontFamily='Georgia, serif' fontSize={{ base: '1rem', sm: "1.2rem" }} color="gray.300" >
                <Text ml={1} as='span' fontStyle='italic'>  by </Text>
                
                <Text ml={1} as='span'>  {movieRandom?.director?.name} </Text>
              </Text>
              
              <Text my={"5"}  mx='auto' className='ellipsis ellipsis-4' color="gray.200" fontSize={{ "base": '.9rem', "sm": '1rem', "md": "1.2rem" }} position='relative'>
                {movieRandom?.overview}
              </Text> 

              <Button
                as={Link}
                textTransform="uppercase"
                size={{ "base": 'sm', "md": 'md', "lg": "lg" }}
                colorScheme="green"
                variant="solid"
                href={`#${id}-see-more-movies`}
                _hover={{ color: 'gray.700' }}
              >
                Ver mas series y peliculas
              </Button>
          </Box>
          }
        
          
        </Box>
      </Banner>

      <Box id={`${id}-see-more-movies`} ></Box>
      {sections.map(({ title, link, section, size }) => (
        <Section
          key={title}
          title={title}
          link={link}
          section={section}
          size={size}
        />
      ))}
    </>
  );
};

export default Home;
