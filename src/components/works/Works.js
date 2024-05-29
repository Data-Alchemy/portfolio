/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/Terraforge.png';
import Veritru from '../../assets/recentprojects/terraform.png';
import Lofo from '../../assets/recentprojects/snowflake_logo.png';
import Startup from '../../assets/recentprojects/databricks_logo.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Terraforge', 
      description: `Designed and developed a Full Stack LLM Application  
      using Ollama , Flask , Chroma DB , React and Typescript to simplify infrastructure creation and migration`,
      alter: 'Full Stack',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Azure Terraform', 
      description: `A fully modulized IaC component library for infrastructure creation`,
      alter: 'Terraform',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'Databricks Accelerator', 
      description: `End to end Databricks project that uses IaC boiler plate code and best practices to implement Databricks in organizations`,
      alter: 'Databricks',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'Snowflake Accelerator', 
      description: `End to end Snowflake project that uses IaC boiler plate code and best practices to implement Snowflake in organizations`,
      alter: 'Startup Project',
      image: `${Startup}`,
    }
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
