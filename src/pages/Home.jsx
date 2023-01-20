import Banner from "../components/Banner";
import Loader from "../components/Loader";
import Section from "../components/Section";

import useHome from "../hooks/useHome";
import { SECTIONS } from "../const/app";
import { Box, Button, Grid, GridItem, Heading, HStack, Link, Tag, Text, useId } from "@chakra-ui/react";
import Item from "../components/Item";
import useMovieRandom from "../hooks/useMovieRandom";

const Home = () => {
  const { sections: data, error, isLoading } = useHome();
  const sections = !isLoading && data.map((section, i) => ({ ...SECTIONS[i], section }));

  const { loading: loadingMovieRandom, movie: movieRandom } = useMovieRandom()
  const id = useId();

  return isLoading  ? (
    <Loader />
  ) : (
    <>
      <Banner backdrop={movieRandom?.backdrop_path}>
        <Box zIndex={10} maxW="container.lg" mt="7rem" mx="auto">
        
          {!loadingMovieRandom && 
            <Box textAlign='center'>
                  
            <Text>
              by
              <Text as='span' fontStyle='italic' fontFamily='serif' fontSize="1.5rem" color="gray.300" mx={2} >
                {movieRandom?.director?.name}
              </Text>
            </Text>

            <Heading as='h1' fontSize='6xl' fontWeight='extrabold'>
              {movieRandom?.title ?? movieRandom?.original_title}
            </Heading>

            
            <Text w={"75%"}my={"5"}  mx='auto' color="gray.300" fontSize="1.1rem">
              {movieRandom?.overview}
            </Text> 

            <Button
              as={Link}
               textTransform="uppercase"
              size="lg"
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
