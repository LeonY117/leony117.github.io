import React from 'react';
import Image from 'next/image';
import Tag from '@/components/UI/Tag/Tag';

import classes from './Project.module.css';

const Project = (props) => {
  // get title, content, and image url from props:
  const title = props.title; //string
  const tags = props.tags; //array of strings
  const date = props.date; //string
  const location = props.location; //string
  const mainText = props.mainText; //<div> element
  const urlText = props.urlText; // <div> element
  const imgURL = props.imgURL; //string
  const imgAlt = props.imgAlt; //string

  let tagsList = null;
  if (tags) {
    tagsList = tags.map((tag) => {
      return (
        <li className={classes.Tag}>
          <Tag key={tag}>{tag}</Tag>
        </li>
      );
    });
  }

  let metaDataText = '';
  let metaData = null;
  if (date) {
    metaDataText += date;
  }
  if (location) {
    metaDataText += ' | ' + location;
  }
  if (metaDataText) {
    metaData = <p className={classes.MetaData}>{metaDataText}</p>;
  }

  let mainBody = (
    <div className={classes.MainBody}>
      <div className={classes.ImageWrapper}>
        <Image src={imgURL} alt={imgAlt} layout='fill' objectFit='contain' />
      </div>
      <div className={classes.TextWrapper}>{mainText}</div>
    </div>
  );

  return (
    <div>
      <h2 className={classes.Title}>{title}</h2>
      {tagsList ? <ul className={classes.Tags}>{tagsList}</ul> : null}
      {metaData}
      {mainBody}
    </div>
  );
};

export default Project;
