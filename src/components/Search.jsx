import {
  Button,
  Box,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword) {
      navigate(`search/${keyword}`);
    }
  };

  const handleOnBlur = ()=> {
    if(!keyword && location.pathname.includes('search')){
      navigate(`/movies`);
    }
  }

  return (
    <Box as="form" mx="auto" my={10} w={{ "md": "50%", "sm": "75%" }} onSubmit={handleSubmit}>
      <InputGroup size="lg">
        <Input
          onBlur={handleOnBlur}
          type="text"
          _focusVisible={{ boxShadow: "green.200", borderColor: "green.200" }}
          value={keyword}
          onChange={handleChange}
          // errorBorderColor={!keyword ? 'red.300' : 'none'}
          placeholder="Enter keyword..."
        />
        {/* <InputRightAddon as='button' type="submit" children={<Icon as={BiSearchAlt2} fontSize="2xl" />} /> */}

        <InputRightElement width="5.5rem" pr=".5rem">
          <Button h="2rem" size="md" type="submit">
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Search;
