import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

const Search = () => {
  const resolvedPath =  useResolvedPath('./', { relative: 'route' })
  const match = useMatch(`${resolvedPath.pathname}search/:keyword`)
  const [keyword, setKeyword] = useState(match?.params?.keyword ?? "");
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

  const handleOnBlur = () => {
    const noInputSearch = Boolean(!keyword && match);

    if (noInputSearch) {
      const [ media ] = location.pathname.split('/', 2).filter(Boolean);
      navigate(`${resolvedPath?.pathname ?? media}`);
    }
  };

  return (
    <Box
      as="form"
      mx="auto"
      my={10}
      w={{ md: "50%", sm: "75%" }}
      onSubmit={handleSubmit}
    >
      <InputGroup size="lg">
        <Input
          type="text"
          _focusVisible={{ boxShadow: "green.200", borderColor: "green.200" }}
          value={keyword}
          onBlur={handleOnBlur}
          onChange={handleChange}
          placeholder="Ingrese su busqueda"
        />

        <InputRightElement width="5.5rem" pr=".5rem">
          <Button h="2rem" size="md" type="submit">
            Buscar
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Search;
