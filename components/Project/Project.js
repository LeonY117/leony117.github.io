import React from 'react';
import Image from 'next/image';
import Tag from '@/components/UI/Tag/Tag';

import classes from './Project.module.css';

const tag_colors = {
  'reinforcement learning': '#FFDBFB',
  'computer vision': '#DBF2FF',
  'bayesian deep learning': '#DBFFE5',
  'efficient networks': '#FDEAB8',
  'language model': '#FFDBDB',
  'multi-task learning': '#DBDCFF',
  'autonomous navigation': '#FFFBDB',
  'scene understanding': '#D8E7FF',
  'object detection': '#DFF8CF',
  'industry project': '#FFDBDB',
  'physics simulation': '#DBF2FF',
  'emotion detection': '#DBFFE5',
};

const Project = (props) => {
  // get title, content, and image url from props:
  const title = props.title; //string
  const tags = props.tags; //array of strings
  const date = props.date; //string
  const location = props.location; //string
  const mainText = props.mainText; //<div> element
  const links = props.links; // <div> element
  const imgSrc = props.imgSrc; //string
  const imgAlt = props.imgAlt; //string

  let tagsList = null;
  if (tags) {
    tagsList = tags.map((tag) => {
      let color = '#F5F5F5';
      if (tag.toLowerCase() in tag_colors) {
        color = tag_colors[tag.toLowerCase()];
      }
      return (
        <li className={classes.Tag}>
          <Tag key={tag} color={color}>
            {tag}
          </Tag>
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
      <div className={classes.ImageLinkWrapper}>
        <div className={classes.ImageWrapper}>
          <Image src={imgSrc} alt={imgAlt} layout='fill' objectFit='contain' />
        </div>
        <div className={classes.Links}>{links}</div>
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
