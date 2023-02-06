import { Image, Link, Text, VStack } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";
import noPoster from "../assets/no-poster.png";
import { CARD_SIZES } from "../const";

const Item = ({ text, imageURL, urlToDetails, size = "md", noBorder } = {}) => {
  const { h, maxW } = CARD_SIZES[size];

  return (
    <VStack
      height="100%"
      alignItems="start"
      _hover={{
        "& img": { borderColor: noBorder ? "transparent" : "green.400" },
      }}
    >
      <Link as={LinkRouter} to={urlToDetails} transition="none">
        <Image
          border={`${noBorder ? 0 : "3px"} solid transparent`}
          src={imageURL ? `https://image.tmdb.org/t/p/w342${imageURL}` : noPoster}
          alt={text}
          rounded="md"
          shadow={noBorder ? "md" : "none"}
          height={h}
          maxWidth={maxW}
        />
        <Text py={2} fontSize={size} maxW={maxW} >
          {text}
        </Text>
      </Link>
    </VStack>
  );
};

export default Item;
