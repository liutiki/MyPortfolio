import { Link } from 'react-router-dom';
import styled from 'styled-components';
import check from './Projects/assets/check.png';
import meal from './Projects/assets/Meal Ideas.png';
import recipe from './Projects/assets/FindRecipe.png';
import weather from './Projects/assets/WeatherAPI.jpeg';
import shipping from './Projects/assets/kmp.png';
import massage from './Projects/assets/massage.png';
import { useTranslation } from 'react-i18next';

const HeaderPosition=styled.div`
display:flex;
justify-content:flex-start;
margin-bottom:10px;
`;  

const Some=styled.h1`
    margin-top: 130px;
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

     <BlockTwo>
                <Image src={weather} alt="weatherAPI" />
                <Items>
                    <Header>Weather API</Header>
                    <p>Input any country or town   --  press ENTER</p>
                    <p>Check the weather</p>
                                          <br />
                    <p>DEVELOPMENT TOOLS</p>
                    <p><img src={check} width="20px" alt="check" />Project on JavaScript</p>
                    <p><img src={check} width="20px" alt="check" /></p>
                    <p><img src={check} width="20px" alt="check" /></p>
                    <p><img src={check} width="20px" alt="check" /></p>
                    <a href="https://api-weather-julia.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <ViewButton>{t('View Project')}</ViewButton>
                    </a>
                          <a href="https://github.com/liutiki/API-Weather" target="_blank" rel="noopener noreferrer">
                          <ViewButton>{t('View GitHub')}</ViewButton>
                          </a>
                </Items>
            </BlockTwo>


             <BlockTwo>
                <Image src={recipe} alt="recipeSearch" />
                <Items>
                    <Header>API Covered with tests </Header>
                    <Header>"Find any recipe you want!"</Header>
                    <p>Use input at the top of the screen. Write any product in English. </p>
                    <p> Press 'enter' or use button from the right side of the input.</p>
            
                    <p>DEVELOPMENT TOOLS</p>
                    <p><img src={check} width="20px" alt="check" />React API</p>
                    <p><img src={check} width="20px" alt="check" />Hooks: useState, useEffect</p>
                    <p><img src={check} width="20px" alt="check" />Map</p>
                    <p><img src={check} width="20px" alt="check" />Props</p>
                    <a href="https://apirecipe.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <ViewButton>{t('View Project')}</ViewButton>
                         
                    </a>
                     <a href="https://github.com/liutiki/Recipe-API-new-code" target="_blank" rel="noopener noreferrer">
                          <ViewButton>{t('View GitHub')}</ViewButton>
                          </a>
                </Items>
            </BlockTwo>

            <Block>
            <Image src={meal} alt="mealIdeas" />
                <Items>
                    <Header>Version of TO/DO APP</Header>
                    <Header>"Plan your meal for a day"</Header>
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
                     <a href="https://github.com/liutiki/Plan-for-a-day-React" target="_blank" rel="noopener noreferrer">
                          <ViewButton>{t('View GitHub')}</ViewButton>
                          </a>
                </Items>
            </Block>

             <Block>
            <Image src={shipping} alt="KMP" />
                <Items>
                    <Header>Web site for shipping company</Header>
                    
                    <br />
                    <p>DEVELOPMENT TOOLS</p>
                    <p><img src={check} width="20px" alt="check" />React</p>
                    <p><img src={check} width="20px" alt="check" />Hooks: useState, useEffect</p>
                    <p><img src={check} width="20px" alt="check" />Map</p>
                   
                    <a href="https://kdsc.ru" target="_blank" rel="noopener noreferrer">
                        <ViewButton>{t('View Project')}</ViewButton>
                       
                    </a>
                     <a href="https://github.com/liutiki/KMP.git" target="_blank" rel="noopener noreferrer">
                          <ViewButton>{t('View GitHub')}</ViewButton>
                          </a>
                </Items>
            </Block>

             <BlockTwo>
            <Image src={massage} alt="massage" />
                <Items>
                    <Header>Massage Salon</Header>
                    
                    <br />
                    <p>DEVELOPMENT TOOLS</p>
                    <p><img src={check} width="20px" alt="check" />React</p>
                    <p><img src={check} width="20px" alt="check" />REDUX toolkit</p>
                    <p><img src={check} width="20px" alt="check" />Hooks: useState, useEffect</p>
                    <p><img src={check} width="20px" alt="check" />Map</p>
                   
                    <a href="https://massagesalon.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <ViewButton>{t('View Project')}</ViewButton>
                       
                    </a>
                     <a href="https://github.com/liutiki/MassageSalon" target="_blank" rel="noopener noreferrer">
                          <ViewButton>{t('View GitHub')}</ViewButton>
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

