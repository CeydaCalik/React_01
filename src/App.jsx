import './App.css'
import { Demo1Component } from './assets/demos/1_base_component/Demo1Component'
import { Exo_1Component } from './exos/1_Creation_composant/Exo_1Component'
import { Demo2 } from './assets/demos/2_Conditionnel/Demo2'
import { Exo_2 } from './exos/2_Afficher_Conditionnel/Exo_2'
import { Demo3 } from './assets/demos/3_Collection/Demo3'
import { Exo_3 } from './exos/3_Liste_Films/Exo_3'
import { Demo4 } from './assets/demos/4_Event/Demo4'
import { Demo5 } from './assets/demos/5_State/Demo5'
import { Exo_4 } from './exos/4_Event/Exo_4'
import { Demo6 } from './assets/demos/6_Formulaire/Demo6'
import { Demo6Bis } from './assets/demos/6_Formulaire/6_Bis/Demo6Bis'
import { Demo6Lib } from './assets/demos/6_Formulaire/6_lib/Demo6Lib.jsx'


function App() {

  return (
    <>

                    {/* //? DEMO 1
      <Demo1Component name="HTML" type="Front-End" difficulty={5} />

      <Demo1Component name="Express" type="Back-End" difficulty={7} />

      <Demo1Component />





                  //? Exercice 1
      <Exo_1Component name="Grace" />
      <Exo_1Component name="Velo" />





                  //? DEMO 2

      <Demo2 owner="Khun" havePet={false} />

      <Demo2 owner="Aude" havePet={true} name="Soup" image="https://th.bing.com/th/id/OIP.weBGM5VuvRN5j8RWCR6zLgHaFj?w=250&h=186&c=7&r=0&o=7&pid=1.7&rm=3" type="chat" />

      <Demo2 owner="Jean" havePet={true} image="data:image/jpeg;base64,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" type="chien"/>
      
      <Demo2 owner="Marc" havePet={true} name="Plouf" type="chat"/>


                //? Exercice 2
      
      <Exo_2 isAvailable={false} name="Sword"/>
      <Exo_2 isAvailable={true} name="Brosse" image="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQRXqEw___qM-Ksjoce7r3qRfs6XDCQkyAtOKx6c2d40bIwNHSTwmzKcZ4YKhRVqJ4YQtTm9Fc45ZRbdu9l9kY" description="Broose multi usage" price={50} promoPrice={49.99} />
      <Exo_2 isAvailable={true} name="Axe" image="https://www.arms-n-armor.com/cdn/shop/products/pole006a_900x.jpg?v=1589944056" description="Long axe " price={50} promoPrice={49.99} />
      <Exo_2 isAvailable={false} name="Spear"/>
      <Exo_2 isAvailable={false} name="Gun"/>
      <Exo_2 isAvailable={true} name="Knives" image="https://assets.katogroup.eu/i/katogroup/FOFX-592_05_fox-knives-fairbairn-fofx-592-05" description="Black knive, very subtil" price={50} />
      <Exo_2 isAvailable={true} name="Nunchaku" image="https://www.katanas-samurai.com/img_pro/1072328/-311-Z-1-qexzyriquf.webp" description="Nunchaku made of inox " price={500} />



         //? DEMO 3
//           <Demo3 /> */} {/* 



          //? Exercice 3

//       <Exo_3 /> */}



                  {/* //? DEMO 4  */}
   {/* <Demo4 /> */}

{/* 
                    //? DEMO 5 */}

      {/* <Demo5 /> */}

                    {/* //? Exercice 4
    <Exo_4 />    */}

          //? DEMO 6

          <Demo6 />      
          <Demo6Bis />
          <Demo6Lib />      

    </>


  )
}

export default App
