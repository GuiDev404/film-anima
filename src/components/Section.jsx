import { Box, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Carousel from "./Carousel";
import CarouselItem from "./Item";

const Section = ({ title, link, section, children, ...props }) => {
 
  return (
    <Box as="section" my={50} minHeight="350px" height="auto">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Heading size="lg" fontWeight="bold">
          {" "}
          {title}{" "}
        </Heading>
        {Boolean(link) && (
          <Button as={Link} to={link} colorScheme="green" size="sm">
            {" "}
            Ver Mas{" "}
          </Button>
        )}
      </Box>

      {children 
        ? children
        : 
        <Carousel>
          {section.map((item) => (
            <CarouselItem
              size={props?.size}
              key={item.id}
              urlToDetails={`${link}/${item.id}`}
              text={item?.title ?? item?.name ?? item?.original_name ?? ""}
              imageURL={item?.poster_path}
            />
          ))}
        </Carousel>
      }

 
      
    </Box>
  );
};

export default Section;
