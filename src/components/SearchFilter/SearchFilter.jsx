import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filter/filter-slice";
import { selectFilter } from "../../redux/selectors";
import {
  Form,
  Label,
  Input,
  SearchFilterContainer,
  AddContact,
} from "./SearchFilter.style";

const SearchFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <SearchFilterContainer>
      <Form>
        <AddContact>Find Contact</AddContact>

        <Label>
          <Input
            type="text"
            name="filter"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Search contact"
          />
        </Label>
      </Form>
    </SearchFilterContainer>
  );
};

export default SearchFilter;
