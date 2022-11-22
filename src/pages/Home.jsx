import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Section from "../components/Section";
import { HOME_SECTIONS } from "../const/api";
import { useFetch } from "../hooks/useFetch";

const beforeHeader = {
  content: '""',
  position: "absolute",
  top: "-20px",
  left: 0,
  width: "100%",
  minHeight: "98vh",
  background:
    "url(https://cloudfront-us-east-1.images.arcpublishing.com/copesa/VYDQJXTQQBEHJGLJ6THDP3NESM.jpg) no-repeat center/cover",
  filter: "contrast(100%)",
  boxShadow: "none",
};

const Home = () => {
  return (
    <>
      <Box as="header" _before={beforeHeader} height="100vh">
        <Box
          position="absolute"
          left="0"
          w="100%"
          top="0"
          boxShadow="21px 0 50px 45px #000"
          height={0}
        ></Box>
        <Box
          top="89vh"
          left="0"
          w="100%"
          boxShadow="21px 62px 80px 100px #0d0d0d"
          position="absolute"
        ></Box>
        <Box
          top="0"
          left="0"
          w="0"
          h="89vh"
          boxShadow="21px 62px 90px 90px #0d0d0d"
          position="absolute"
        ></Box>
        <Box
          top="0"
          right="0"
          w="0"
          h="89vh"
          boxShadow="21px 62px 90px 90px #0d0d0d"
          position="absolute"
        ></Box>
      </Box>

      {/*     
      <Section title="Trending Movies" link="/movies">
        {trending_movies_loading ? (
          <Box h='100%' w='100%' display='flex' alignItems='center' justifyContent='center'> 
            <Spinner />
          </Box>
        ) : (
          <Carousel>
            {trending_movies?.results.map((item) => (
              <CarouselItem
                key={item.id}
                urlToDetails={`movies/${item.id}`}  
                text={item?.title ?? item?.name ?? item?.original_name ?? ''}
                imageURL={item.poster_path}
              />
            ))}
          </Carousel>
        )}
      </Section>
    
      <Section title="Top Rated Movies" link="/movies">
        {top_rated_movies_loading ? (
           <Box h='100%' w='100%' display='flex' alignItems='center' justifyContent='center'> 
            <Spinner />
          </Box>
        ) : (
          <Carousel>
            {top_rated_movies?.results.map((item) => (
              <CarouselItem
                key={item.id}
                urlToDetails={`movies/${item.id}`}  
                text={item?.title ?? item?.name ?? item?.original_name ?? ''}
                imageURL={item.poster_path}
              />
            ))}
          </Carousel>
        )}
      </Section>

      <Section title="Top Rated Series" link="/movies">
        {top_rated_tv_loading ? (
           <Box h='100%' w='100%' display='flex' alignItems='center' justifyContent='center'> 
            <Spinner />
          </Box>
        ) : (
          <Carousel>
            {top_rated_tv?.results.map((item) => (
              <CarouselItem
                key={item.id}
                urlToDetails={`series/${item.id}`}  
                text={item?.title ?? item?.name ?? item?.original_name ?? ''}
                imageURL={item.poster_path}
              />
            ))}
          </Carousel>
        )}
      </Section>
     */}

      {HOME_SECTIONS.map((url, idx) => (
        <Section key={idx} title="Popular Series" link="/movies" urlToFetch={url} />
      ))}

<Section title="Lorem" link="/">
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sit, atque labore culpa possimus earum! Doloribus magnam harum accusantium nihil minima laboriosam reprehenderit quaerat consequatur, corrupti magni nemo nulla fugiat.</p>
  </Section> 
    </>
  );
};

export default Home;
