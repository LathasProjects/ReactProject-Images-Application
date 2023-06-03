import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import alexaimage from "./images/alexa.png";
import cortanaimage from "./images/cortana.png";
import siriimage from "./images/siri.png"

function App(){
  return (
   <div>
    <section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      Personal Digital Assistance
    </p>
    
  </div>
</section>
    <div class="container"> 
      <section className="section">
          <div className="columns">
             <div className="column is-3">
                 <ProfileCard title="Alexa" handle="@alexa99" image={alexaimage} 
                 description="Amazon Alexa, also known simply as Alexa, is a virtual assistant technology largely based on a Polish speech synthesizer named Ivona."/>
             </div>
             <div className="column is-3">
                 <ProfileCard title="Cortana" handle="@Cortana32" image={cortanaimage} description="Cortana is Microsoft’s personal productivity assistant that helps you save time."/>
             </div>
             <div className="column is-3">
                  <ProfileCard title="Siri" handle="@siri01" image={siriimage} description="Siri is an easy way to make calls, send texts, use apps, and get things done with just your voice."/>
             </div>
          </div>
      </section>
    </div>
    </div>
      
       
      
       
     
       
    
  );
}

export default App;

