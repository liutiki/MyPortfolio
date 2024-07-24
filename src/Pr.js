import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import check from './Projects/Scrinshots/check.png';
import meal from './Projects/Scrinshots/Meal Ideas.png';
import recipe from './Projects/Scrinshots/FindRecipe.png';
import { useTranslation } from 'react-i18next';

const HeaderPosition=styled.div`
display:flex;
justify-content:flex-start;
margin-left: 15%;
margin-bottom:10px;
`;  

const Some=styled.h1`
    margin-top: 30px;
    font-size: 40px;
    color:#D24545;
    font-family: "Exo 2", sans-serif;
    line-height: 50px;
    font-weight: 700;
    @media (max-width: 500px) {
        font-size: 25px;
    
    }
`;

const Block = styled.div`
background-color: #1d2b53b5;
    display: flex;
    flex-direction: row;
    align-items: center;
  
    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

const BlockTwo = styled.div`
    background-color: #50727B;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

const Header = styled.h1`
    font-family: 'Exo 2', sans-serif;
    font-size: 35px;

    @media (max-width: 500px) {
        font-size: 20px;
    }
`;

const Items = styled.div`
    color: white;
    margin: 50px;
    font-family: "Roboto Mono, monospace";
`;

const ViewButton = styled.button`
    padding: 13px;
    background-color: white;
    color: black;
    font-size: 19px;

    &:hover {
        background-color: black;
        color: white;
    }
`;

const Image = styled.img`
    width: 600px;
    margin-left: 20px; 
    @media (max-width: 500px) {
        width: 80%;
        }
`;

const WatchPosition = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3%;
`;

const WatchMore = styled.button`
    padding: 19px;
    width:170%;
    background-color: white;
    color: black;
    font-size: 19px;

    &:hover {
        background-color: black;
        color: white;
    }
        @media (max-width: 500px) {
            width:150%;
            font-size: 19px;
            padding: 12px;
    }

`;

function Pr() {

    const {t}=useTranslation()


    return (
        <div>
            <HeaderPosition>
   <Some>{t('Some of my works')}</Some>
   </HeaderPosition>
            <Block>
            <Image src={meal} alt="mealIdeas" />
                <Items>
                    <Header>Plan your meal for a day</Header>
                    <p>It is a web app, where you can take notes, edit them and delete.</p>
                    <p>To make a first step - use button "ADD", for edit - press on a note.</p>
                    <br />
                    <p>DEVELOPMENT TOOLS</p>
                    <p><img src={check} width="20px" alt="check" />React</p>
                    <p><img src={check} width="20px" alt="check" />Hooks: useState, useEffect</p>
                    <p><img src={check} width="20px" alt="check" />Map</p>
                    <p><img src={check} width="20px" alt="check" />Local Storage</p>
                    <a href="https://willowy-moxie-11fc60.netlify.app" target="_blank" rel="noopener noreferrer">
                        <ViewButton>{t('View Project')}</ViewButton>
                    </a>
                </Items>
            </Block>

            <BlockTwo>
                <Image src={recipe} alt="recipeSearch" />
                <Items>
                    <Header>Find any recipe you want!</Header>
                    <p>Use input at the top of the screen. Write any product in English. Press 'enter' or use button from the right side of the input.</p>
                    <br />
                    <p>DEVELOPMENT TOOLS</p>
                    <p><img src={check} width="20px" alt="check" />React API</p>
                    <p><img src={check} width="20px" alt="check" />Hooks: useState, useEffect</p>
                    <p><img src={check} width="20px" alt="check" />Map</p>
                    <p><img src={check} width="20px" alt="check" />Props</p>
                    <a href="https://zesty-kangaroo-5d8f42.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <ViewButton>{t('View Project')}</ViewButton>
                    </a>
                </Items>
            </BlockTwo>

            <WatchPosition>
                <Link to="/projects">
                    <WatchMore>{t('Watch more')}</WatchMore>
                </Link>
            </WatchPosition>
        </div>
    );
}

export default Pr;

