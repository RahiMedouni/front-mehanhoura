const rahimredux = (state = {language: "en"}, action) => {
    switch (action.type) {
      case "CHANGE_LANGUAGE":
        return { language: action.payload};
     
    }
  
    return state;
  };
  
  export default rahimredux;