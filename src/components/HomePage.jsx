import { Description } from "./description";
import {CaesarCipher} from "./caesar";
import VernamCipher from "./vernam";

function HomePage  (){
  return (
    <>
      <div id="mainContainer">
        <Description/>
        <h3>Caesar Cipher</h3>
        <CaesarCipher/>
        <h3>Vernam Cipher</h3>
        <VernamCipher/>
      </div>
    </>
  );
}
export default HomePage; 


