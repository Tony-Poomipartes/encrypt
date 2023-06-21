import { Description } from "./description";
import {CaesarCipher} from "./caesar";
import VernamCipher from "./vernam";
import "../styles/homepage.css"


function HomePage  (){
  return (
    <>
      <div id="mainContainer">
        <Description/>
        <h3>Caesar Cipher</h3>
        <p>Le chiffrement de César est une méthode de chiffrement par substitution simple qui a été utilisée par Jules César lui-même. Il s'agit d'un décalage fixe des lettres de l'alphabet. Par exemple, avec un décalage de 3, la lettre "A" serait remplacée par la lettre "D", la lettre "B" par la lettre "E", et ainsi de suite.</p>
        <p>Pour déchiffrer le message, il vous suffit d'effectuer le décalage inverse. Par exemple, si vous avez chiffré avec un décalage de 3, vous devrez déchiffrer avec un décalage de -3 pour retrouver le message original.</p>
        <br />
        <CaesarCipher/>

        <h3>Vernam Cipher</h3>
        <p>Le chiffrement de Vernam, également connu sous le nom de chiffrement à flot, est une méthode de chiffrement qui utilise une clé secrète de la même longueur que le message à chiffrer. Il s'agit d'un chiffrement par combinaison bit à bit, où chaque bit du message est combiné avec le bit correspondant de la clé à l'aide d'une opération logique, généralement le XOR (OU exclusif).</p>
        <p>Mode d'emploi du chiffrement de Vernam :</p>
        <ul>
          <li>creer une clé secrète de la même longueur que le message que vous souhaitez chiffrer.</li>
          <li>ex: "toto" clef 3465  = wszt</li>
        </ul>
        <br />
        <VernamCipher/>
      </div>
    </>
  );
}
export default HomePage; 


