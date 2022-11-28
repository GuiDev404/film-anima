import Banner from "../components/Banner";
import Loader from "../components/Loader";
import Section from "../components/Section";

import useHome from "../hooks/useHome";
import { SECTIONS } from "../const/app";

const Home = () => {
  const { sections: data, error, isLoading, movieRandom } = useHome();
  const sections = !isLoading && data.map((section, i) => ({ ...SECTIONS[i], section }));

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Banner backdrop={movieRandom?.backdrop_path}>
        {/* <Box zIndex={10} maxW="container.lg" mt="7rem" mx="auto">
          <Grid gridTemplateColumns="185px 1fr">
            <GridItem>
              <Item
                size="sm"
                imageURL="https://image.tmdb.org/t/p/original//ekstpH614fwDX8DUln1a2Opz0N8.jpg"
                text=""
                urlToDetails="/movies/278"
              />
            </GridItem>
            <GridItem ml={2} alignSelf="end" mb={5}>
              <Heading
                ml={-2}
                fontWeight={900}
                as="h3"
                mb={2}
                size="2xl"
                color="white.400"
              >
                Taxi Driver
              </Heading>
              <Heading mb={2} color="white" opacity=".8" size="md" as="h3">
                Ryusuke Hamaguchi · Crimen, Drama
              </Heading>

              <HStack spacing={2}>
                <Tag colorScheme="green" px={2.5} py={1.5}>
                  adulticon SI
                </Tag>
                <Tag colorScheme="green" px={2.5} py={1.5}>
                  Drama
                </Tag>
              </HStack>
            </GridItem>
          </Grid>

          <Text w={"85%"} color="gray.300" fontSize="1.1rem">
            Un veterano con problemas de salud mental trabaja como taxista en
            Nueva York, donde su percepción de la decadencia a su alrededor
            alimenta su deseo de violencia.
          </Text>

          <Button
            textTransform="uppercase"
            fontSize="sm"
            size="md"
            colorScheme="green"
            variant="outline"
          >
            See now
          </Button>
        </Box> */}
      </Banner>

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
