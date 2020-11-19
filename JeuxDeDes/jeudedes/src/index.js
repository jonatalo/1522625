import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function App()
{
  function MainDes(props)
  {

    return(
    <>
      <img src={"de"+props.tableau[0]+".png"} width={104} onClick={() => props.handleClick(0)}  className="p-1" /> 
      <img src={"de"+props.tableau[1]+".png"} width={104} onClick={() => props.handleClick(1)}  className="p-1" />
      <img src={"de"+props.tableau[2]+".png"} width={104} onClick={() => props.handleClick(2)}  className="p-1" />
      <img src={"de"+props.tableau[3]+".png"} width={104} onClick={() => props.handleClick(3)}  className="p-1" />
      <img src={"de"+props.tableau[4]+".png"} width={104} onClick={() => props.handleClick(4)}  className="p-1" />
      <img src={"de"+props.tableau[5]+".png"} width={104} onClick={() => props.handleClick(5)}  className="p-1" />
    </>
    )
  }

  function StatistiqueDes(props)
  {
    var compteur =0; 
    var un =0;
    var deux=0;
    var trois=0;
    var quatre=0;
    var cinq=0;
    var six=0;
      while (compteur<=6) {
      
        if (props.tableau[compteur]==1)
       {
         un=un+1;
       }
       else if (props.tableau[compteur]==2)
       {
        deux=deux+1;
       }
       else if (props.tableau[compteur]==3)
       {
         trois=trois+1;
       }
       else if (props.tableau[compteur]==4)
       {
        quatre=quatre+1;
       }
       else if (props.tableau[compteur]==5)
       {
         cinq=cinq+1;
       }
       else if (props.tableau[compteur]==6)
       {
         six=six+1;
       }
       compteur++;
     };
     return(
      <>
        <h3> total de la main : {props.tableau[0]+props.tableau[1]+props.tableau[2]+props.tableau[3]+props.tableau[4]+props.tableau[5]}</h3>
        <h3>Stats</h3>
        <ul>
          <li>nombre de 1 : {un.toString()}</li>
          <li>nombre de 2 : {deux.toString()}</li>
          <li>nombre de 3 : {trois.toString()}</li>
          <li>nombre de 4 : {quatre.toString()}</li>
          <li>nombre de 5 : {cinq.toString()}</li>
          <li>nombre de 6 : {six.toString()}</li>
        </ul>
      </>
    );
  }
  function genrationNombreAleatoire(min,max)
  {
    return Math.floor(Math.random()*(max-min+1))+min;
  }
  function BrasseMainAlleatoire()
  {
    return[
      genrationNombreAleatoire(1,6),
      genrationNombreAleatoire(1,6),
      genrationNombreAleatoire(1,6),
      genrationNombreAleatoire(1,6),
      genrationNombreAleatoire(1,6),
      genrationNombreAleatoire(1,6)
    ];
  }
    function handleClick(index)
    {
      brasserDe(index);

    }

    const[ mainDes, setMainDes]=useState(BrasseMainAlleatoire())

    function brasserDe(index)
    { 
     
       var nouvelleValeurDes= genrationNombreAleatoire(1,6);
       var nouvelleMain = mainDes.slice();
       nouvelleMain[index]=nouvelleValeurDes;
       setMainDes(nouvelleMain);
    }
    return (
       <>
        <Container>
          <Row>
            <Col>
              <h1>
                Jeu de dés            
                <Button 
                 constiant="success"
                  className="m-1" onClick={() => setMainDes(BrasseMainAlleatoire())} >
                    Brasser la main
                </Button>
              </h1>
              <strong> cliquer sur l'image pour relancer un des</strong>
              <br/>
             <MainDes  tableau = {mainDes}
                        handleClick= {handleClick}
              />
             <StatistiqueDes tableau = {mainDes}

             /> 

            </Col>
          </Row>
        </Container>
      </>
    )
}





  ReactDOM.render(

      <App />,

    document.getElementById('root')
  );


