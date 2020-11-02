import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import PropTypes from 'prop-types';

function CustomChatbot() {

  let result = ''

  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };

  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#00B2B2",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#00B2B2",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c"
  };
  const Search = (props) => {
    const { steps } = props;
    const name = steps.name.value;
  
    if (name.toLowerCase() === 'iphone 7 plus') {
      result = 'Name: Iphone 7 plus' + ' - Price: $328'
    }
    else if (name.toLowerCase() === 'iphone x') {
      result = 'Name: Iphone X' + ' - Price: $479'
    }
    else if (name.toLowerCase() === 'samsung galaxy a70') {
      result = 'Name: Samsung Galaxy A70' + ' - Price: $318'
    }
    else if (name.toLowerCase() === 'samsung galaxy m10') {
      result = 'Name: Samsung Galaxy M10' + ' - Price: $115'
    }
    else {
      result = "Not found"
    }
    return (
      <div>
        {result}
      </div>
    );
  };

  Search.propTypes = {
    steps: PropTypes.object
  };

  Search.defaultProps = {
    steps: undefined
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to Amazon",
      trigger: "Ask name"
    },
    {
      id: "Ask name",
      message: "Please type your product name?",
      trigger: "name"
    },
    {
      id: "name",
      user: true,
      trigger: "search"
    },
    {
      id: "search",
      component: <Search />,
      trigger: "question"
    },
    {
      id: "question",
      message: "Do you want to continue search?",
      trigger: "Displaying options"
    },
    {
      id: 'Displaying options',
      options: [
        {
          value: "Yes",
          label: "Yes",
          trigger: "name"
        },
        { value: "No", label: "No", trigger: "done" }
      ]
    },
    {
      id: "done",
      message: "Have a nice day !!",
      end: true
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default CustomChatbot;
