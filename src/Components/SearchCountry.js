const SearchCountry = (props) => {
  return (
    <form>
      <input type='text' onChange={props.onChange} value={props.value}/>
    </form>
  );
};

export default SearchCountry;