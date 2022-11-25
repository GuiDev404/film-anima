import {
  AspectRatio,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  Spinner,
  Tag,
  Text,
} from "@chakra-ui/react";

import { FiExternalLink, FiPlus } from "react-icons/fi";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Item from "../components/Item";
import Loader from "../components/Loader";
import Section from "../components/Section";
import { API_KEY } from "../const/api";
import { useFetch } from "../hooks/useFetch";
import { minToHours, typeForApi } from "../utils";

const Details = () => {
  const { id } = useParams();
  const TYPE_FOR_API = typeForApi();
  console.log(TYPE_FOR_API);
  const ITEM = `https://api.themoviedb.org/3/${TYPE_FOR_API}/${id}?api_key=${API_KEY}`;
  const VIDEOS = `https://api.themoviedb.org/3/${TYPE_FOR_API}/${id}/videos?api_key=${API_KEY}`;
  const CREDITS = `https://api.themoviedb.org/3/${TYPE_FOR_API}/${id}/credits?api_key=${API_KEY}`;
  const RELATIONATED = `https://api.themoviedb.org/3/${TYPE_FOR_API}/${id}/similar?api_key=${API_KEY}`;

  const {
    data: itemData,
    isLoading: loadingData,
    error: errorData,
  } = useFetch({ url: ITEM });
  console.log({ ITEM });
  const {
    data: videoData,
    isLoading: loadingVideos,
    error: errorVideos,
  } = useFetch({ url: VIDEOS });

  return (
    <>
      {loadingData ? (
        <Loader />
      ) : (
        <Banner backdrop={itemData?.backdrop_path ?? itemData?.poster_path}>
          <Box zIndex={10} maxW="container.lg" mt="3rem" mx="auto">
            <Grid gridTemplateColumns="185px 1fr">
              <GridItem>
                <Item
                  noBorder
                  size="sm"
                  imageURL={itemData?.poster_path}
                  text=""
                  urlToDetails=""
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
                  {itemData?.title ??
                    itemData?.original_title ??
                    itemData?.name}
                </Heading>

                <Heading mb={2} color="white" opacity=".8" size="sm">
                  Ryusuke Hamaguchi
                  <Text as="span" mx={2}>
                    {" "}
                    ·{" "}
                  </Text>
                  {TYPE_FOR_API === "tv"
                    ? `${itemData?.number_of_seasons} seasons`
                    : minToHours(itemData?.runtime)}
                </Heading>

                <HStack spacing={2}>
                  {itemData?.genres?.map((genre) => (
                    <Tag
                      size="sm"
                      key={genre?.id}
                      colorScheme="green"
                      px={2.5}
                      py={1.5}
                    >
                      {genre?.name}
                    </Tag>
                  ))}
                </HStack>
              </GridItem>
            </Grid>

            <Text w={"85%"} color="gray.200" fontSize="1.1rem">
              {itemData?.overview}
            </Text>

            <HStack mt={4}>
              <Button
                textTransform="uppercase"
                fontSize="sm"
                size="md"
                colorScheme="green"
                variant="outline"
              >
                See trailer
              </Button>
              <IconButton
                colorScheme="green"
                aria-label="Add to favs"
                size="md"
                icon={<FiPlus fontSize="1.2rem" />}
              />
            </HStack>
          </Box>
        </Banner>
      )}

      <Box marginTop="-5rem" mb={10} className="row">
        <div className="col-md-3">
          <p className="fw-bold mb-0"> Pais </p>
          <p className="text-secondary" id="pais__origen">
            {" "}
            US{" "}
          </p>
        </div>
        <div className="col-md-3">
          <p className="fw-bold mb-0"> Idioma original </p>
          <p className="text-secondary" id="idioma__original">
            {" "}
            Ingles{" "}
          </p>
        </div>
        <div className="col-md-3">
          <p className="fw-bold mb-0"> Fecha estreno </p>
          <p className="text-secondary" id="fecha__estreno">
            {" "}
            2022-09-08{" "}
          </p>
        </div>
        <div className="col-md-3">
          <p className="fw-bold mb-0"> Recaudacion </p>
          <p className="text-secondary" id="recaudacion">
            {" "}
            $2100000{" "}
          </p>
        </div>
      </Box>

      <Box as="section">
        <Heading size="lg" mb={5}>
          {" "}
          Trailers availables{" "}
        </Heading>
        {loadingVideos ? (
          <Spinner />
        ) : (
          <Box
            spacing={2}
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(200px, 49%))"
            gap={2}
          >
            {videoData?.results?.length === 0 && (
              <Text color="gray.400" fontSize="lg">
                No trailers available. Search in{" "}
                <Link
                  href={`https://www.youtube.com/results?search_query=Trailer+${
                    itemData.original_title
                  } (${new Date("2010-12-13").getFullYear()})`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                  <Icon mt={2} mx={1} fontSize="sm" as={FiExternalLink} />
                </Link>
              </Text>
            )}
            {videoData?.results
              .filter((_, idx) => idx < 2)
              .map((video) => (
                <AspectRatio
                  maxW={"100%"}
                  height={400}
                  ratio={1}
                  key={video?.id}
                >
                  <Box
                    as="iframe"
                    rounded="md"
                    title={video?.name}
                    src={`https://www.youtube.com/embed/${video?.key}`}
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></Box>
                </AspectRatio>
              ))}
          </Box>
        )}
      </Box>

      <Section
        title={"Relationed"}
        link={TYPE_FOR_API === "movie" ? "/movies" : "/series"}
        urlToFetch={RELATIONATED}
      />
    </>
  );
};

export default Details;
