import React from 'react'
import Select from 'react-select'
import "./GenreFilterBar.css";
const GenreFilter = (props) => {
  const optionsf= props.genres;

  const handleChange = (selected: string[]) => {
    console.log(selected);
    props.onSelect(selected);
  };

  return (
    <div className='genre-filter-bar'>
      <div className='genre-filter__control'>
       <Select
             isClearable
             isSearchable
             onChange={handleChange}
          placeholder="Filter by Genre"
          value={optionsf.value}
          key={optionsf.value}
          options={optionsf}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: '#D6745E',
              primary: 'black',
            },
          })}
          className="genre-bar"
        />
      </div>
    </div>
  );
};

export default GenreFilter;
