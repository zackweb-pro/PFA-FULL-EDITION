
class Chat{
    constructor(){
        this.args = {
            chatbox: document.querySelector(".chat_sec"),
            sendbtn: document.querySelector(".send_btn"),
            usermsg: document.getElementById("userMsg")

        }

        this.messages = []
        this.functions_array = [
            ["Concentrez-vous sur vos etudes.", "Je peux vous accompagner durant vos etudes.", "Essayez de ne pas secher les cours.", "Faites attention aux penalites si vous vous absentez souvent.", "Vous pouvez consulter votre emploi du temps sur notre plateforme en ligne."],
            ["Nos partenaires comprennent des entreprises de renom telles que X, Y et Z.", "Nous avons etabli des partenariats solides avec diverses entreprises du secteur.", "Nos partenaires academiques incluent des institutions prestigieuses du monde entier."],
            ["Nous proposons des programmes de mobilite internationale et de double diplomation dans plusieurs pays.", "L'annee d'echange est une opportunite unique pour etudier a l'etranger et elargir vos horizons academiques.", "Les etudiants ont la possibilite de suivre une partie de leur cursus dans nos universites partenaires a l'etranger."],
            ["N'oubliez pas que le cours tout seul ne suffit pas.", "Essayez d'appliquer votre cours maintenant.", "Les TDs restent un bon moyen pour appliquer votre cours.", "Vous pouvez trouver des ressources pedagogiques supplementaires sur notre plateforme en ligne."],
            ["Je suis la pour vous aider. Pouvez-vous me donner plus de details sur votre probleme?", "Je vais essayer de vous aider. Quel est votre probleme?", "N'hesitez pas a me poser n'importe quelle question. Je ferai de mon mieux pour vous aider."],
            ["Chaque filiere joue un role important.", "Choisissez votre filiere selon vos preferences.", "Ensias suit le marche du travail en proposant les dernieres innovations.", "Chaque filiere donne acces a une carriere particuliere.", "Vous pouvez trouver plus d'informations sur notre site web concernant les specialites de chaque filiere."],
        ]

    }
     emplois(chatbox, sendbtn, usermsg){
       let semestre;
       let msg = `<div class="bot_container">
                <div class="bot_msg">
                    <div class="name">BOT</div>
                    <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                    <div class="content">
                    quel semestre et periode cherchez vous ? choisir entre 1 et 2 et separer par espace
                    </div>
                </div>
            </div>`
            this.messages.push(msg)
            this.updatechattext(chatbox)
       function select_semestre(val){
          let msg = `<div class="user_container">
                <div class="user_msg">
                    <div class="name">VOUS</div>
                    <img src="/static/assets/imgs/mdi_user.png" alt="" class="user">
                    <div class="content">
                    ${val}
                    </div>
                    
                </div>
            </div>`
            val = val.trim()
            if( val == '1 2' || val == '2 1' || val == '1 1' || val == '2 2'){
                semestre = val
                console.log(semestre)
                if(val == '1 2'){
                    msg += `<div class="bot_container">
                    <div class="bot_msg">
                        <div class="name">BOT</div>
                        <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                        <div class="content">
                       voila votre emplois
                       <img src="/static/emploi/S1 P2 FULL.png">
                       <a href="/static/emploi/S1 P2 FULL.png" download>Télécharger</a>
                        </div>
                    </div>
                </div>`
                }
                if(val == '2 2'){
                    msg += `<div class="bot_container">
                    <div class="bot_msg">
                        <div class="name">BOT</div>
                        <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                        <div class="content">
                       voila votre emplois
                       <img src="/static/emploi/S2 P2.jpg">
                       <a href="/static/emploi/S2 P2.jpg" download>Télécharger</a>
                        </div>
                    </div>
                </div>`
                }
                if(val == '2 1'){
                    msg += `<div class="bot_container">
                    <div class="bot_msg">
                        <div class="name">BOT</div>
                        <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                        <div class="content">
                       voila votre emplois
                       <img src="/static/emploi/S2 P1 FULL.png">
                       <a href="/static/emploi/S2 P1 FULL.png" download>Télécharger</a>
                        </div>
                    </div>
                </div>`
                }
                if(val == '1 1'){
                    msg += `<div class="bot_container">
                    <div class="bot_msg">
                        <div class="name">BOT</div>
                        <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                        <div class="content">
                       voila votre emplois
                       <img src="/static/emploi/S1 P1 FULL.png">
                       <a href="/static/emploi/S1 P1 FULL.png" download>Télécharger</a>
                        </div>
                    </div>
                </div>`
                }
                usermsg.value = ''
                this.messages.push(msg)
                this.updatechattext(chatbox)
                return this.display()
            }else{
                msg += `<div class="bot_container">
                <div class="bot_msg">
                    <div class="name">BOT</div>
                    <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                    <div class="content">
                    s'il vous plait choisir un emplois valide
                    </div>
                </div>
            </div>`
            }
            usermsg.value = ''
            this.messages.push(msg)
            this.updatechattext(chatbox)


       }
       select_semestre = select_semestre.bind(this)
       
       sendbtn.onclick =  ()=>{
           select_semestre(usermsg.value)
       }
       


       
    }
      partenaire(chatbox){
        let ecole = ["CISCO", "IBM", "JUNIPER NETWORKS", "ORACLE",
                  "ORANGE BUSINESS SERVICES", "MEGA MICROSOFT", "MARITEMEX", "EDVANTIS"]
        let smsg =`<div class="bot_container">
                  <div class="bot_msg">
                      <div class="name">BOT</div>
                      <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                      <div class="content">
                      L'ENSIAS entretient des partenariats avec de nombreuses entreprises nationales et internationales.
                      </div>
                  </div>
              </div>`
              
        smsg += `<div class="bot_container">
        <div class="bot_msg">
            <div class="name">BOT</div>
            <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
            <div class="content">
            parmi eux nous pouvons citer
            </div>
        </div>
    </div>`
            let list = '<ul style="display= block; position: relative;">'
            ecole.forEach(e=>{
                list += `<li style="display= block; position: relative;">${e}</li>`
            })
            list += "</ul>"
            smsg += `<div class="bot_container">
            <div class="bot_msg">
                <div class="name">BOT</div>
                <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                <div class="content">
                    ${list}
                </div>
            </div>
        </div>`
        this.messages.push(smsg)
        this.updatechattext(chatbox)
    }
      mobilite(chatbox, sendbtn, usermsg){
        let semestre;
        let msg = `<div class="bot_container">
                 <div class="bot_msg">
                     <div class="name">BOT</div>
                     <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                     <div class="content">
                     L'ENSIAS encourage, depuis 1995, la mobilite internationale de ses etudiants.
                     <br>
                     il y a 2 type de mobilite:
                     </div>
                 </div>
             </div>`
              msg += `<div class="bot_container">
             <div class="bot_msg">
                 <div class="name">BOT</div>
                 <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                 <div class="content">
                 <ol style="position: relative">
                    <li style="position: relative">annee d'echange uniquement</li>
                    <li style="position: relative">double diplomation uniquement</li>
                    <li style="position: relative"> les deux a la fois</li>

                 <ol>
                 </div>
             </div>
         </div>`
         msg += `<div class="bot_container">
         <div class="bot_msg">
             <div class="name">BOT</div>
             <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
             <div class="content">
                Taper 1 2 ou 3 pour choisir.
             </div>
         </div>
     </div>`
             this.messages.push(msg)
             this.updatechattext(chatbox)
        function select_semestre(val){
           let msg = `<div class="user_container">
                 <div class="user_msg">
                     <div class="name">VOUS</div>
                     <img src="/static/assets/imgs/mdi_user.png" alt="" class="user">
                     <div class="content">
                     ${val}
                     </div>
                     
                 </div>
             </div>`
             val = val.trim()
             if( val == '1' || val == '2' || val == '3'){
                 semestre = val
                 console.log(semestre)
                 function doublediplomation(){
                    msg += `<div class="bot_container">
                    <div class="bot_msg">
                        <div class="name">BOT</div>
                        <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                        <div class="content">
                        dans le cadre de programmes de double diplomation qui offre la possibilite d'avoir un double diplôme
                        </div>
                    </div>
                </div>`
                msg += `<div class="bot_container">
                           <div class="bot_msg">
                               <div class="name">BOT</div>
                               <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                               <div class="content">
                               actuellement avec l'ENSIMAG et l'ISIMA sont les seuls ecoles permettant ceci
                               </div>
                           </div>
                       </div>`
                 }
                 function echange(){
                    msg += `<div class="bot_container">
                    <div class="bot_msg">
                        <div class="name">BOT</div>
                        <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                        <div class="content">
                        Un réseau d'ecoles d'ingenieurs partenaires accueille nos eleves ingénieurs soit dans le cadre de convention d'echanges d'etudiants pour suivre la troisieme annee à l'etranger
                        </div>
                    </div>
                </div>`
                let ecole = ["ENSIMAGENSIMAG", "ENSEIRB", "ENSEEIHT", "ESIEE", "ISIMA", "Telecom Saint Etienne",
                       " Ecole des Mines de Saint Etienne", " Universite de Stockholm", "ENSI de Tunis",
                   "Université de Sherbrooke"]
                    let list = '<ul style="display= block; position: relative;">'
                    ecole.forEach(e=>{
                        list += `<li style="display= block; position: relative;">${e}</li>`
                    })
                    list += "</ul>"
                    msg += `<div class="bot_container">
                    <div class="bot_msg">
                        <div class="name">BOT</div>
                        <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                        <div class="content">
                            ${list}
                        </div>
                    </div>
                </div>`
}
                 if(val == '2'){
                    doublediplomation()
                 }
                 if(val == '1'){
                   echange()
                 }
                 if(val == '3'){
                    doublediplomation()
                    echange()
                 }
                 usermsg.value = ''
                 this.messages.push(msg)
                 this.updatechattext(chatbox)
                 return this.display()
             }else{
                 msg += `<div class="bot_container">
                 <div class="bot_msg">
                     <div class="name">BOT</div>
                     <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                     <div class="content">
                     s'il vous plait choisir un nombre valide
                     </div>
                 </div>
             </div>`
             }
             usermsg.value = ''
             this.messages.push(msg)
             this.updatechattext(chatbox)
 
 
        }
        select_semestre = select_semestre.bind(this)
        
        sendbtn.onclick =  ()=>{
            select_semestre(usermsg.value)
        }
        
    }
      cours(chatbox, sendbtn, usermsg){
        
        




        let semestre;
       let msg = `<div class="bot_container">
                <div class="bot_msg">
                    <div class="name">BOT</div>
                    <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                    <div class="content">
                    quel semestre et periode dont existe-il ce cours ? choisir entre 1 et 2 et separer par espace
                    </div>
                </div>
            </div>`
            this.messages.push(msg)
            this.updatechattext(chatbox)
       function select_semestre(val){
          let msg = `<div class="user_container">
                <div class="user_msg">
                    <div class="name">VOUS</div>
                    <img src="/static/assets/imgs/mdi_user.png" alt="" class="user">
                    <div class="content">
                    ${val}
                    </div>
                    
                </div>
            </div>`
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        function cours1_1(){
            let cs = ["algorithmique", "economie et gestion d'entreprise",
                "comptabilite et gestion financiere", "probabilite", "programmation procedurale"]
            

      
        let smsg =`<div class="bot_container">
                  <div class="bot_msg">
                      <div class="name">BOT</div>
                      <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                      <div class="content">
                      les cours disponible sont: 
                       </div>
                  </div>
              </div>`
              

            let list = '<ol style="display= block; position: relative;">'
            cs.forEach(e=>{
                list += `<li style="display= block; position: relative;">${e}</li>`
            })
            list += "</ol>"
            smsg += `<div class="bot_container">
            <div class="bot_msg">
                <div class="name">BOT</div>
                <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                <div class="content">
                    ${list}
                </div>
            </div>
        </div>`
        smsg += `<div class="bot_container">
        <div class="bot_msg">
            <div class="name">BOT</div>
            <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
            <div class="content">
               taper le chiffre de cours que vous chercher: 
            </div>
        </div>
    </div>`
        this.messages.push(smsg)
        this.updatechattext(chatbox)

        function select_semestre(val){
            let msg = `<div class="user_container">
                  <div class="user_msg">
                      <div class="name">VOUS</div>
                      <img src="/static/assets/imgs/mdi_user.png" alt="" class="user">
                      <div class="content">
                      ${val}
                      </div>
                      
                  </div>
              </div>`
              val = parseInt(val)
              if(val>=1 && val <= cs.length){
                console.log(val)
                msg += `<div class="bot_container">
                           <div class="bot_msg">
                               <div class="name">BOT</div>
                               <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                               <div class="content">
                               <p style="position: relative; margin: 5px 0;">voila votre cours: </p>
                           
                           <a class="download_pdf" href="/static/cours/S1 P1/${cs[val-1]}.pdf" download>Télécharger: ${cs[val-1]}</a>
                               </div>
                           </div>
                       </div>`
                  this.messages.push(msg)
                  this.updatechattext(chatbox)
                  return this.display()
              }else{
                  msg += `<div class="bot_container">
                  <div class="bot_msg">
                      <div class="name">BOT</div>
                      <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                      <div class="content">
                      s'il vous plait choisir un chiffre de cours valide
                      </div>
                  </div>
              </div>`
              }
              usermsg.value = ''
              this.messages.push(msg)
              this.updatechattext(chatbox)
  
  
         }
         select_semestre = select_semestre.bind(this)
         
         sendbtn.onclick =  ()=>{
             select_semestre(usermsg.value)
         }

            
        }

        cours1_1 = cours1_1.bind(this)


/////////////////////////////////////////////////////////


function cours1_2(){
    let cs = ["management", "structure de donnee", "simulation",
           "base de donnee", "statistique descriptive", "competitive programming", "assembleur"]
    


let smsg =`<div class="bot_container">
          <div class="bot_msg">
              <div class="name">BOT</div>
              <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
              <div class="content">
              les cours disponible sont: 
               </div>
          </div>
      </div>`
      

    let list = '<ol style="display= block; position: relative;">'
    cs.forEach(e=>{
        list += `<li style="display= block; position: relative;">${e}</li>`
    })
    list += "</ol>"
    smsg += `<div class="bot_container">
    <div class="bot_msg">
        <div class="name">BOT</div>
        <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
        <div class="content">
            ${list}
        </div>
    </div>
</div>`
smsg += `<div class="bot_container">
<div class="bot_msg">
    <div class="name">BOT</div>
    <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
    <div class="content">
       taper le chiffre de cours que vous chercher: 
    </div>
</div>
</div>`
this.messages.push(smsg)
this.updatechattext(chatbox)

function select_semestre(val){
    let msg = `<div class="user_container">
          <div class="user_msg">
              <div class="name">VOUS</div>
              <img src="/static/assets/imgs/mdi_user.png" alt="" class="user">
              <div class="content">
              ${val}
              </div>
              
          </div>
      </div>`
      val = parseInt(val)
      if(val>=1 && val <= cs.length){
        console.log(val)
        msg += `<div class="bot_container">
                   <div class="bot_msg">
                       <div class="name">BOT</div>
                       <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                       <div class="content">
                       <p style="position: relative; margin: 5px 0;">voila votre cours: </p>
                   
                   <a class="download_pdf" href="/static/cours/S1 P2/${cs[val-1]}.pdf" download>Télécharger: ${cs[val-1]}</a>
                       </div>
                   </div>
               </div>`
          this.messages.push(msg)
          this.updatechattext(chatbox)
          return this.display()
      }else{
          msg += `<div class="bot_container">
          <div class="bot_msg">
              <div class="name">BOT</div>
              <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
              <div class="content">
              s'il vous plait choisir un chiffre de cours valide
              </div>
          </div>
      </div>`
      }
      usermsg.value = ''
      this.messages.push(msg)
      this.updatechattext(chatbox)


 }
 select_semestre = select_semestre.bind(this)
 
 sendbtn.onclick =  ()=>{
     select_semestre(usermsg.value)
 }

    
}

cours1_2 = cours1_2.bind(this)





function cours2_1(){
    let cs = ["calculabilite", "systeme d'exploitation", "programmation orientee objet",
           "base de donnees I", "transmission de donnees"]
    


let smsg =`<div class="bot_container">
          <div class="bot_msg">
              <div class="name">BOT</div>
              <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
              <div class="content">
              les cours disponible sont: 
               </div>
          </div>
      </div>`
      

    let list = '<ol style="display= block; position: relative;">'
    cs.forEach(e=>{
        list += `<li style="display= block; position: relative;">${e}</li>`
    })
    list += "</ol>"
    smsg += `<div class="bot_container">
    <div class="bot_msg">
        <div class="name">BOT</div>
        <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
        <div class="content">
            ${list}
        </div>
    </div>
</div>`
smsg += `<div class="bot_container">
<div class="bot_msg">
    <div class="name">BOT</div>
    <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
    <div class="content">
       taper le chiffre de cours que vous chercher: 
    </div>
</div>
</div>`
this.messages.push(smsg)
this.updatechattext(chatbox)

function select_semestre(val){
    let msg = `<div class="user_container">
          <div class="user_msg">
              <div class="name">VOUS</div>
              <img src="/static/assets/imgs/mdi_user.png" alt="" class="user">
              <div class="content">
              ${val}
              </div>
              
          </div>
      </div>`
      val = parseInt(val)
      if(val>=1 && val <= cs.length){
        console.log(val)
        msg += `<div class="bot_container">
                   <div class="bot_msg">
                       <div class="name">BOT</div>
                       <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                       <div class="content">
                       <p style="position: relative; margin: 5px 0;">voila votre cours: </p>
                   
                   <a class="download_pdf" href="/static/cours/S2 P1/${cs[val-1]}.pdf" download>Télécharger: ${cs[val-1]}</a>
                       </div>
                   </div>
               </div>`
          this.messages.push(msg)
          this.updatechattext(chatbox)
          return this.display()
      }else{
          msg += `<div class="bot_container">
          <div class="bot_msg">
              <div class="name">BOT</div>
              <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
              <div class="content">
              s'il vous plait choisir un chiffre de cours valide
              </div>
          </div>
      </div>`
      }
      usermsg.value = ''
      this.messages.push(msg)
      this.updatechattext(chatbox)


 }
 select_semestre = select_semestre.bind(this)
 
 sendbtn.onclick =  ()=>{
     select_semestre(usermsg.value)
 }

    
}

cours2_1 = cours2_1.bind(this)


/////////////////////////////////////////////////////////


function cours2_2(){
let cs = ['XML', 'logique des predicats',
       'base de donnees II', 'reseaux informatiques']


let smsg =`<div class="bot_container">
  <div class="bot_msg">
      <div class="name">BOT</div>
      <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
      <div class="content">
      les cours disponible sont: 
       </div>
  </div>
</div>`


let list = '<ol style="display= block; position: relative;">'
cs.forEach(e=>{
list += `<li style="display= block; position: relative;">${e}</li>`
})
list += "</ol>"
smsg += `<div class="bot_container">
<div class="bot_msg">
<div class="name">BOT</div>
<img src="/static/assets/imgs/Vector.png" alt="" class="bot">
<div class="content">
    ${list}
</div>
</div>
</div>`
smsg += `<div class="bot_container">
<div class="bot_msg">
<div class="name">BOT</div>
<img src="/static/assets/imgs/Vector.png" alt="" class="bot">
<div class="content">
taper le chiffre de cours que vous chercher: 
</div>
</div>
</div>`
this.messages.push(smsg)
this.updatechattext(chatbox)

function select_semestre(val){
let msg = `<div class="user_container">
  <div class="user_msg">
      <div class="name">VOUS</div>
      <img src="/static/assets/imgs/mdi_user.png" alt="" class="user">
      <div class="content">
      ${val}
      </div>
      
  </div>
</div>`
val = parseInt(val)
if(val>=1 && val <= cs.length){
console.log(val)
msg += `<div class="bot_container">
           <div class="bot_msg">
               <div class="name">BOT</div>
               <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
               <div class="content">
               <p style="position: relative; margin: 5px 0;">voila votre cours: </p>
           
           <a class="download_pdf" href="/static/cours/S2 P2/${cs[val-1]}.pdf" download>Télécharger: ${cs[val-1]}</a>
               </div>
           </div>
       </div>`
  this.messages.push(msg)
  this.updatechattext(chatbox)
  return this.display()
}else{
  msg += `<div class="bot_container">
  <div class="bot_msg">
      <div class="name">BOT</div>
      <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
      <div class="content">
      s'il vous plait choisir un chiffre de cours valide
      </div>
  </div>
</div>`
}
usermsg.value = ''
this.messages.push(msg)
this.updatechattext(chatbox)


}
select_semestre = select_semestre.bind(this)

sendbtn.onclick =  ()=>{
select_semestre(usermsg.value)
}


}

cours2_2 = cours2_2.bind(this)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





            val = val.trim()
            if( val == '1 2' || val == '2 1' || val == '1 1' || val == '2 2'){
                semestre = val
                console.log(semestre)
                if(val == '1 2'){
                    usermsg.value = ''
                    this.messages.push(msg)
                    this.updatechattext(chatbox)
                    return cours1_2()
                }
                if(val == '2 2'){
                    usermsg.value = ''
                    this.messages.push(msg)
                    this.updatechattext(chatbox)
                   return cours2_2()
                }
                if(val == '2 1'){
                    usermsg.value = ''
                    this.messages.push(msg)
                    this.updatechattext(chatbox)
                        return cours2_1()
                }
                if(val == '1 1'){
                    usermsg.value = ''
                    this.messages.push(msg)
                    this.updatechattext(chatbox)
                    return cours1_1()
                //     msg += `<div class="bot_container">
                //     <div class="bot_msg">
                //         <div class="name">BOT</div>
                //         <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                //         <div class="content">
                //        voila votre emplois
                //        <img src="/static/emploi/S1 P1 FULL.png">
                //        <a href="/static/emploi/S1 P1 FULL.png" download>Télécharger</a>
                //         </div>
                //     </div>
                // </div>`
                }
                usermsg.value = ''
                this.messages.push(msg)
                this.updatechattext(chatbox)
                return this.display()
            }else{
                msg += `<div class="bot_container">
                <div class="bot_msg">
                    <div class="name">BOT</div>
                    <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                    <div class="content">
                    s'il vous plait choisir un emplois valide
                    </div>
                </div>
            </div>`
            }
            usermsg.value = ''
            this.messages.push(msg)
            this.updatechattext(chatbox)


       }
       select_semestre = select_semestre.bind(this)
       
       sendbtn.onclick =  ()=>{
           select_semestre(usermsg.value)
       }
       





    }
      filiere(chatbox, sendbtn, usermsg){
        let tout = {"2SCL": "/static/affiche/2SCL_1.jpg",
        "2IA": "/static/affiche/2ia.jpg",
        "BIA": "/static/affiche/BIA_.jpg",
        "GD": "/static/affiche/GD_1.jpg",
        "GL": "/static/affiche/GL_1.jpg",
        "IDF": "/static/affiche/IDF_1.jpg",
        "IDSIT": "/static/affiche/IDSIT.jpg",
        "SSI": "/static/affiche/SSI_1.jpg",
        "SSE": "/static/affiche/SSE.jpg"}


          let msg = '';
                msg += `<div class="bot_container">
               <div class="bot_msg">
                   <div class="name">BOT</div>
                   <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                   <div class="content">
                   Entrez une filliere depuis ces filieres que vous chercher: 
                   </div>
               </div>
           </div>`
           msg += `<div class="bot_container">
           <div class="bot_msg">
               <div class="name">BOT</div>
               <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
               <div class="content">
               Les fillières disponibles sont :
               </div>
           </div>
       </div>`
       let ul = '<ul style="position: relative">'
       for (const e in tout) {
        ul += `<li style="position: relative">${e}</li>`
      }
      ul+="</ul>"
      msg += `<div class="bot_container">
      <div class="bot_msg">
          <div class="name">BOT</div>
          <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
          <div class="content">
         ${ul}
          </div>
      </div>
  </div>`
               this.messages.push(msg)
               this.updatechattext(chatbox)
          function select_semestre(val){
             let msg = `<div class="user_container">
                   <div class="user_msg">
                       <div class="name">VOUS</div>
                       <img src="/static/assets/imgs/mdi_user.png" alt="" class="user">
                       <div class="content">
                       ${val}
                       </div>
                       
                   </div>
               </div>`
               val = val.trim().toUpperCase()
               if(val == '2SCL' || val == 'GL' || val == '2IA' || val == 'BIA' || val == 'GD' || val == 'IDSIT' || val == 'IDF' || val == 'SSI' || val == 'SSE'){

                msg += `<div class="bot_container">
                            <div class="bot_msg">
                                <div class="name">BOT</div>
                                <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                                <div class="content">
                            voila votre emplois
                            <img src="${tout[val]}">
                            <a href="${tout[val]}" download>Télécharger</a>
                                </div>
                            </div>
                        </div>`
                   this.messages.push(msg)
                   this.updatechattext(chatbox)
                   return this.display()
               }else{
                   msg += `<div class="bot_container">
                   <div class="bot_msg">
                       <div class="name">BOT</div>
                       <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                       <div class="content">
                       s'il vous plait choisir une Filière valide
                       </div>
                   </div>
               </div>`
               }
               usermsg.value = ''
               this.messages.push(msg)
               this.updatechattext(chatbox)
   
   
          }
          select_semestre = select_semestre.bind(this)
          
          sendbtn.onclick =  ()=>{
              select_semestre(usermsg.value)
          }
    }
      aide(chatbox){
        let table = ["les emplois du temps", "les filieres ici a l'ensias", "les partenaires",
                 "les mobilites a l'etranger", "ou simplement si vous chercher un cours"]
        let smsg =`<div class="bot_container">
                  <div class="bot_msg">
                      <div class="name">BOT</div>
                      <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                      <div class="content">
                      bonjour, je pense que vous auriez de clarification
                       </div>
                  </div>
              </div>`
              
        smsg += `<div class="bot_container">
        <div class="bot_msg">
            <div class="name">BOT</div>
            <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
            <div class="content">
            je suis ENSIAS_chatbot, je peux vous donnez des renseignement concernant :
            </div>
        </div>
    </div>`

            let list = '<ul style="display= block; position: relative;">'
            table.forEach(e=>{
                list += `<li style="display= block; position: relative;">${e}</li>`
            })
            list += "</ul>"
            smsg += `<div class="bot_container">
            <div class="bot_msg">
                <div class="name">BOT</div>
                <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                <div class="content">
                    ${list}
                </div>
            </div>
        </div>`
        smsg += `<div class="bot_container">
        <div class="bot_msg">
            <div class="name">BOT</div>
            <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
            <div class="content">
            je serai ravi de repondre a vos demande.\nque puis-je faire pour vous ?
            </div>
        </div>
    </div>`
        this.messages.push(smsg)
        this.updatechattext(chatbox)
    }
     
    
    onsendbtn(sendbtn, chatbox, usermsg){
        let text = usermsg.value
        if(text == ""){
            return
        }
        let msg =`<div class="user_container">
                    <div class="user_msg">
                        <div class="name">VOUS</div>
                        <img src="/static/assets/imgs/mdi_user.png" alt="" class="user">
                        <div class="content">
                        ${text}
                        </div>
                        
                    </div>
                </div>`
        
        

        this.messages.push(msg)
        console.log(msg)
        
        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({message: text}),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(r => r.json())
        .then(r=>{
            let smsg =`<div class="bot_container">
                        <div class="bot_msg">
                            <div class="name">BOT</div>
                            <img src="/static/assets/imgs/Vector.png" alt="" class="bot">
                            <div class="content">
                                ${r.answer}
                            </div>
                        </div>
                    </div>`
            let isthere = false;
            let index;
            console.log(r.answer)
            this.functions_array.forEach((array, i) =>{
                if(array.includes(r.answer)){
                    isthere = true
                    index = i
                } 
            })
            console.log(isthere)
            if(isthere){
               if(index == 0){
                    this.emplois(chatbox, sendbtn, usermsg)

               }
               if(index == 1){
                    this.partenaire(chatbox)
               }
               if(index == 2){
                    this.mobilite(chatbox, sendbtn, usermsg)
               }
               if(index == 3){
                    this.cours(chatbox, sendbtn, usermsg)
               }
               if(index == 4){
                    this.aide(chatbox)
               }
               if(index == 5){
                this.filiere(chatbox, sendbtn, usermsg)
               }

            }else{
                this.messages.push(smsg)
            }
            console.log(smsg)
            this.updatechattext(chatbox)
            usermsg.value = ''
        }).catch((error)=>{
            console.error("Error: ", error)
            this.updatechattext(chatbox)
            usermsg.value = ''
        })
    }
    updatechattext(chatbox){
        let chatsec = ''
        this.messages.forEach((element)=>{
                chatsec += element
                
            
        })
        // <img src="/static/assets/imgs/material-symbols_edit-outline.png" alt="" class="modif">
        chatbox.innerHTML = chatsec
        chatbox.scrollTo({ top: chatbox.scrollHeight, behavior: 'smooth' })
    }
    display(){
        const {chatbox, sendbtn, usermsg} = this.args

        sendbtn.onclick = () => {
            this.onsendbtn(sendbtn, chatbox, usermsg)
        }



    }


}
const chatbot = new Chat()
chatbot.display()
const form = document.querySelector("form")
form.addEventListener('submit', (e)=>{
    e.preventDefault()
})