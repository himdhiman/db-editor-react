import React from "react";
import Header from "../Components/Header";
import Editor from "../Components/Editor";
import { IRootState } from "../Redux/Types";
import { ConnectedProps, connect } from "react-redux";
import { ChangeThemeService } from "../Services/Application/ChangeThemeService";



const HomePage = (props: PropsFromRedux) => {
  const toggleTheme = () => {
    ChangeThemeService(props.theme);
  };

  return (
    <div>
      <Header />
      <Editor />
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    theme: state.ApplicationTheme.theme,
  };
};

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HomePage);
