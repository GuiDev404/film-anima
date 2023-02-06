import { Navigate, useParams } from "react-router-dom";
import { AspectRatio, Box, Button, CircularProgress, Grid, GridItem, Heading, HStack, Icon, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Stat, StatHelpText, StatLabel, StatNumber, Tag, Text, VStack } from "@chakra-ui/react";
import { FiExternalLink, FiPlus, FiEye } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";

import Banner from "../components/Banner";
import Item from "../components/Item";
import Loader from "../components/Loader";
import Section from "../components/Section";

import useDetails from "../hooks/useDetails";
import { minToHours } from "../utils";
import { useEffect } from "react";
import useSheetList from "../hooks/useSheetList";
import useSheetView from "../hooks/useSheetView";

const Details = () => {
  const { id } = useParams();
  const { details, error, isLoading, type } = useDetails({ id })
  const { toggle, existInList } = useSheetList();
  const { closeSheet } = useSheetView()

  const [ detailData, credits, videos, relationed ] = details; 

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [id])

  useEffect(()=> {
    closeSheet()
  }, [id])

  const [director = {}] = credits?.crew
    .filter((c) => c.job === "Director" || c.known_for_department === 'Directing') ?? [];

  const actores = credits?.cast?.filter((_, idx)=> idx < 9);
  const detailTitle = detailData?.title ??  detailData?.original_title ??  detailData?.name;
  
  // FUNCIONALIDAD DE LAS LISTAS
  const detailToList = { 
    title: detailTitle ,
    poster_path: detailData?.poster_path,
    urlToDetails: location.pathname,
    id: detailData?.id
  }

  const existInWatches = existInList('watches', detailData?.id);
  const existInWatchesList = existInList('watchlist', detailData?.id);

  const handleToggleWatch = ()=> {
    if(existInWatchesList){
      toggle({ listName: 'watchlist', item: detailToList })
    }

    toggle({ listName: 'watches', item: detailToList })
  }

  const handleToggleWatchList = ()=> {
    if(existInWatches){
      toggle({ listName: 'watches', item: detailToList })
    }
    toggle({ listName: 'watchlist', item: detailToList })
  }

  // VISTAS
  if(isLoading && !detailData) return <Loader />

  if(error) {
    if(error.statusCode === 404) return <Navigate to='/404' />

    return <Heading size='md'> {error.message} </Heading>
  }

  return <> 
    <Banner backdrop={detailData?.backdrop_path ?? detailData?.poster_path} >
      <Box zIndex={10} maxW="container.lg" mt="5rem" mx="auto" position='relative' minHeight='100vh' mb={5}>
        <Grid gridTemplateColumns={{ base: '1fr', md: "185px 1fr" }}>
          <GridItem>
            <Item
              noBorder
              size="sm"
              imageURL={detailData?.poster_path}
              text=""
              urlToDetails=""
            />
          </GridItem>
          <GridItem ml={2} alignSelf="end" mb={5}>
            <Heading
              fontWeight={900}
              as="h3"
              mb={2}
              size="2xl"
              color="white.400"
            >
              {detailTitle}
            </Heading>

            <Heading mb={2} color="white" opacity=".8" size="sm">
              {director?.name && 
                <>
                  {director?.name}
                  <Text as="span" mx={2}> ·  </Text>
                </>
              }
              
              {type === "tv"
                ? `${detailData?.number_of_seasons} seasons`
                : minToHours(detailData?.runtime)}
            </Heading>

              <HStack spacing={2} flexWrap='wrap' rowGap={2}>
                {detailData?.genres?.map((genre) => (
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

        <Text w={"85%"} color="gray.200" fontSize="1.1rem" position='relative'>
          {detailData?.overview}
        </Text>

        <HStack mt={4}>

          <Button
            as={Link}
            textTransform="uppercase"
            fontSize="sm"
            size="md"
            colorScheme="green"
            variant="outline"
            href='#trailer'
          >
            Ver trailer
          </Button>

          <Menu>
            <MenuButton
              colorScheme="green"
              as={IconButton}
              aria-label='Options'
              icon={<FiPlus fontSize="1.2rem" />}
              variant='solid'
            />
            <MenuList>
              <MenuItem icon={<FiEye fontSize="1rem" />} onClick={handleToggleWatch}>
                {existInWatches ? 'Remove' : 'Watch'}
              </MenuItem>
              <MenuItem icon={<MdOutlineWatchLater fontSize="1rem" />} onClick={handleToggleWatchList}>
                {existInWatchesList ? 'Remove watchlist' : 'Add to watchlist'}
              </MenuItem>
            </MenuList>
          </Menu>

        </HStack>
      </Box>
    </Banner>
  
        {actores && actores.length > 0 &&
          <>
            <Heading size="md" mt={5}> Casting </Heading>
            <Box as='section' zIndex={9999} bg='gray.900' boxShadow='xl' borderRadius='md' py={5} px={4} mt={2} mb="3rem" >
              <HStack  gap={4} justifyContent='flex-start' alignItems='flex-start' display='flex' flexWrap='wrap'>
                {actores && actores?.map(actor=> {

                  return <VStack key={actor.id} maxW='100px' >
                    {actor.profile_path 
                      ? <Image alignSelf='center' src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`} alt={actor.name} title={`${actor.name} como ${actor.character}`} m={0} objectFit='cover'  borderRadius='md' />
                      : <Box w='100px' borderRadius='md' as='section' bg='gray.800' h='150px'>{""}</Box>
                    }
                    <Box alignSelf='flex-start'>
                      <Text> {actor.name}  </Text>
                      <Text fontSize='xs'  color='gray.400'> {actor.character}  </Text>
                    </Box>
                  </VStack>
                })}
              </HStack>
            </Box>
          </>
        }
    

        {Boolean(detailData) &&
          <>
            <Heading size="md" mt="5rem"> Mas información </Heading>
            <Box as='section' zIndex={9999} bg='gray.900' boxShadow='xl' borderRadius='md' py={5} px={4} my=".5rem" mb="3rem">

            <HStack as='dl' spacing={5} zIndex={9999} alignItems='flex-start' flexWrap='wrap' display='flex' borderRadius='md'  >
            
                <Box>
                  <Stat>
                    <StatLabel>
                      <Tag colorScheme='green' size='sm'>Score</Tag>
                    </StatLabel>
                    <StatNumber>{detailData?.vote_average.toFixed(2)}</StatNumber>
                    <StatHelpText fontSize='xs' color='gray.500'>Votos {detailData?.vote_count}</StatHelpText>
                  </Stat>
                </Box>
                
                {detailData?.production_countries[0]?.name &&
                  <Box>
                    <Box as='dt' fontWeight='bold'> Pais </Box>
                    <Box as='dd' fontWeight='500' fontSize='sm' color='gray.500'> 
                      {detailData.production_countries[0].name}
                    </Box>
                  </Box>
                }
            
                {detailData?.original_language &&
                  <Box>
                    <Box as='dt' fontWeight='bold'> Lenguaje original </Box>
                    <Box as='dd' fontWeight='500' fontSize='sm' color='gray.500' > 
                      {detailData.original_language.toUpperCase()}
                    </Box>
                  </Box>
                }

                {detailData?.release_date &&
                  <Box>
                    <Box as='dt' fontWeight='bold'> Fecha de lanzamiento </Box>
                    <Box as='dd' fontWeight='500' fontSize='sm' color='gray.500'> {detailData?.release_date} </Box>
                  </Box>
                }
            
                {detailData?.revenue &&
                  <Box>
                    <Box as='dt' fontWeight='bold'> Recaudación </Box>
                    <Box as='dd' fontWeight='500' fontSize='sm' color='gray.500' > ${ detailData?.revenue } </Box>
                  </Box>
                }
                
            </HStack>
            
            </Box>
          </>
      }

      {/* TRAILERS SECTION */}
      
      <Box as="section">
        <Heading size="lg" mb={5} id='trailer'> Trailers disponibles </Heading>
    
        <Box
          spacing={2}
          display="grid"
          gridTemplateColumns={{ base: '1fr', md: 'repeat(auto-fit, minmax(200px, 49%))' }}
          gap={2}
        >
          {videos?.results?.length === 0 && (
            <Text color="gray.400" fontSize="lg">
              No hay trailers disponibles. Buscar en{" "}
              <Link
                href={`https://www.youtube.com/results?search_query=Trailer+${
                  detailData?.original_title ?? detailData?.title ?? detailData?.name
                } (${detailData?.release_date ? new Date(detailData.release_date).getFullYear() : ''})`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
                <Icon mt={2} mx={1} fontSize="sm" as={FiExternalLink} />
              </Link>
            </Text>
          )}
          {videos?.results
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
      </Box>

      {/* RELATIONATED SECTION */}
      {isLoading
        ? <Loader />
        : relationed && <Section
            title={"Relacionadas"}
            link={type === 'movie' ? "/movies" : "/series"}
            section={relationed?.results}
          />
      }
     
  </>

};

export default Details;
