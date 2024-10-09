import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const handleSearching = (e: FormEvent) => {
    e.preventDefault();
    if (ref.current) setSearchText(ref.current.value);
  };

  return (
    <form onSubmit={(e) => handleSearching(e)}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games ..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
