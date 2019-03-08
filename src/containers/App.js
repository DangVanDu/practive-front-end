import React, {Component} from 'react'
import CreatePost from "./Createpost";
import AllPost from "./Allpost";
import {connect} from 'react-redux'

const PageCRUD = () => {
  return (
    <>
      <CreatePost/>
      <AllPost/>
    </>
  );
}
export default connect()(PageCRUD)
